import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { useMemo } from "react";
import { Loading } from "../../components/loading/Loading";
import { useFetchContentful } from "../../api/useFetch";
import { Card } from "../card/Card";
import { Grid } from "../grid/Grid";

export const Sessions = ({ campaignId }) => {
  const query = useMemo(
    () => ({ content_type: "session", "fields.campaign.sys.id": campaignId }),
    [campaignId]
  );
  const { data, loading, error } = useFetchContentful(query);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const publicSessions = data.filter(
    (session) => session.fields.public === true
  );

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, description, title } = node.data.target.fields;
        const imageUrl = file.url.startsWith("//")
          ? `https:${file.url}`
          : file.url;
        return (
          <img
            src={imageUrl}
            alt={description || title}
            style={{
              maxWidth: "150px",
              height: "auto",
              display: "inline-block",
            }}
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const target = node.data.target;
        if (target && target.fields) {
          const slug = target.fields.slug || "";
          const name = target.fields.name || children;
          return (
            <a
              href={`/entry/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {children}
            </a>
          );
        }
        return { children };
      },
    },
  };

  console.log(data);

  return (
    <>
      <h3>Sessions</h3>
      <Grid>
        {publicSessions.map((session) => (
          <Card>
            <h4>{session.fields.name}</h4>
            <img
              src={session.fields.image.fields.file.url}
              alt={session.fields.image.fields.file.fileName}
            />
            <article>
              {documentToReactComponents(
                session.fields.description,
                renderOptions
              )}
            </article>
          </Card>
        ))}
      </Grid>
    </>
  );
};
