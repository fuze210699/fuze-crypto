import load from "assets/lottifiles/load.json";
import Lottie from "react-lottie";

export default function Index() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
      }}
    >
      <Lottie height={300} width={300} options={defaultOptions} />
    </div>
  );
}
