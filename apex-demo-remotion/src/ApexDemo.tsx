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
        background: `linear-gradient(180deg, ${colors.bgGradientFrom} 0%, ${colors.bgGradientVia} 50%, ${colors.bgGradientTo} 100%)`,
        fontFamily: fonts.sans,
        color: colors.textPrimary,
      }}
    >
      {/* Ambient glow — top-left cyan */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 15% 10%, ${colors.accentCyan}1a, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow — bottom-right purple */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 85% 90%, ${colors.accentPurple}1a, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid overlay — IDE feel */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(${colors.borderSubtle} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.borderSubtle} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.25,
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
