export const APP_CONFIG = {
  heroMode: "video"
} as const satisfies {
  heroMode: "image" | "video";
};
