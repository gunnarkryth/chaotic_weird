import s from "./../Profile.module.scss";

export const Avatar = ({ url, alt, status }) => {
  return (
    <>
      <img className={s.avatar} src={url} alt={alt} />
      {status && <div className={`s.${status}`}>{status}</div>}
    </>
  );
};
