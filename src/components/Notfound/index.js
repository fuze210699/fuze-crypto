import React from "react";
import notfound from "assets/lottifiles/notfound.json";
import Lottie from "react-lottie";
export default function Notfound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} />
    </>
  );
}
