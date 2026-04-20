export const SITE_CONFIG = {
  name: "恒歧山",
  nameEn: "HengQi Hills",
  slogan: "Where Paths Diverge, Peaks Converge",
  description: "电竞 · 洗浴 · 桌游 · 胶囊住宿 一站式娱乐综合体"
} as const;

export const HERO_CONFIG = {
  type: "video",
  src: "/videos/hero.mp4",
  poster: "/images/hero-main.webp",
  alt: "HengQi Hills 恒歧山娱乐综合体"
} as const satisfies {
  type: "image" | "video";
  src: string;
  poster: string;
  alt: string;
};

export const CONCEPTS = [
  {
    id: "diverge",
    nameEn: "Diverge Lab",
    name: "分歧实验室",
    desc: "策略桌游与剧本杀的多线叙事空间",
    image: "/images/concept-diverge.webp"
  },
  {
    id: "everpeak",
    nameEn: "Everpeak Arena",
    name: "恒巅电竞",
    desc: "顶级设备与赛事级舞台体验",
    image: "/images/concept-everpeak.webp"
  },
  {
    id: "crossroads",
    nameEn: "Crossroads Lounge",
    name: "十字路口",
    desc: "社交大厅与跨界活动发生地",
    image: "/images/concept-crossroads.webp"
  },
  {
    id: "nexus",
    nameEn: "Nexus Stay",
    name: "枢纽点",
    desc: "身心恢复的私密休憩空间",
    image: "/images/concept-nexus.webp"
  }
] as const;

export const TIMELINE = [
  {
    phase: "01",
    title: "种子验证",
    date: "2024 Q4",
    desc: "首店模型验证，单点突破电竞+洗浴复合业态"
  },
  {
    phase: "02",
    title: "天使扩张",
    date: "2025 Q2",
    desc: "完成标准化模型，拓展至3个核心城市"
  },
  {
    phase: "03",
    title: "A轮规模",
    date: "2026",
    desc: "全国连锁布局，会员体系与数字化中台搭建"
  }
] as const;
