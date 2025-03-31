import s from "./Nav.module.scss";
import { useMemo } from "react";
import { useFetchContentful } from "../../../api/useFetch";
import { Loading } from "../../loading/Loading";
import { Link } from "react-router";
import { Card } from "../../card/Card";

export const Nav = () => {
  const query = useMemo(() => ({ content_type: "campaign" }), []);
  const { data, loading, error } = useFetchContentful(query);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <nav className={s.nav}>
      <ul>
        {data?.map((campaign) => (
          <li key={campaign.fields.slug}>
            <Link to={`/campaign/${campaign.fields.slug}`}>
              <Card>{campaign.fields.name}</Card>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
