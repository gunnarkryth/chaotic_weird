import s from "./Roster.module.scss";

export const Roster = ({children}) => {
  return (
    <div className={s.roster}>{children}</div>
  )
}