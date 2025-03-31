import s from "./Grid.module.scss";

export const Grid = ({ children }) => {
  return <div className={s.grid}>{children}</div>;
};
