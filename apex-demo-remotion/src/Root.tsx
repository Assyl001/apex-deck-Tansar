import "./index.css";
import { Composition } from "remotion";
import { ApexDemo } from "./ApexDemo";
import { sizes, totalFrames } from "./theme";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ApexDemo"
        component={ApexDemo}
        durationInFrames={totalFrames}
        fps={sizes.fps}
        width={sizes.width}
        height={sizes.height}
      />
    </>
  );
};
