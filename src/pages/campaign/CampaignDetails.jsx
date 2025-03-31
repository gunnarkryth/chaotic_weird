import { useMemo } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/loading/Loading";
import { useFetchContentful } from "../../api/useFetch";
import { ProfileTag } from "../../components/profile/ProfileTag";
import { Roster } from "../../components/roster/Roster";
import { Sessions } from "../../components/sessions/Sessions";

export const CampaignDetails = () => {
  const { slug } = useParams();

  const query = useMemo(
    () => ({ content_type: "campaign", "fields.slug[in]": slug }),
    [slug]
  );
  const { data, loading, error } = useFetchContentful(query);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const campaign = data[0];

  console.log(campaign);

  return (
    <>
      <header>
        <h2>{campaign.fields.name}</h2>
        <Roster>
          {campaign.fields.gameMaster.map((gameMaster) => (
            <ProfileTag
              key={gameMaster.fields.slug}
              imageUrl={gameMaster.fields.image.fields.file.url}
              imageAlt={gameMaster.fields.image.fields.file.fileName}
              name={gameMaster.fields.name}
              role={"Game master"}
              slug={gameMaster.fields.slug}
            />
          ))}
        </Roster>
      </header>
      <Sessions campaignId={campaign.sys.id} />
    </>
  );
};
