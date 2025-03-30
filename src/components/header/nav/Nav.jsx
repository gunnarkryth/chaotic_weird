import { useMemo } from "react";
import { useFetchContentful } from "../../../api/useFetch";
import { Loading } from "../../loading/Loading";

export const Nav = () => {
  const query = useMemo(() => ({ content_type: "campaign" }), []);
  const { data, loading, error } = useFetchContentful(query);

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <nav>
      <ul>
        {data?.map((campaign) => (
          <li key={campaign.fields.slug}>{campaign.fields.name}</li>
        ))}
      </ul>
    </nav>
  );
};
