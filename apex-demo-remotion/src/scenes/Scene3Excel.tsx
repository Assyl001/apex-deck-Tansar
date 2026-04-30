import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes, glassPanel } from "../theme";

const SHEET_TABS = [
  "Summary",
  "Assumptions",
  "Historical",
  "AWS",
  "Retail",
  "Ads",
  "P&L",
  "BS",
  "WACC",
  "Quarterly",
  "Annual",
  "Valuation",
  "Sensitivity",
  "Peers",
];

const NET_INCOME_ROW = ["$30.4B", "$33.4B", "$59.2B", "$77.7B"];
const EQUITY_ROW = ["$0.08B", "$0.04B", "$0.05B", "$7.71B"];
const YEARS = ["FY2022", "FY2023", "FY2024", "FY2025"];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene3Excel: React.FC = () => {
  const frame = useCurrentFrame();

  // Total: 780 frames @ 30fps = 26s
  // Beat plan:
  //   0-30   : header in
  //   30-180 : Excel + sheet tab cycle, land on Historical
  //   180-330: rows reveal (net income, then equity securities)
  //   330-410: $7.71B flash + non-recurring badge
  //   410-560: tool call panel slides in
  //   560-700: normalized result + delta
  //   700-780: hold

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

  const gridOpacity = interpolate(frame, [30, 70], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Sheet tab sweep — frames 70-160
  const activeSheetIdx = Math.min(
    Math.floor(
      interpolate(frame, [70, 160], [0, SHEET_TABS.length - 1], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      })
    ),
    SHEET_TABS.length - 1
  );
  const finalActiveIdx = frame > 180 ? 2 : activeSheetIdx;

  // Net income row (frame 180)
  const niRowOpacity = interpolate(frame, [180, 220], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Equity securities row (frame 260)
  const eqRowOpacity = interpolate(frame, [260, 300], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // $7.71B flash highlight at frame 340
  const flashScale = interpolate(frame, [340, 350, 380], [1, 1.15, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flashColorMix = interpolate(frame, [335, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Non-recurring badge at frame 380
  const badgeOpacity = interpolate(frame, [380, 420], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeScale = interpolate(frame, [380, 420], [0.85, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tool call panel at frame 460
  const toolCallOpacity = interpolate(frame, [460, 510], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const toolCallY = interpolate(frame, [460, 510], [16, 0], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Normalized result at frame 600
  const normalizedOpacity = interpolate(frame, [600, 650], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const normalizedScale = interpolate(frame, [600, 650], [0.96, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        padding: "60px 80px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Phase header */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.accentPurple,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Phase 3 · Model Build
        </div>
      </div>

      {/* Excel-like sheet container — glass panel */}
      <div
        style={{
          ...glassPanel,
          opacity: gridOpacity,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Toolbar row */}
        <div
          style={{
            padding: "16px 28px",
            borderBottom: `1px solid ${colors.borderSubtle}`,
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.textMuted,
            background: "rgba(255, 255, 255, 0.02)",
          }}
        >
          AMZN-dcf-model.xlsx · {SHEET_TABS[finalActiveIdx]}
        </div>

        {/* Sheet tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            background: "rgba(0, 0, 0, 0.20)",
            borderBottom: `1px solid ${colors.borderSubtle}`,
            overflow: "hidden",
          }}
        >
          {SHEET_TABS.map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: "12px 18px",
                fontFamily: fonts.mono,
                fontSize: sizes.textXs,
                color: i === finalActiveIdx ? colors.accentCyan : colors.textMuted,
                background: i === finalActiveIdx ? "rgba(255, 255, 255, 0.04)" : "transparent",
                borderBottom: i === finalActiveIdx ? `2px solid ${colors.accentCyan}` : "2px solid transparent",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Sheet content */}
        <div style={{ flex: 1, padding: 36, position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr repeat(4, 1fr)",
              gap: 0,
              fontFamily: fonts.mono,
              fontSize: sizes.textBase,
            }}
          >
            {/* Header row */}
            <div
              style={{
                padding: "14px 20px",
                color: colors.textMuted,
                borderBottom: `1px solid ${colors.borderSubtle}`,
                fontSize: sizes.textSm,
              }}
            >
              Metric
            </div>
            {YEARS.map((y) => (
              <div
                key={y}
                style={{
                  padding: "14px 20px",
                  textAlign: "right",
                  color: colors.textMuted,
                  borderBottom: `1px solid ${colors.borderSubtle}`,
                  fontSize: sizes.textSm,
                }}
              >
                {y}
              </div>
            ))}

            {/* Net income row */}
            <div
              style={{
                padding: "20px",
                opacity: niRowOpacity,
                color: colors.textPrimary,
                borderBottom: `1px solid ${colors.borderSubtle}`,
              }}
            >
              Net income
            </div>
            {NET_INCOME_ROW.map((val, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  opacity: niRowOpacity,
                  textAlign: "right",
                  color: colors.textPrimary,
                  borderBottom: `1px solid ${colors.borderSubtle}`,
                }}
              >
                {val}
              </div>
            ))}

            {/* Equity securities row */}
            <div
              style={{
                padding: "20px",
                opacity: eqRowOpacity,
                color: colors.textSecondary,
                fontSize: sizes.textSm,
              }}
            >
              Equity securities upward adj.
            </div>
            {EQUITY_ROW.map((val, i) => {
              const isFlashCell = i === 3;
              const cellColor = isFlashCell
                ? flashColorMix > 0.5
                  ? colors.accentCyan
                  : colors.textSecondary
                : colors.textSecondary;
              return (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    opacity: eqRowOpacity,
                    textAlign: "right",
                    color: cellColor,
                    fontWeight: isFlashCell ? 700 : 400,
                    transform: isFlashCell ? `scale(${flashScale})` : "scale(1)",
                    transformOrigin: "right center",
                    transition: "color 0.15s",
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>

          {/* Non-recurring badge */}
          <div
            style={{
              opacity: badgeOpacity,
              transform: `scale(${badgeScale})`,
              position: "absolute",
              top: 230,
              right: 60,
              padding: "14px 26px",
              background: `${colors.danger}25`,
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.danger}80`,
              borderRadius: 999,
              boxShadow: `
                inset 0 1.5px 0 rgba(255, 255, 255, 0.18),
                0 8px 30px -10px rgba(239, 68, 68, 0.5)
              `,
              fontFamily: fonts.mono,
              fontSize: sizes.textBase,
              color: colors.danger,
              letterSpacing: "0.04em",
              fontWeight: 600,
            }}
          >
            ⚠ Non-recurring · 154× jump
          </div>

          {/* Tool call panel — glass */}
          <div
            style={{
              opacity: toolCallOpacity,
              transform: `translateY(${toolCallY}px)`,
              marginTop: 60,
              padding: "26px 32px",
              background: colors.glassBgStrong,
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.borderDefault}`,
              borderRadius: 14,
              boxShadow: `
                inset 0 1.5px 0 ${colors.edgeLightTop},
                0 8px 30px -10px rgba(0, 0, 0, 0.4)
              `,
              fontFamily: fonts.mono,
            }}
          >
            <div
              style={{
                fontSize: sizes.textXs,
                color: colors.accentCyan,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              apex.normalize.detect_outliers()
            </div>
            <div style={{ fontSize: sizes.textBase, color: colors.textSecondary, lineHeight: 1.7 }}>
              <div>
                <span style={{ color: colors.codeKey }}>metric:</span>{" "}
                <span style={{ color: colors.codeString }}>"EquitySecuritiesWithoutReadily..."</span>
                <span style={{ color: colors.textFaint, marginLeft: 16, fontSize: sizes.textXs }}>
                  ↑ SEC XBRL filing element
                </span>
              </div>
              <div style={{ marginTop: 12 }}>
                <span style={{ color: colors.codeFunction }}>→</span>{" "}
                <span style={{ color: colors.codeKey }}>{"{"}</span>{" "}
                is_outlier: <span style={{ color: colors.success }}>true</span>,{" "}
                baseline: <span style={{ color: colors.codeNumber }}>$0.06B</span>,{" "}
                current: <span style={{ color: colors.codeNumber }}>$7.71B</span>,{" "}
                ratio: <span style={{ color: colors.danger, fontWeight: 600 }}>154x</span>{" "}
                <span style={{ color: colors.codeKey }}>{"}"}</span>
              </div>
            </div>
          </div>

          {/* Normalized result — glass with cyan tint */}
          <div
            style={{
              opacity: normalizedOpacity,
              transform: `scale(${normalizedScale})`,
              transformOrigin: "center",
              marginTop: 28,
              padding: "26px 36px",
              background: `linear-gradient(135deg, ${colors.accentCyan}1a, ${colors.accentBlue}10)`,
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: `1px solid ${colors.accentCyan}50`,
              borderRadius: 14,
              boxShadow: `
                inset 0 1.5px 0 rgba(255, 255, 255, 0.20),
                0 12px 40px -10px rgba(6, 182, 212, 0.35)
              `,
              fontFamily: fonts.mono,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: sizes.textBase, color: colors.textPrimary }}>
              Normalized Net Income
            </div>
            <div
              style={{
                fontSize: sizes.text2xl,
                fontWeight: 700,
                color: colors.accentCyan,
                fontFamily: fonts.sans,
              }}
            >
              $70.4B
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
