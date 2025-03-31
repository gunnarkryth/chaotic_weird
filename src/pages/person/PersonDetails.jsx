import { Loading } from "../../components/loading/Loading";
import { useParams } from "react-router";
import { useFetchContentful } from "../../api/useFetch";
import { useMemo } from "react";
import { Avatar } from "../../components/profile/avatar/Avatar";

export const PersonDetails = () => {
  const { slug } = useParams();

  const query = useMemo(
    () => ({ content_type: "person", "fields.slug[in]": slug }),
    [slug]
  );
  const { data, loading, error } = useFetchContentful(query);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const person = data[0];

  console.log(person);

  return (
    <>
      <Avatar url={person.fields.image.fields.file.url} />
    </>
  );
};
