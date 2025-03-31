import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import s from "./Loading.module.scss";

export const Loading = () => {
  return (
    <>
      <DotLottieReact className={s.loading}
        src="https://lottie.host/1efeccf8-9c36-4cc2-be66-ed57233bc1eb/Z1qbohIPv2.lottie"
        loop
        autoplay
      />
    </>
  );
};
