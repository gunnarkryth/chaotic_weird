import s from "./Card.module.scss";

export const Card = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};
