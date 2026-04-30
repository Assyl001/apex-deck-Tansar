import { AbsoluteFill, Series } from "remotion";
import { Scene1Data } from "./scenes/Scene1Data";
import { Scene2Profile } from "./scenes/Scene2Profile";
import { Scene3Excel } from "./scenes/Scene3Excel";
import { Scene4Conviction } from "./scenes/Scene4Conviction";
import { colors, fonts, sizes } from "./theme";

export const ApexDemo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        fontFamily: fonts.sans,
        color: colors.textPrimary,
      }}
    >
      {/* Subtle grid overlay — IDE feel */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(${colors.borderSubtle} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.borderSubtle} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Subtle ambient glow */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at top right, ${colors.accentCyan}10, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Series>
        <Series.Sequence durationInFrames={sizes.scene1Frames}>
          <Scene1Data />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sizes.scene2Frames}>
          <Scene2Profile />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sizes.scene3Frames}>
          <Scene3Excel />
        </Series.Sequence>
        <Series.Sequence durationInFrames={sizes.scene4Frames}>
          <Scene4Conviction />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
