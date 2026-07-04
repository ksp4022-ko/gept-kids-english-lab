# GEPT Kids English Lab

給小學生使用的英文聽力、閱讀、單字練習工具。可直接開啟 `index.html`，也可用 GitHub Pages 發布。

## 題庫規模

目前三個模式各至少 800 題，總計 2400 題：

- Listening：800 題
- Reading：800 題
- Words：800 題

題目不是全部手寫在 HTML 裡，而是用模板和字彙表在瀏覽器端產生。這樣比較容易擴充，也避免同一輪一直抽到完全相同的題目。

## 難度設計

頁面提供三段難度：

- A1 基礎：短句、單一關鍵字、直接找答案。
- 進階句型：加入時間、人物、地點或附加細節。
- A2 挑戰：較長句子、片語、推論或多資訊判讀。

要繼續增加難度和變化，優先改這些資料：

- `LISTENING_PATTERNS`：增加聽力情境與動作。
- `READING_PATTERNS`：增加短文題型，例如通知、日記、訊息、規則、活動表。
- `GENERATED_WORDS`：增加基礎單字。
- `VOCAB_ADJECTIVES`、`VOCAB_NOUNS`、`VOCAB_ACTIONS`：增加片語組合。
- `TIME_PHRASES`、`PLACE_PHRASES`、`READING_DETAILS`：增加句子變化。

## 使用方式

1. 開啟網站或本機 `index.html`。
2. 選擇模式、程度、主題、難度。
3. 每輪最多 10 題，同一輪會先洗牌，題目用完前不重複。
4. 聽力題使用瀏覽器內建 Web Speech API。

## 發布網址

GitHub Pages:

`https://ksp4022-ko.github.io/gept-kids-english-lab/`
