import { Link } from "react-router";
import { Avatar } from "./avatar/Avatar";
import s from "./Profile.module.scss";
import { Card } from "../card/Card";

export const ProfileTag = ({ imageUrl, imageAlt, name, role, slug }) => {
  return (
    <Link className={s.profileTag} to={`/profile/${slug}`}>
      <Avatar url={imageUrl} alt={imageAlt} />
      <hgroup>
        <h3 className={s.name}>{name}</h3>
        {/* <h4 className={s.class}>{role}</h4> */}
      </hgroup>
    </Link>
  );
};
