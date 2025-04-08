import { useMemo } from "react";
import { useParams } from "react-router";
import { Loading } from "../../components/loading/Loading";
import { useFetchContentful } from "../../api/useFetch";
import { ProfileTag } from "../../components/profile/ProfileTag";
import { Roster } from "../../components/roster/Roster";
import { Sessions } from "../../components/sessions/Sessions";

export const SessionDetails = () => {
  const { slug } = useParams();

  const query = useMemo(
    () => ({ content_type: "session", "fields.slug[in]": slug }),
    [slug]
  );
  const { data, loading, error } = useFetchContentful(query);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const Session = data[0];

  console.log(Session);

  return (
    <>
      <header>
        <h2>{Session.fields.name}</h2>
      </header>
    </>
  );
};
