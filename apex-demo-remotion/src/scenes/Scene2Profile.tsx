import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes } from "../theme";

// Markdown lines that auto-type sequentially
const MD_LINES: { text: string; appearAt: number; style?: "h2" | "p" | "list" | "arrow" }[] = [
  { text: "# Amazon · Business Profile", appearAt: 10, style: "h2" },
  { text: "", appearAt: 30 },
  { text: "## Segments", appearAt: 35, style: "h2" },
  { text: "Retail · AWS · Ads", appearAt: 60, style: "p" },
  { text: "", appearAt: 80 },
  { text: "## Revenue Model", appearAt: 90, style: "h2" },
  { text: "volume × price × geography", appearAt: 115, style: "p" },
  { text: "", appearAt: 130 },
  { text: "## Moat", appearAt: 140, style: "h2" },
  { text: "AWS scale + Prime ecosystem", appearAt: 165, style: "p" },
  { text: "", appearAt: 180 },
  { text: "→ DCF variant: roic-dcf", appearAt: 200, style: "arrow" },
  { text: "  (capex >25% of revenue)", appearAt: 220, style: "p" },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene2Profile: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
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
      <div style={{ opacity: titleOpacity, marginBottom: 50 }}>
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

      {/* Markdown editor view */}
      <div
        style={{
          flex: 1,
          backgroundColor: colors.bgPanel,
          border: `1px solid ${colors.borderSubtle}`,
          borderRadius: 16,
          padding: "48px 56px",
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

          // If empty string, render spacer
          if (line.text === "") {
            return <div key={i} style={{ height: 16 }} />;
          }

          let style: React.CSSProperties = {
            opacity,
            transform: `translateY(${translateY}px)`,
            fontSize: sizes.textBase,
          };

          if (line.style === "h2") {
            style = {
              ...style,
              color: colors.accentCyan,
              fontSize: sizes.textLg,
              fontWeight: 600,
              marginTop: 8,
            };
          } else if (line.style === "arrow") {
            style = {
              ...style,
              color: colors.accentPurple,
              fontSize: sizes.textLg,
              fontWeight: 600,
              marginTop: 16,
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
