import { useMemo } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/loading/Loading";
import { useFetchContentful } from "../../api/useFetch";
import { Sessions } from "../../components/sessions/Sessions";
import { Avatar } from "../../components/profile/avatar/Avatar";
import { Row } from "./row/Row";

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
        <Row>
          {campaign.fields.gameMaster.map((gameMaster) => (
            <Avatar url={gameMaster.fields.image.fields.file.url}/>
          ))}
        </Row>
      </header>
      <Sessions campaignId={campaign.sys.id} />
    </>
  );
};
