// Apex Demo · Design Tokens
// Hybrid aesthetic: dark IDE-style + cyan/blue accents (bridge to v5 deck brand)

export const colors = {
  // Backgrounds
  bg: "#0b0e14",           // deep dark — primary background
  bgPanel: "#0f1218",      // slightly lighter panel
  bgSubtle: "#151821",     // hover/highlight state
  bgGlass: "rgba(255, 255, 255, 0.03)",

  // Borders
  borderSubtle: "rgba(255, 255, 255, 0.06)",
  borderDefault: "rgba(255, 255, 255, 0.10)",
  borderStrong: "rgba(255, 255, 255, 0.18)",

  // Text
  textPrimary: "#e6edf3",
  textSecondary: "#9da7b3",
  textMuted: "#6e7681",
  textFaint: "#484f58",

  // Brand accents (from v5 deck)
  accentCyan: "#06b6d4",
  accentBlue: "#3b82f6",
  accentPurple: "#a855f7",

  // Semantic
  success: "#22c55e",      // validator pass
  warning: "#f59e0b",      // attention
  danger: "#ef4444",       // validator fail / non-recurring flag

  // Code-style colors
  codeKey: "#79c0ff",      // JSON keys
  codeString: "#a5d6ff",   // JSON strings
  codeNumber: "#79c0ff",   // numbers
  codeFunction: "#d2a8ff", // function names
  codeComment: "#6e7681",  // comments
} as const;

export const fonts = {
  sans: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"Geist Mono", "JetBrains Mono", "Fira Code", "Menlo", monospace',
} as const;

export const sizes = {
  // Composition
  width: 1920,
  height: 1080,
  fps: 30,

  // Scene durations (in frames @ 30fps)
  scene1Frames: 360,   // 12s — data collection
  scene2Frames: 300,   // 10s — business understanding
  scene3Frames: 840,   // 28s — model + 154x catch
  scene4Frames: 300,   // 10s — conviction

  // Total: 1800 frames = 60s

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
// 1800 = 60 seconds at 30fps
