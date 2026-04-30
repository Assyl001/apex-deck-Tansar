// Apex Demo · Design Tokens
// V2: Liquid Glass aesthetic — bridges to v5 deck brand
// Deep navy gradient backdrop + glass panels with backdrop-filter blur

export const colors = {
  // Backgrounds — deep navy, not pitch black
  bgGradientFrom: "#0a0f1f",     // top — deep navy
  bgGradientVia: "#0c1428",      // mid
  bgGradientTo: "#0e1830",       // bottom — slightly warmer

  // Glass panel base (translucent over backdrop)
  glassBg: "rgba(255, 255, 255, 0.04)",
  glassBgSubtle: "rgba(255, 255, 255, 0.025)",
  glassBgStrong: "rgba(255, 255, 255, 0.06)",

  // Inset edge highlights for liquid-glass feel
  edgeLightTop: "rgba(255, 255, 255, 0.18)",
  edgeLightBottom: "rgba(0, 0, 0, 0.20)",

  // Borders
  borderSubtle: "rgba(255, 255, 255, 0.08)",
  borderDefault: "rgba(255, 255, 255, 0.14)",
  borderStrong: "rgba(255, 255, 255, 0.22)",

  // Text
  textPrimary: "#eaf0f7",
  textSecondary: "#a7b3c2",
  textMuted: "#6e7e92",
  textFaint: "#4a5868",

  // Brand accents (from v5 deck)
  accentCyan: "#06b6d4",
  accentBlue: "#3b82f6",
  accentPurple: "#a855f7",
  accentMagenta: "#ec4899",   // for final scene

  // Semantic
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",

  // Code-style colors
  codeKey: "#79c0ff",
  codeString: "#a5d6ff",
  codeNumber: "#79c0ff",
  codeFunction: "#d2a8ff",
  codeComment: "#6e7681",
} as const;

export const fonts = {
  sans: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"Geist Mono", "JetBrains Mono", "Fira Code", "Menlo", monospace',
} as const;

// Reusable glass panel CSS — applied to all content panels
export const glassPanel = {
  background: colors.glassBg,
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: `1px solid ${colors.borderDefault}`,
  borderRadius: 16,
  boxShadow: `
    inset 0 1.5px 0 ${colors.edgeLightTop},
    inset 0 -1px 0 ${colors.edgeLightBottom},
    0 12px 40px -10px rgba(0, 0, 0, 0.45)
  `,
} as const;

export const sizes = {
  // Composition
  width: 1920,
  height: 1080,
  fps: 30,

  // Scene durations — V2 trimmed for tighter pacing
  scene1Frames: 300,   // 10s — data collection (was 12s)
  scene2Frames: 240,   // 8s  — business understanding (was 10s)
  scene3Frames: 780,   // 26s — model + 154x catch (was 28s)
  scene4Frames: 240,   // 8s  — conviction (was 10s)

  // Total: 1560 frames = 52s

  // Typography (px in 1920x1080)
  textXs: 18,
  textSm: 22,
  textBase: 26,
  textLg: 32,
  textXl: 40,
  text2xl: 56,
  text3xl: 72,
} as const;

export const totalFrames = sizes.scene1Frames + sizes.scene2Frames + sizes.scene3Frames + sizes.scene4Frames;
// 1560 frames = 52 seconds at 30fps
