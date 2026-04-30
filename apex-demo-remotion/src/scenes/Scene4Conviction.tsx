import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes, glassPanel } from "../theme";

const PILLARS: { key: string; value: string; type: "number" | "string"; appearAt: number }[] = [
  { key: "valuation_gap", value: "0.74", type: "number", appearAt: 18 },
  { key: "earnings_quality", value: "0.82", type: "number", appearAt: 30 },
  { key: "smart_money", value: "0.61", type: "number", appearAt: 42 },
  { key: "risk_balance", value: "0.55", type: "number", appearAt: 54 },
  { key: "cycle_position", value: "0.43", type: "number", appearAt: 66 },
  { key: "market_positioning", value: '"neutral"', type: "string", appearAt: 78 },
  { key: "catalyst_clarity", value: "3", type: "number", appearAt: 90 },
  { key: "normalized_basis", value: '"$70.4B"', type: "string", appearAt: 105 },
  { key: "headline_basis", value: '"$77.7B"', type: "string", appearAt: 117 },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene4Conviction: React.FC = () => {
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

  // Score banner at frame 150
  const scoreOpacity = interpolate(frame, [150, 190], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scoreScale = interpolate(frame, [150, 190], [0.92, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Caveat at frame 195
  const caveatOpacity = interpolate(frame, [195, 230], [0, 1], {
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
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.accentMagenta,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Phase 4 · Conviction Score
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textBase,
            color: colors.textMuted,
          }}
        >
          .db/analysis/conviction/AMZN/conviction.json
        </div>
      </div>

      {/* Two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 56,
          flex: 1,
        }}
      >
        {/* JSON output — glass panel */}
        <div
          style={{
            ...glassPanel,
            padding: "36px 44px",
            fontFamily: fonts.mono,
            fontSize: sizes.textBase,
            color: colors.textSecondary,
            lineHeight: 1.85,
            overflow: "hidden",
          }}
        >
          <div style={{ color: colors.codeKey }}>{"{"}</div>
          {PILLARS.map((p, i) => {
            const opacity = interpolate(frame, [p.appearAt, p.appearAt + 12], [0, 1], {
              easing: easeOut,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const translateY = interpolate(frame, [p.appearAt, p.appearAt + 15], [8, 0], {
              easing: easeOut,
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={p.key}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                  paddingLeft: 32,
                }}
              >
                <span style={{ color: colors.codeKey }}>"{p.key}"</span>
                <span style={{ color: colors.textFaint }}>: </span>
                <span style={{ color: p.type === "number" ? colors.codeNumber : colors.codeString }}>
                  {p.value}
                </span>
                {i < PILLARS.length - 1 && <span style={{ color: colors.textFaint }}>,</span>}
              </div>
            );
          })}
          <div style={{ color: colors.codeKey }}>{"}"}</div>
        </div>

        {/* Score banner — glass with full gradient */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
          }}
        >
          <div
            style={{
              opacity: scoreOpacity,
              transform: `scale(${scoreScale})`,
              padding: "44px 52px",
              background: `linear-gradient(135deg, ${colors.accentCyan}1f, ${colors.accentBlue}18, ${colors.accentPurple}18, ${colors.accentMagenta}1a)`,
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.accentPurple}55`,
              borderRadius: 24,
              boxShadow: `
                inset 0 1.5px 0 rgba(255, 255, 255, 0.20),
                0 16px 50px -12px rgba(168, 85, 247, 0.4)
              `,
              textAlign: "center",
              minWidth: 360,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: sizes.textXs,
                color: colors.textMuted,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Final Score
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 140,
                fontWeight: 700,
                lineHeight: 1,
                background: `linear-gradient(135deg, ${colors.accentCyan}, ${colors.accentBlue}, ${colors.accentPurple}, ${colors.accentMagenta})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: 16,
              }}
            >
              67
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: sizes.textSm,
                color: colors.textSecondary,
                letterSpacing: "0.15em",
                marginBottom: 12,
              }}
            >
              / 100
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 28px",
                background: `${colors.warning}25`,
                border: `1px solid ${colors.warning}60`,
                borderRadius: 999,
                fontFamily: fonts.mono,
                fontSize: sizes.textBase,
                color: colors.warning,
                fontWeight: 600,
                letterSpacing: "0.2em",
              }}
            >
              HOLD
            </div>
          </div>

          <div
            style={{
              opacity: caveatOpacity,
              fontFamily: fonts.mono,
              fontSize: sizes.textSm,
              color: colors.textMuted,
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: 380,
            }}
          >
            Score reflects normalized basis ($70.4B). Headline ($77.7B) overstates by 9.4%.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
