# 開發規格書 (Spec.md)：YT.Chang Portfolio (One-Page Editorial)

## 1. Architecture 頁面架構
* **核心模式**：全一頁式 (Single Page Scroll)。
* **導覽行為**：所有導覽項目均為內部錨點跳轉，並輔以平滑捲動 (Smooth Scroll)。
* **內容順序**：Hero -> About (敘事) -> Skills (技術) -> Projects (展示) -> Resume (行動)。

## 2. Design System (核心視覺)
* **背景與間距**：
    * 全域底色：`var(--bg-canvas)` (#121212)。
    * 區塊間距：區塊間使用 `var(--space-24)` (96px) 或 `var(--space-32)` (128px) 的大留白。
* **寬度約束**：
    * **敘事區塊 (About)**：嚴格限制於 `var(--width-narrow)` (640px) 以保持雜誌易讀性。
    * **展示區塊 (Projects/Skills)**：使用 `var(--width-wide)` (1200px) 以展現專業張力。

## 3. Section Specifications 區塊定義
### 3.1 Hero (id="top")
* 標題使用 `display-xl`，背景套用 `brand-glow`。

### 3.2 About (id="about")
* **內容**：置入「從社會學邏輯到前端實作」重構後的文字。
* **寬度**：640px。使用 `DM Serif Display` 作為副標題，強調敘事感。

### 3.3 Skills & Projects (id="skills" / id="projects")
* **分類**：區分為「團體專案」與「個人專案」。
* **樣式**：使用 1200px 容器，卡片採用 `bg-surface-raised` (#292929)。

### 3.4 Resume (id="resume")
* 簡潔的結尾區塊，提供 PDF 下載與聯繫按鈕。

## 4. Interaction 互動規範
* **Navbar**：滾動時需透過 ScrollTrigger 動態切換項目 `.active` 狀態。
* **GSAP**：每個區塊進場時執行由下而上 (y: 30) 的淡入效果。