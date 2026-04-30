import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes, glassPanel } from "../theme";

const MD_LINES: { text: string; appearAt: number; style?: "h1" | "h2" | "p" | "arrow" }[] = [
  { text: "# Amazon · Business Profile", appearAt: 8, style: "h1" },
  { text: "", appearAt: 25 },
  { text: "## Segments", appearAt: 30, style: "h2" },
  { text: "Retail · AWS · Ads", appearAt: 50, style: "p" },
  { text: "", appearAt: 70 },
  { text: "## Revenue Model", appearAt: 78, style: "h2" },
  { text: "volume × price × geography", appearAt: 100, style: "p" },
  { text: "", appearAt: 120 },
  { text: "## Moat", appearAt: 128, style: "h2" },
  { text: "AWS scale + Prime ecosystem", appearAt: 150, style: "p" },
  { text: "", appearAt: 170 },
  { text: "→ DCF variant: roic-dcf", appearAt: 185, style: "arrow" },
  { text: "  (capex >25% of revenue)", appearAt: 200, style: "p" },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene2Profile: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 25], [12, 0], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        padding: "80px 100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Phase header */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.accentBlue,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Phase 2 · Business Understanding
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textBase,
            color: colors.textMuted,
          }}
        >
          .db/analysis/understanding/AMZN/profile.md
        </div>
      </div>

      {/* Markdown editor — glass panel */}
      <div
        style={{
          ...glassPanel,
          flex: 1,
          padding: "44px 56px",
          fontFamily: fonts.mono,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {MD_LINES.map((line, i) => {
          const opacity = interpolate(frame, [line.appearAt, line.appearAt + 12], [0, 1], {
            easing: easeOut,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const translateY = interpolate(frame, [line.appearAt, line.appearAt + 15], [8, 0], {
            easing: easeOut,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          if (line.text === "") {
            return <div key={i} style={{ height: 12 }} />;
          }

          let style: React.CSSProperties = {
            opacity,
            transform: `translateY(${translateY}px)`,
            fontSize: sizes.textBase,
          };

          if (line.style === "h1") {
            style = {
              ...style,
              color: colors.accentBlue,
              fontSize: sizes.textXl,
              fontWeight: 600,
            };
          } else if (line.style === "h2") {
            style = {
              ...style,
              color: colors.accentCyan,
              fontSize: sizes.textLg,
              fontWeight: 600,
              marginTop: 4,
            };
          } else if (line.style === "arrow") {
            style = {
              ...style,
              color: colors.accentPurple,
              fontSize: sizes.textLg,
              fontWeight: 600,
              marginTop: 12,
            };
          } else {
            style = {
              ...style,
              color: colors.textPrimary,
            };
          }

          return (
            <div key={i} style={style}>
              {line.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
