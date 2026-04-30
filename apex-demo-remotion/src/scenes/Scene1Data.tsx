import { AbsoluteFill, interpolate, Easing, useCurrentFrame } from "remotion";
import { colors, fonts, sizes, glassPanel } from "../theme";

// Tool calls cascade — appear sequentially
const TOOL_CALLS = [
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2022)", appearAt: 25 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2023)", appearAt: 42 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2024)", appearAt: 59 },
  { name: "sec_edgar.fetch_xbrl(AMZN, FY2025)", appearAt: 76 },
  { name: "fmp.statements(AMZN, 10y)", appearAt: 100 },
  { name: "fmp.transcripts(AMZN, 40q)", appearAt: 125 },
  { name: "damodaran.sector_beta()", appearAt: 150 },
];

// File tree entries — appear with cascade
const TREE_ENTRIES = [
  { path: ".db/", appearAt: 45 },
  { path: "├── data/financial/", appearAt: 60 },
  { path: "│   ├── fmp/AMZN/", appearAt: 95 },
  { path: "│   │   ├── statements (10y)", appearAt: 110 },
  { path: "│   │   └── transcripts (40q)", appearAt: 135 },
  { path: "│   ├── xbrl/AMZN-10k-FY2025/", appearAt: 80 },
  { path: "│   └── damodaran/", appearAt: 155 },
  { path: "│       └── sector_beta · 1.10", appearAt: 170 },
];

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene1Data: React.FC = () => {
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

  // Status bar — slides in earlier now (frame 200, was 240)
  const statusOpacity = interpolate(frame, [200, 230], [0, 1], {
    easing: easeOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const statusY = interpolate(frame, [200, 230], [10, 0], {
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
          marginBottom: 50,
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

      {/* Two columns: tool calls (left, glass panel) + file tree (right, glass panel) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          flex: 1,
        }}
      >
        {/* Tool calls panel */}
        <div
          style={{
            ...glassPanel,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: sizes.textXs,
              color: colors.accentCyan,
              letterSpacing: "0.22em",
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
                    gap: 14,
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

        {/* File tree panel */}
        <div
          style={{
            ...glassPanel,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: sizes.textXs,
              color: colors.accentCyan,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            File tree · live
          </div>
          <div
            style={{
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

      {/* Status bar — glass with success tint */}
      <div
        style={{
          opacity: statusOpacity,
          transform: `translateY(${statusY}px)`,
          fontFamily: fonts.mono,
          fontSize: sizes.textBase,
          color: colors.success,
          marginTop: 32,
          padding: "20px 32px",
          background: `${colors.success}12`,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: `1px solid ${colors.success}40`,
          borderRadius: 12,
          boxShadow: `
            inset 0 1.5px 0 rgba(255, 255, 255, 0.15),
            0 8px 30px -10px rgba(34, 197, 94, 0.25)
          `,
          letterSpacing: "0.04em",
        }}
      >
        ✓ Phase 1 complete · 10y data · sector β 1.10 · 0 gaps
      </div>
    </AbsoluteFill>
  );
};
