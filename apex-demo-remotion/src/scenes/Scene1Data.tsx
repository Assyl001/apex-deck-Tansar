import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes } from "../theme";

// Tool calls cascade — appear sequentially
const TOOL_CALLS = [
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2022)", appearAt: 30 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2023)", appearAt: 50 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2024)", appearAt: 70 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2025)", appearAt: 90 },
  { name: "fmp.statements(AMZN, 10y)", appearAt: 120 },
  { name: "fmp.transcripts(AMZN, 40q)", appearAt: 150 },
  { name: "damodaran.sector_beta()", appearAt: 180 },
];

// File tree entries — appear with cascade
const TREE_ENTRIES = [
  { path: ".db/", appearAt: 50 },
  { path: "├── data/financial/", appearAt: 70 },
  { path: "│   ├── fmp/AMZN/", appearAt: 110 },
  { path: "│   │   ├── statements (10y)", appearAt: 130 },
  { path: "│   │   └── transcripts (40q)", appearAt: 160 },
  { path: "│   ├── xbrl/AMZN-10k-FY2025/", appearAt: 95 },
  { path: "│   └── damodaran/", appearAt: 185 },
  { path: "│       └── sector_beta · 1.10", appearAt: 200 },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene1Data: React.FC = () => {
  const frame = useCurrentFrame();

  // Title fade-in
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Status bar slide-in at end
  const statusOpacity = interpolate(frame, [240, 270], [0, 1], {
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
          marginBottom: 60,
        }}
      >
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
          Phase 1 · Data Collection
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: sizes.textLg,
            color: colors.textPrimary,
          }}
        >
          <span style={{ color: colors.textMuted }}>$ </span>
          apex analyze AMZN
        </div>
      </div>

      {/* Two columns: tool calls (left) + file tree (right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 80,
          flex: 1,
        }}
      >
        {/* Tool calls column */}
        <div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: sizes.textXs,
              color: colors.textMuted,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Tool calls
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {TOOL_CALLS.map((call) => {
              const opacity = interpolate(frame, [call.appearAt, call.appearAt + 12], [0, 1], {
                easing: easeOut,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const translateY = interpolate(frame, [call.appearAt, call.appearAt + 15], [10, 0], {
                easing: easeOut,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const checkOpacity = interpolate(frame, [call.appearAt + 8, call.appearAt + 18], [0, 1], {
                easing: easeOut,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={call.name}
                  style={{
                    opacity,
                    transform: `translateY(${translateY}px)`,
                    fontFamily: fonts.mono,
                    fontSize: sizes.textBase,
                    color: colors.textSecondary,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ color: colors.codeFunction }}>{call.name}</span>
                  <span
                    style={{
                      opacity: checkOpacity,
                      color: colors.success,
                      fontSize: sizes.textBase,
                    }}
                  >
                    ✓
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* File tree column */}
        <div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: sizes.textXs,
              color: colors.textMuted,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            File tree · live
          </div>
          <div
            style={{
              backgroundColor: colors.bgPanel,
              border: `1px solid ${colors.borderSubtle}`,
              borderRadius: 12,
              padding: 32,
              fontFamily: fonts.mono,
              fontSize: sizes.textBase,
              color: colors.textSecondary,
              lineHeight: 1.7,
            }}
          >
            {TREE_ENTRIES.map((entry) => {
              const opacity = interpolate(frame, [entry.appearAt, entry.appearAt + 15], [0, 1], {
                easing: easeOut,
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div key={entry.path} style={{ opacity, whiteSpace: "pre" }}>
                  {entry.path}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          opacity: statusOpacity,
          fontFamily: fonts.mono,
          fontSize: sizes.textBase,
          color: colors.success,
          marginTop: 40,
          padding: "20px 32px",
          backgroundColor: `${colors.success}15`,
          border: `1px solid ${colors.success}30`,
          borderRadius: 10,
          letterSpacing: "0.04em",
        }}
      >
        ✓ Phase 1 complete · 10y data · sector β 1.10 · 0 gaps
      </div>
    </AbsoluteFill>
  );
};
