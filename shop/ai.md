# 專案改進建議（shop）

以下建議依優先級排序，先做前 3 項可最快提升可維護性與開發效率。

## P0（優先立即處理）

1. 補齊或刪除空檔案，避免架構與實作脫節  
目前這些檔案是空的：`src/pages/Home.jsx`、`src/pages/ProductList.jsx`、`src/pages/ProductDetail.jsx`、`src/pages/Cart.jsx`、`src/components/layout/Header.jsx`、`src/components/layout/Footer.jsx`。  
建議：
- 若近期不會用到，先刪除空檔，避免誤導。
- 若會用到，至少放最小可用元件（含 `export default`）與 TODO 註解。

2. 解決 `Home` 命名與路徑混亂  
目前 `src/main.jsx` 引用的是 `src/Home.jsx`，但同時又有 `src/pages/Home.jsx`（空檔）。  
建議：
- 統一入口頁位置（建議使用 `src/pages/Home.jsx`）。
- 把 `src/Home.jsx` 改名為 `src/App.jsx` 或移到 `pages`，避免重複語意。

3. 先建立路由骨架  
已有多個 page 檔名但尚未接路由。  
建議：
- 導入 `react-router-dom`。
- 建立基本路由：`/`、`/products`、`/products/:id`、`/cart`。
- 在 layout 放共用 `Header/Footer`，頁面走 outlet。

## P1（中期改善）

4. 建立最小資料層與狀態管理策略  
購物車專案通常會有全域狀態。  
建議：
- 先用 React Context + reducer 管理 cart（商品、數量、總價）。
- 後續再視需求升級（如 Zustand/Redux Toolkit）。

5. 補上基本測試  
目前沒有測試，回歸風險高。  
建議：
- 加入 `vitest` + `@testing-library/react`。
- 先覆蓋關鍵流程：加入購物車、數量增減、總價計算、路由切換。

6. README 改為專案專用文件  
現在 README 還是 Vite 預設內容。  
建議至少補上：
- 專案目的與功能清單
- 啟動/建置指令
- 目錄結構說明
- 後續開發規範（命名、分層、提交格式）

## P2（品質與維運）

7. 強化程式碼風格一致性  
目前只有 ESLint，缺少格式化工具。  
建議：
- 加入 Prettier（含 `format` script）並整合 ESLint。
- 加上 `lint:fix` script，降低手動修正成本。

8. 建立環境變數與 API 設定慣例  
未來串接 API 時建議提前規範。  
建議：
- 使用 `.env` / `.env.example` 管理 `VITE_*` 變數。
- 集中 API base URL 與 fetch client（例如 `src/lib/api.js`）。

9. 加入 CI 基本檢查  
建議在 PR 或 push 時自動跑檢查。  
建議：
- 至少執行 `npm run lint`、`npm run build`。
- 若有測試再加上 `npm test`。

## 目前狀態（已驗證）

- `npm run lint`：通過
- `npm run build`：通過（可正常產生 `dist`）

## 建議的最短實作順序（一天內可完成）

1. 統一 `Home/App` 檔案結構並清理空檔  
2. 導入 router 與基本頁面骨架  
3. 建立 cart context/reducer  
4. 更新 README（至少可讓新成員 5 分鐘內跑起來）
