import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes } from "../theme";

// Conviction JSON keys + values, revealed sequentially
const PILLARS: { key: string; value: string; type: "number" | "string"; appearAt: number }[] = [
  { key: "valuation_gap", value: "0.74", type: "number", appearAt: 25 },
  { key: "earnings_quality", value: "0.82", type: "number", appearAt: 40 },
  { key: "smart_money", value: "0.61", type: "number", appearAt: 55 },
  { key: "risk_balance", value: "0.55", type: "number", appearAt: 70 },
  { key: "cycle_position", value: "0.43", type: "number", appearAt: 85 },
  { key: "market_positioning", value: '"neutral"', type: "string", appearAt: 100 },
  { key: "catalyst_clarity", value: "3", type: "number", appearAt: 115 },
  { key: "normalized_basis", value: '"$70.4B"', type: "string", appearAt: 135 },
  { key: "headline_basis", value: '"$77.7B"', type: "string", appearAt: 150 },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene4Conviction: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Final score banner appears at frame 200
  const scoreOpacity = interpolate(frame, [200, 240], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scoreScale = interpolate(frame, [200, 240], [0.92, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Caveat appears at frame 240
  const caveatOpacity = interpolate(frame, [250, 290], [0, 1], {
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
      <div style={{ opacity: titleOpacity, marginBottom: 40 }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.accentCyan,
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

      {/* Two columns: JSON (left) + score banner (right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 60,
          flex: 1,
        }}
      >
        {/* JSON output */}
        <div
          style={{
            backgroundColor: colors.bgPanel,
            border: `1px solid ${colors.borderSubtle}`,
            borderRadius: 16,
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

        {/* Score banner */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          {/* Big score */}
          <div
            style={{
              opacity: scoreOpacity,
              transform: `scale(${scoreScale})`,
              padding: "48px 56px",
              background: `linear-gradient(135deg, ${colors.accentCyan}20, ${colors.accentBlue}15, ${colors.accentPurple}15)`,
              border: `2px solid ${colors.accentCyan}50`,
              borderRadius: 24,
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
                background: `linear-gradient(135deg, ${colors.accentCyan}, ${colors.accentBlue}, ${colors.accentPurple})`,
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
                backgroundColor: `${colors.warning}25`,
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

          {/* Caveat */}
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
