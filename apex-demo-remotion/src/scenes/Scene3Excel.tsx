import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes } from "../theme";

// Excel sheet tabs
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

// Net income row (the safe one)
const NET_INCOME_ROW = ["$30.4B", "$33.4B", "$59.2B", "$77.7B"];

// Equity securities row (THE CATCH)
const EQUITY_ROW = ["$0.08B", "$0.04B", "$0.05B", "$7.71B"];

// Years
const YEARS = ["FY2022", "FY2023", "FY2024", "FY2025"];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene3Excel: React.FC = () => {
  const frame = useCurrentFrame();

  // Phase 3 has 28s = 840 frames
  // Sub-scene 3a: 0-240 — Excel opens, sheets visible (8s)
  // Sub-scene 3b: 240-480 — focus on rows, the catch (8s)
  // Sub-scene 3c: 480-720 — tool call + normalized result (8s)
  // Sub-scene 3d: 720-840 — comparison panel (4s)

  // Title fade-in
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Excel grid fade in
  const gridOpacity = interpolate(frame, [40, 80], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Active tab cycle (sweep through sheets) — frames 80-200
  const activeSheetIdx = Math.min(
    Math.floor(interpolate(frame, [80, 200], [0, SHEET_TABS.length - 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" })),
    SHEET_TABS.length - 1
  );
  // Land on Historical (idx=2) at frame 220+
  const finalActiveIdx = frame > 220 ? 2 : activeSheetIdx;

  // Net income row reveal at frame 240
  const niRowOpacity = interpolate(frame, [240, 280], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Equity securities row reveal at frame 320
  const eqRowOpacity = interpolate(frame, [320, 360], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // $7.71B flash highlight (cyan) at frame 400-420
  const flashScale = interpolate(frame, [400, 410, 430], [1, 1.15, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flashColor = interpolate(frame, [395, 410], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Red badge "Non-recurring" appears at frame 440
  const badgeOpacity = interpolate(frame, [440, 480], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeScale = interpolate(frame, [440, 480], [0.85, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Tool call appears at frame 540
  const toolCallOpacity = interpolate(frame, [540, 580], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Normalized result at frame 700
  const normalizedOpacity = interpolate(frame, [700, 740], [0, 1], {
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
      <div style={{ opacity: titleOpacity, marginBottom: 30 }}>
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

      {/* Excel-like sheet container */}
      <div
        style={{
          opacity: gridOpacity,
          flex: 1,
          backgroundColor: colors.bgPanel,
          border: `1px solid ${colors.borderDefault}`,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Toolbar row with sheet name */}
        <div
          style={{
            padding: "16px 24px",
            borderBottom: `1px solid ${colors.borderSubtle}`,
            fontFamily: fonts.mono,
            fontSize: sizes.textSm,
            color: colors.textMuted,
          }}
        >
          AMZN-dcf-model.xlsx · {SHEET_TABS[finalActiveIdx]}
        </div>

        {/* Sheet tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            backgroundColor: colors.bgSubtle,
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
                backgroundColor: i === finalActiveIdx ? colors.bgPanel : "transparent",
                borderBottom: i === finalActiveIdx ? `2px solid ${colors.accentCyan}` : "2px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Sheet content area */}
        <div style={{ flex: 1, padding: 40, position: "relative" }}>
          {/* Historical sheet content — 4-column row layout */}
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
            <div style={{ padding: "16px 20px", color: colors.textMuted, borderBottom: `1px solid ${colors.borderSubtle}`, fontSize: sizes.textSm }}>
              Metric
            </div>
            {YEARS.map((y) => (
              <div
                key={y}
                style={{
                  padding: "16px 20px",
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

            {/* Equity securities row — THE CATCH */}
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
              const isFlashCell = i === 3; // FY2025 column
              return (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    opacity: eqRowOpacity,
                    textAlign: "right",
                    color: isFlashCell
                      ? interpolate(flashColor, [0, 1], [0xa5d6ff, 0x06b6d4]) >= 0
                        ? flashColor > 0.5
                          ? colors.accentCyan
                          : colors.textSecondary
                        : colors.textSecondary
                      : colors.textSecondary,
                    fontWeight: isFlashCell ? 700 : 400,
                    transform: isFlashCell ? `scale(${flashScale})` : "scale(1)",
                    transformOrigin: "right center",
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
              top: 280,
              right: 80,
              padding: "16px 28px",
              backgroundColor: `${colors.danger}25`,
              border: `1px solid ${colors.danger}80`,
              borderRadius: 999,
              fontFamily: fonts.mono,
              fontSize: sizes.textBase,
              color: colors.danger,
              letterSpacing: "0.04em",
              fontWeight: 600,
            }}
          >
            ⚠ Non-recurring · 154× jump
          </div>

          {/* Tool call panel */}
          <div
            style={{
              opacity: toolCallOpacity,
              marginTop: 80,
              padding: "28px 32px",
              backgroundColor: colors.bgSubtle,
              border: `1px solid ${colors.borderSubtle}`,
              borderRadius: 12,
              fontFamily: fonts.mono,
            }}
          >
            <div
              style={{
                fontSize: sizes.textXs,
                color: colors.textMuted,
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

          {/* Normalized result */}
          <div
            style={{
              opacity: normalizedOpacity,
              marginTop: 32,
              padding: "24px 32px",
              backgroundColor: `${colors.accentCyan}10`,
              border: `1px solid ${colors.accentCyan}40`,
              borderRadius: 12,
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
