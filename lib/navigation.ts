export type NavSection = {
  title: string;
  desc: string;
  icon:
    | "BookOpen"
    | "Palette"
    | "TrendingUp"
    | "GitBranch"
    | "Mountain"
    | "Users"
    | "Droplets"
    | "Gamepad2"
    | "Bath"
    | "Dice5"
    | "Bed"
    | "Award"
    | "Hammer"
    | "Handshake"
    | "Mail";
};

export type NavItem = {
  id: "brand" | "spaces" | "experience" | "cooperation" | "about";
  label: string;
  href: string;
  sections: NavSection[];
};

export const NAV_ITEMS = [
  {
    id: "brand",
    label: "品牌",
    href: "/brand",
    sections: [
      { title: "品牌故事", desc: "恒歧山的起源与愿景", icon: "BookOpen" },
      { title: "视觉识别", desc: "HengQi Hills 设计系统", icon: "Palette" },
      { title: "发展历程", desc: "从概念到落地", icon: "TrendingUp" }
    ]
  },
  {
    id: "spaces",
    label: "空间",
    href: "/spaces",
    sections: [
      {
        title: "Diverge Lab",
        desc: "桌游/剧本杀/社交 · 策略选择，多线叙事 · 300-500㎡社区店",
        icon: "GitBranch"
      },
      {
        title: "Everpeak Arena",
        desc: "电竞/赛事/直播 · 巅峰竞技，持续进化 · 800-1500㎡旗舰店",
        icon: "Mountain"
      },
      {
        title: "Crossroads Lounge",
        desc: "咖啡/轻食/社交大厅 · 人流交汇，轻社交 · 200-400㎡流量入口",
        icon: "Users"
      },
      {
        title: "Nexus Stay",
        desc: "胶囊住宿/休息舱 · 身心连接，能量恢复 · 配套或独立形态",
        icon: "Droplets"
      }
    ]
  },
  {
    id: "experience",
    label: "体验",
    href: "/experience",
    sections: [
      { title: "电竞", desc: "职业级设备与赛事体验", icon: "Gamepad2" },
      { title: "洗浴", desc: "沉浸式身心恢复", icon: "Bath" },
      { title: "桌游", desc: "策略与社交的融合", icon: "Dice5" },
      { title: "住宿", desc: "胶囊空间的深度休息", icon: "Bed" }
    ]
  },
  {
    id: "cooperation",
    label: "合作",
    href: "/cooperation",
    sections: [
      { title: "品牌授权", desc: "加入 HengQi Hills 矩阵", icon: "Award" },
      { title: "空间改造", desc: "存量资产升级方案", icon: "Hammer" },
      { title: "投资合作", desc: "成为区域合作伙伴", icon: "Handshake" }
    ]
  },
  {
    id: "about",
    label: "关于",
    href: "/about",
    sections: [
      { title: "团队", desc: "创作者与执行者", icon: "Users" },
      { title: "联系", desc: "开启对话", icon: "Mail" }
    ]
  }
] as const satisfies NavItem[];
