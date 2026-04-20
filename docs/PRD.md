# HengQi Hills 官网产品需求文档 (PRD)
**版本**: 1.0  
**日期**: 2024  
**目标**: 打造Apple级别的科技品牌官网

---

## 1. 项目概述

### 1.1 品牌定位
- **名称**: 恒歧山 (HengQi Hills)
- **Slogan**: Where Paths Diverge, Peaks Converge
- **业态**: 电竞 · 洗浴 · 桌游 · 胶囊住宿 一站式娱乐综合体
- **受众**: 18-35岁年轻群体、投资人、潜在合作伙伴

### 1.2 设计目标
- **视觉风格**: Apple官网级别极简科技风，深色模式主导
- **核心体验**: 大胆留白、大字体排版、丝滑滚动、毛玻璃质感
- **技术表现**: 60fps动画、响应式适配、SEO友好、首屏<1.5s加载

---

## 2. 技术架构

### 2.1 技术栈（强制）
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript (严格模式)
- **样式**: Tailwind CSS (禁止手写CSS文件)
- **动画**: Framer Motion (所有动效)
- **图标**: Lucide React
- **字体**: Inter (Google Fonts) + 系统中文

### 2.2 性能要求
- 图片: WebP格式, <200KB, 懒加载首屏外内容
- 动画: 仅使用transform/opacity, 禁止layout动画
- 字体: font-display: swap, 预加载关键字体

---

## 3. 设计系统 (Design System)

### 3.1 颜色规范

```typescript
// tailwind.config.ts 必须包含
colors: {
  background: '#000000',        // 纯黑背景
  surface: '#1d1d1f',           // 卡片/浮层背景
  primary: '#2997FF',           // 苹果蓝-强调色
  text: {
    primary: '#FFFFFF',         // 主标题
    secondary: 'rgba(255,255,255,0.8)',   // 副文案
    tertiary: 'rgba(255,255,255,0.5)',    // 辅助文字
  },
  border: 'rgba(255,255,255,0.1)',        // 细微边框
}
```

### 3.2 字体规范
- **英文**: Inter, sans-serif
- **中文**: "PingFang SC", "Microsoft YaHei", sans-serif
- **标题**: font-semibold, tracking-tight（字距紧凑）
- **正文**: font-normal, leading-relaxed（行高宽松）

#### 字号体系 (Desktop/Mobile)
| 元素 | 桌面端 | 移动端 | 字重 | 颜色 |
|------|--------|--------|------|------|
| Hero主标题 | text-8xl (96px) | text-5xl (48px) | semibold | text-primary |
| Hero副标题 | text-2xl (24px) | text-lg (18px) | normal | text-secondary |
| Section标题 | text-5xl (48px) | text-3xl (30px) | semibold | text-primary |
| 正文 | text-lg (18px) | text-base (16px) | normal | text-secondary |
| 小字/标注 | text-xs (12px) | text-xs | medium | text-tertiary, uppercase, tracking-widest |

### 3.3 间距规范
- **Section间距**: py-32 (128px) / md:py-40 (160px)
- **内容最大宽度**: max-w-7xl (1280px), mx-auto
- **水平内边距**: px-6 (移动端) / px-8 (桌面端)
- **元素间距**: gap-8 (32px) 标准, gap-4 (16px) 紧凑

---

## 4. 页面结构 (Page Structure)

全局顺序: Header → Hero → Concepts → Features → Timeline → Contact → Footer

### 4.1 Header (导航栏)
**布局**: 固定顶部, z-50, 全宽  
**样式**:
- 背景: backdrop-blur-md bg-black/70
- 边框: border-b border-white/10
- 高度: h-16 (64px)

**内容**:
- 左侧: Logo文字 "HengQi Hills" (font-semibold, text-lg)
- 中间: 导航项 (hidden md:flex)
  - Diverge
  - Everpeak
  - Crossroads
  - Nexus
  - 联系我们
- 右侧: 移动端汉堡菜单按钮 (md:hidden)

**交互**:
- 滚动时保持毛玻璃效果
- 移动端点击汉堡菜单: 全屏遮罩菜单 (opacity过渡 + 模糊背景)

### 4.2 Hero Section
**布局**: 全屏 (h-screen), flex flex-col justify-center items-center, 相对定位  
**背景**:
- 当前: 图片模式 (config.ts配置)
- 后期: 视频模式 (预留接口)
- 遮罩: bg-black/40 (确保文字可读)

**内容层级**:
1. 小字标签 (uppercase, tracking-[0.2em], text-tertiary): "HENGQI HILLS"
2. 主标题 (text-8xl md:text-9xl): "恒歧山"
3. 副标题 (text-2xl md:text-3xl, mt-4): "Where Paths Diverge"
4. 业态标签组 (flex gap-4, mt-8, flex-wrap justify-center):
   - 胶囊: 电竞 · 洗浴 · 桌游 · 胶囊住宿
   - 样式: text-secondary, border border-white/20 rounded-full px-4 py-1
5. 滚动指示器 (absolute bottom-8):
   - 图标: ChevronDown
   - 动画: 上下浮动 (y: [0, 8, 0], repeat: Infinity, duration: 2)

**动画**:
- 背景: 1秒淡入 (opacity 0→1)
- 文字: stagger依次上浮 (y: 20→0, opacity 0→1, 间隔0.1s)

### 4.3 Concepts Section (四大主题)
**布局**: py-32, 居中标题 + 4列网格 (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)

**标题区**:
- 小字: "FOUR PILLARS" (uppercase, tracking-widest, text-primary)
- 主标题: "四大体验空间"
- 副标题: "Diverge · Everpeak · Crossroads · Nexus"

**卡片组件 (ConceptCard)**:
- 比例: aspect-[3/4] (竖版)
- 背景: 图片 + gradient-to-t from-black/80 to-transparent
- 圆角: rounded-3xl (24px)
- 内边距: p-6
- 边框: border border-white/10 (hover时border-primary/50)

**卡片内容** (底部对齐):
1. 英文词 (text-2xl, font-semibold): Diverge/Everpeak...
2. 中文名 (text-lg, mt-1): 分歧实验室/恒巅电竞...
3. 描述 (text-sm, text-tertiary, mt-2): 一句话描述
4. 悬停: scale-105, 阴影扩散, 边框高亮

**动画**:
- 进入视口: stagger从下方滑入 (y: 40→0, 间隔0.1s)

### 4.4 Features Section (功能特色)
**布局**: py-32, 两列交替布局 (图文左右交替)

**结构** (重复4次，对应4个业态):
- 左: 大图 (rounded-3xl, aspect-video, object-cover)
- 右: 文字内容
  - 编号: 01/02/03/04 (text-primary, font-mono)
  - 标题: 功能名称 (如"职业级电竞设备")
  - 描述: 详细说明
  - 列表: 3个关键特性 (带勾选图标)

**样式**:
- 间距: gap-16 (64px)
- 移动端: 垂直堆叠 (flex-col)
- 背景: 偶数行添加bg-surface/30区分

### 4.5 Timeline Section (发展阶段)
**布局**: py-32, 居中, max-w-4xl

**标题**:
- 主标题: "发展路径"
- 副标题: "从概念到落地的三个阶段"

**时间线组件**:
- 垂直线: 左侧absolute, w-px bg-white/20
- 节点: 圆点 (w-3 h-3 rounded-full, bg-primary)
- 卡片: 左侧留白 (ml-8), 内容区
  - 阶段: "Phase 01" (text-primary, font-mono)
  - 标题: "种子轮验证" (text-2xl)
  - 时间: "2024 Q4" (text-tertiary)
  - 描述: 关键里程碑

**动画**:
- 滚动时节点依次点亮 (scale 0→1 + 颜色变化)
- 连接线逐渐填充 (height 0→100%)

### 4.6 Contact Section
**布局**: py-32, 两列 (左:信息, 右:表单)

**左栏**:
- 标题: "开启合作"
- 描述: 投资咨询/合作联系说明
- 联系方式:
  - 邮箱: contact@hengqihills.com (图标: Mail)
  - 地址: 占位符 (图标: MapPin)
  - 微信: 二维码占位区域

**右栏 (表单)**:
- 输入框: bg-surface border border-white/10 rounded-lg px-4 py-3
- 字段: 姓名, 邮箱, 公司, 留言内容 (textarea)
- 提交按钮: bg-primary text-black font-medium rounded-full px-8 py-3
- 状态: 提交后显示成功提示 (绿色勾选 + 文字)

### 4.7 Footer
**布局**: py-12, border-t border-white/10

**内容**:
- 上排: Logo + 导航链接 (横向flex gap-8)
- 下排: 版权信息 "© 2024 HengQi Hills. All rights reserved."
- 社交图标: 占位 (微信/微博/LinkedIn)

---

## 5. 组件规范

### 5.1 通用动画组件
**ScrollReveal**: 包装子元素，进入视口时触发淡入上浮
- Props: children, delay?, direction? ('up' | 'down')
- 动画: opacity 0→1, y 30→0, duration 0.8s, ease-out

**SectionTitle**: 统一标题样式
- Props: label (小字), title (中文), subtitle (英文)
- 布局: 居中或左对齐 (prop控制)

### 5.2 可复用UI
- Button: 两种变体 - Primary (蓝底黑字) / Secondary (透明边框白字)
- Card: 统一圆角 (rounded-3xl), 统一hover效果
- Input: 统一表单样式 (深色背景, 细边框, focus时border-primary)

---

## 6. 内容数据 (lib/content.ts)

所有文案集中管理，禁止硬编码:

```typescript
export const SITE_CONFIG = {
  name: '恒歧山',
  nameEn: 'HengQi Hills',
  slogan: 'Where Paths Diverge, Peaks Converge',
  description: '电竞 · 洗浴 · 桌游 · 胶囊住宿 一站式娱乐综合体'
};

export const HERO_CONFIG = {
  type: 'image', // 'image' | 'video'
  src: '/images/hero-main.webp',
  poster: '/images/hero-main.webp',
  alt: 'HengQi Hills 恒歧山娱乐综合体'
};

export const CONCEPTS = [
  {
    id: 'diverge',
    nameEn: 'Diverge',
    name: '分歧实验室',
    desc: '策略桌游与剧本杀的多线叙事空间',
    image: '/images/concept-diverge.webp'
  },
  {
    id: 'everpeak',
    nameEn: 'Everpeak',
    name: '恒巅电竞',
    desc: '顶级设备与赛事级舞台体验',
    image: '/images/concept-everpeak.webp'
  },
  {
    id: 'crossroads',
    nameEn: 'Crossroads',
    name: '十字口',
    desc: '社交大厅与跨界活动发生地',
    image: '/images/concept-crossroads.webp'
  },
  {
    id: 'nexus',
    nameEn: 'Nexus',
    name: '纽点',
    desc: '身心恢复的私密休憩空间',
    image: '/images/concept-nexus.webp'
  }
];

export const TIMELINE = [
  {
    phase: '01',
    title: '种子验证',
    date: '2024 Q4',
    desc: '首店模型验证，单点突破电竞+洗浴复合业态'
  },
  {
    phase: '02',
    title: '天使扩张',
    date: '2025 Q2',
    desc: '完成标准化模型，拓展至3个核心城市'
  },
  {
    phase: '03',
    title: 'A轮规模',
    date: '2026',
    desc: '全国连锁布局，会员体系与数字化中台搭建'
  }
];
```

---

## 7. 图片资源清单

| 文件名 | 规格 | 用途 | 当前状态 |
|--------|------|------|----------|
| hero-main.webp | 3840×1600 (21:9) | Hero背景 | 需生成 |
| concept-diverge.webp | 1200×1600 (3:4) | 主题卡片 | 需生成 |
| concept-everpeak.webp | 1200×1600 (3:4) | 主题卡片 | 需生成 |
| concept-crossroads.webp | 1200×1600 (3:4) | 主题卡片 | 需生成 |
| concept-nexus.webp | 1200×1600 (3:4) | 主题卡片 | 需生成 |
| logo.svg | 矢量 | 导航栏Logo | 需设计 |

**图片风格**: 暗黑科技风，黑+蓝(#2997FF)主色调，微光氛围，建筑空间感

---

## 8. 开发检查清单

### 8.1 代码规范
- [ ] TypeScript无any类型
- [ ] Tailwind类名使用标准值（无arbitrary value如w-[123px]）
- [ ] 组件导出使用named export
- [ ] 图片使用Next.js Image组件，必须加alt属性

### 8.2 性能检查
- [ ] 首屏图片priority={true}，其他lazy load
- [ ] 动画使用transform/opacity
- [ ] 无布局抖动 (CLS = 0)

### 8.3 响应式断点
- Mobile: < 768px (默认)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)
- Large: xl: (1280px+)

---

## 9. 后期迭代计划

- **Phase 2**: 视频背景切换 (HeroConfig.type = 'video')
- **Phase 3**: 多语言支持 (i18n)
- **Phase 4**: 后台CMS对接 (Sanity/Strapi)

---

**文档维护**: 每次设计变更需同步更新此PRD
