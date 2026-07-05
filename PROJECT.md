# GEPT Kids English Lab 專案規格

## 1. 專案定位

GEPT Kids English Lab 是一個給小學生使用的英文聽力、閱讀與單字練習網站。內容以小學生熟悉的生活情境為主，程度從 A1 暖身銜接到 GEPT 初級 A2。

目前網站為純前端靜態頁面，可直接用 GitHub Pages 發布，不需要後端、資料庫或登入系統。

公開網址：

`https://ksp4022-ko.github.io/gept-kids-english-lab/`

GitHub repository：

`https://github.com/ksp4022-ko/gept-kids-english-lab`

## 2. 目標使用者

- 國小中高年級學生。
- 想練習英聽、閱讀與基礎字彙的初學者。
- 想銜接 GEPT 初級的學生。
- 家長或老師可用作每日短練習。

## 3. 核心目標

1. 讓小學生每天可以快速做 10 題英文練習。
2. 題目不要在同一輪大量重複。
3. 手機上要容易操作，作答區不能被固定表頭擋住。
4. 題庫要有足夠數量與變化。
5. 難度要可調整，不能只有單一程度。

## 4. 目前功能

### 練習模式

- Listening：聽句選圖。
- Reading：閱讀理解。
- Words：單字與片語配對。

### 篩選條件

- 程度：
  - 小學英檢暖身 A1
  - GEPT 初級銜接 A2
- 主題：
  - School
  - Home
  - Food
  - Weather
  - Health
  - Places
- 難度：
  - A1 基礎
  - 進階句型
  - A2 挑戰

### 手機體驗

- 手機版固定表頭會在往下滑時自動隱藏。
- 往上滑或回到頁面頂端時，表頭會重新顯示。
- 已移除原本底部四個分類卡，避免手機作答時佔空間。

### 進度紀錄

- 已作答題數。
- 正確率。
- 連續答對。
- 紀錄存在瀏覽器 `localStorage`。

## 5. 題庫設計

目前三個模式各至少 800 題，總計 2400 題：

- Listening：800 題。
- Reading：800 題。
- Words：800 題。

題庫不是全部手寫，而是由模板與素材表在前端生成。

主要資料來源：

- `BANK`：手寫基礎題。
- `EXTRA_BANK`：補充手寫題。
- `LISTENING_PATTERNS`：聽力題模板。
- `READING_PATTERNS`：閱讀題模板。
- `GENERATED_WORDS`：基礎字彙。
- `VOCAB_ADJECTIVES`：形容詞。
- `VOCAB_NOUNS`：名詞。
- `VOCAB_ACTIONS`：動作片語。
- `TIME_PHRASES`：時間變化。
- `PLACE_PHRASES`：地點變化。
- `READING_DETAILS`：閱讀短文附加細節。

## 6. 防重複策略

目前抽題方式不是每次直接 `Math.random()` 從題庫抽，而是：

1. 依目前模式、程度、主題、難度篩出題庫。
2. 先洗牌成 `questionQueue`。
3. 每次從 queue 取一題。
4. queue 用完前不重複。
5. 用 `recentIds` 記住最近題目，避免下一輪一開始又抽到剛做過的題。

如果使用者選到很窄的主題或難度，題庫不足 10 題，系統會自動把本輪題數縮到可用題數，不硬湊重複題。

## 7. 難度規則

### A1 基礎

特徵：

- 短句。
- 單一關鍵字。
- 直接從句子或短文找答案。
- 選項差異明顯。

例：

- `Amy drinks milk for breakfast.`
- 問：What does Amy drink?

### 進階句型

特徵：

- 加入時間、人物、地點。
- 句子較長。
- 閱讀題會加入第二句或額外細節。
- 單字題開始出現形容詞 + 名詞片語。

例：

- `Ben reads a book in the library after school.`
- `blue notebook`

### A2 挑戰

特徵：

- 多資訊句子。
- 片語與推論。
- 閱讀題可能需要排除錯誤選項。
- 單字題出現動詞片語。

例：

- `Lisa takes an umbrella on a rainy day after lunch with her brother.`
- `borrow a book`

## 8. 如何繼續增加題庫變化

不要只把目標題數從 2400 改成 5000。更有效的是增加模板種類。

優先新增：

- 對話題：A asks, B answers。
- 表格題：活動時間表、課表、菜單。
- 告示題：library rules、field trip notice、lost and found。
- 訊息題：簡短簡訊、家長通知、老師留言。
- 推論題：不是直接找字，而是判斷原因或下一步。
- 否定句題：cannot、do not、no eating。
- 比較題：bigger、smaller、earlier、later。
- 順序題：first、then、after that。

## 9. 建議 Roadmap

### Phase 1：題庫品質提升

- 把題庫資料拆成 `questions.js` 或 `questions.json`。
- 為每題加上 `skill`、`topic`、`difficulty`、`grammar`、`vocabTags`。
- 增加人工審題清單，避免生成題太像。

### Phase 2：學習分析

- 記錄學生常錯主題。
- 顯示弱項，例如 Weather listening、Health words。
- 根據錯題自動推薦下一輪練習。

### Phase 3：老師/家長模式

- 可匯出練習紀錄。
- 可選擇每日題數。
- 可鎖定主題或難度。
- 可建立自訂題組。

### Phase 4：內容升級

- 加入真實音檔或錄音，而不是只依賴瀏覽器語音。
- 加入圖片素材庫。
- 加入更多 GEPT 初級常見題型。

## 10. 維護原則

- 小學生優先：句子短、畫面清楚、不要塞太多說明。
- 手機優先：作答區比裝飾重要。
- 題庫品質優先於題數。
- 每次擴題都要檢查：
  - 三模式題數是否達標。
  - 題目 ID 是否重複。
  - 選項是否有重複答案。
  - JS 語法是否通過。
  - GitHub Pages 是否更新成功。

## 11. 目前狀態

目前版本已完成：

- 獨立 GitHub repository。
- GitHub Pages 公開網址。
- 三模式各 800 題。
- 難度篩選。
- 手機表頭自動隱藏。
- 移除無功能分類卡。
- 同輪防重複抽題。
- 題庫與生成模板已從 `index.html` 拆到 `data/questions.js`。
- Listening 圖片場景系統第一階段完成：新增 `LISTENING_SCENES` 100 個組合式 scene，並用共用 SVG 元件繪製。
- Listening 抽題會避開最近出現過的 scene、action、object，降低圖片與動作重複率。

下一個最值得做的改進：

把 Listening 組合式 scene 從 100 個擴到至少 300 個，完成後再新增更多題型模板，例如對話題、表格題、告示題、訊息題、推論題、否定句、比較句與順序題。
