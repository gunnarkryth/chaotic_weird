import s from "./Nav.module.scss";
import { useMemo } from "react";
import { useFetchContentful } from "../../../api/useFetch";
import { Loading } from "../../loading/Loading";
import { Link } from "react-router";

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
              <p className={s.item}>{campaign.fields.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
