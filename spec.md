# Project Specification: YT.Chang Portfolio (Dark Editorial)

## 1. Project Context
* **目標**: 打造極具個性與專業感的個人作品集網站，強調「作品是主角」。
* **視覺風格**: 暗色底、黃色強調色、高對比文字、編輯感雜誌排版。
* **設計原則**: 
    * 大量留白：提供視覺呼吸空間。
    * 色彩競爭最小化：背景與容器色確保不干擾作品截圖。
    * 互動剋制：僅在關鍵點（CTA、Hover）使用動畫與光暈。

## 2. Design System (Strictly derived from Design Tokens)

### 2.1 CSS Variables (Global Setup)
所有的數值與語意命名均嚴格對應 JSON 定義。

```css
:root {
  /* Brand Colors */
  --brand-yellow: #FFB71C;
  --brand-yellow-light: rgba(255, 183, 28, 0.12);
  --accent-warm: #FA702A;

  /* Backgrounds */
  --bg-canvas: #121212;
  --bg-surface: #1D1D1D;
  --bg-surface-raised: #292929;
  --bg-overlay: rgba(0, 0, 0, 0.6);

  /* Text Colors */
  --text-primary: #F4F4F4;
  --text-secondary: #A0A0A0;
  --text-muted: #6E6E6E;
  --text-inverse: #121212;

  /* Typography - Families */
  --font-display: "DM Serif Display", Georgia, serif;
  --font-body: "DM Sans", "Helvetica Neue", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Spacing (8pt Grid Fragment) */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Layout */
  --width-narrow: 640px;
  --width-default: 960px;
  --width-wide: 1200px;

  /* Transitions */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-base: 250ms;
}

### 2.2 Typography Scale (文字層級)

| 類別 | 字級 (Size) | 字體 (Family) | 用途 |
| :--- | :--- | :--- | :--- |
| **display-xl** | 72px | Display | Hero 主標題 (Line-height: 1.1) |
| **display-lg** | 56px | Display | 區塊標題 (About/Works) |
| **heading-xl** | 40px | Display | 專案詳情頁標題 |
| **body-md** | 16px | Body | 標準內文 |
| **code** | 14px | Mono | 技術標籤、程式碼片段 |

---

## 3. Information Architecture (資訊架構)

### 3.1 Navbar (導覽列)
* **Logo:** `YT.Chang` (使用 DM Serif Display)。
* **選單:** About, Skills, Projects, Insights, Resume。
* **狀態:** 當前頁面需有品牌黃 (`#FFB71C`) 的 **Active Indicator**。

### 3.2 Hero Section (主視覺區)
* **背景:** 套用 `brand-glow` 漸層效果。
* **特效:** 標題載入時套用 `text-display` 漸層動畫效果。

### 3.3 Project Card (作品卡片組件)
* **佈局:** 於 1200px 容器內展示。
* **互動:**
    * Hover 時背景平滑切換至 `card-hover` 漸層。
    * 陰影由 `none` 變更為 `shadows.base`。
    * 使用 `spring` 曲線實作微縮放效果。

---

## 4. Technical Constraints (技術限制)
* **核心技術:** HTML5, CSS3 (原生變數)。
* **動態庫:** GSAP (GreenSock)。
* **字體方案:** Google Fonts (`DM Sans` / `DM Serif Display`)。

---

## 5. Implementation Prompts (實作指令)

### Step 1: Global Style (基礎樣式)
> 請根據設計規範生成 `style.css`：包含 Google Fonts 匯入、CSS 變數定義、重置樣式 (Reset)，以及 `.bg-canvas`, `.text-primary` 等語意化 Class。

### Step 2: Structure (頁面結構)
> 請使用 HTML5 生成 `index.html`：實作 Navbar (含 Active 狀態指標)、Hero Section (含品牌漸層背景) 與作品列表容器。

### Step 3: Interaction (動態互動)
> 請撰寫 `main.js` 並使用 GSAP：實作 Hero 標題載入動畫、作品卡片 Hover 時的漸層切換與 Spring 縮放回彈效果。