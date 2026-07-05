# GEPT Kids English Lab 後續更新清單

這份文件用來接續 GitHub repository 的後續開發。完整產品規格請看 [PROJECT.md](PROJECT.md)。

## GitHub 連線狀態

- 本機 branch：`main`
- Remote：`origin`
- Repository：<https://github.com/ksp4022-ko/gept-kids-english-lab.git>
- GitHub Pages：<https://ksp4022-ko.github.io/gept-kids-english-lab/>

## 已完成

- 已把題庫與生成模板從 `index.html` 拆到 `data/questions.js`。
- `index.html` 現在只保留頁面結構、互動與作答邏輯。
- `data/questions.js` 透過 `window.GEPT_QUESTIONS` 提供 `BANK`、`SCENE_LABELS` 與 `TARGET_QUESTIONS_PER_MODE`。
- Listening 圖片場景系統第一階段完成：新增 100 個 `LISTENING_SCENES` 組合式 scene。
- `drawScene()` 已支援新 scene config，舊 scene 仍保留 fallback。
- Listening 抽題會避開最近出現過的 scene、action、object。

## 下一個最值得做的改進

繼續執行 Listening 圖片場景系統第二階段，規劃見 [LISTENING_SCENES_PLAN.md](LISTENING_SCENES_PLAN.md)。

目標是把聽句選圖從 100 個組合式 scene 擴到至少 300 個場景，進一步降低圖片重複率。

完成 300 scene 後，再在 `data/questions.js` 裡增加更多題型模板，優先補對話、表格、告示、訊息、推論、否定句、比較句與順序題。

若 `data/questions.js` 之後繼續變大，再拆成：

- `data/questionPatterns.js`：存放 `LISTENING_PATTERNS`、`READING_PATTERNS` 與句型模板。
- `data/vocabulary.js`：存放 `GENERATED_WORDS`、`VOCAB_ADJECTIVES`、`VOCAB_NOUNS`、`VOCAB_ACTIONS`。
- `data/questionMeta.js`：存放 `TIME_PHRASES`、`PLACE_PHRASES`、`READING_DETAILS` 等變化素材。

## 更新順序

1. 先新增模板與素材，不改 UI。
2. 確認 `index.html` 能正常載入 `data/questions.js`。
3. 檢查三模式題數是否仍各有 800 題。
4. 檢查題目 ID 是否重複。
5. 檢查選項是否有重複答案。
6. 手機版檢查表頭自動隱藏與作答區位置。
7. 更新 GitHub Pages 後確認公開網址正常。

## 擴充題庫優先方向

- 對話題：A asks, B answers。
- 表格題：活動時間表、課表、菜單。
- 告示題：library rules、field trip notice、lost and found。
- 訊息題：簡短簡訊、家長通知、老師留言。
- 推論題：判斷原因或下一步，不只直接找字。
- 否定句題：cannot、do not、no eating。
- 比較題：bigger、smaller、earlier、later。
- 順序題：first、then、after that。

## 每次更新前後要檢查

- 三模式題數是否達標。
- 題目 ID 是否重複。
- 選項是否有重複答案。
- JS 語法是否通過。
- GitHub Pages 是否部署成功。
