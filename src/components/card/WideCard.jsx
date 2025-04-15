import s from "./Card.module.scss";

export const WideCard = ({ children }) => {
  return <div className={s.wide_card}>{children}</div>;
};
