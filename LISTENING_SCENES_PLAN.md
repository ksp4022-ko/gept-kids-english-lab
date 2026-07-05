# Listening 圖片場景擴充計畫

目標：把 Listening「聽句選圖」從少量固定圖片，升級成可維護的組合式圖片場景系統。短期先支援 100 個可用場景，中期擴充到至少 300 個視覺場景，降低學生連續看到相同圖片的機率。

目前狀態：第一階段已完成。`data/questions.js` 已新增 100 個 `LISTENING_SCENES`，`index.html` 的 `drawScene()` 已支援組合式 scene config，Listening 抽題已加入 scene / action / object 防重複策略。

## 1. 問題定義

目前 Listening 題庫雖然有 800 題，但圖片 scene 數量遠少於題數。結果是題目句子不同，學生看到的圖片卻常重複，例如 book、soccer、noodles、park 反覆出現。

這會造成三個問題：

- 學生覺得題目重複。
- 選項太容易用圖片記憶猜答案。
- 題庫擴題時只增加句子，沒有真正增加視覺變化。

## 2. 設計原則

- 不手刻 300 張完全獨立 SVG。
- 用資料描述場景，再由共用 SVG 元件組合畫面。
- 每個 scene 都要能對應 Listening 題目的答案與干擾選項。
- 小學生優先：圖片簡單、可辨識，不追求細節。
- 題目優先：圖片服務作答，不做裝飾圖。
- 手機優先：圖片在小尺寸下仍要看得懂。

## 3. Scene 資料格式

建議新增 `LISTENING_SCENES`，每個場景用資料描述：

```js
{
  id: 'girl_drink_water_kitchen',
  topic: 'food',
  label: 'Drink water',
  actor: 'girl',
  action: 'drink',
  object: 'water',
  place: 'kitchen',
  weather: null,
  level: 'kids',
  difficulty: 'easy'
}
```

欄位說明：

- `id`：唯一場景 ID，給題目答案與圖片選項使用。
- `topic`：School、Home、Food、Weather、Health、Places。
- `label`：選項顯示文字。
- `actor`：boy、girl、teacher、mom、dad、student、family 等。
- `action`：read、write、eat、drink、wash、wear、take、visit 等。
- `object`：book、water、apple、umbrella、medicine 等。
- `place`：classroom、kitchen、park、library、market 等。
- `weather`：sunny、rainy、cloudy、snowy、cold、hot，可為 null。
- `level`：kids 或 bridge。
- `difficulty`：easy、medium、hard。

## 4. 300 場景分配

| Topic | 目標數 | 說明 |
| --- | ---: | --- |
| School | 60 | 課堂指令、文具、老師、作業、校園活動 |
| Home | 50 | 家庭生活、房間、家事、日常作息 |
| Food | 50 | 三餐、飲料、點心、購物、分享食物 |
| Weather | 45 | 天氣、穿著、戶外或室內活動 |
| Health | 45 | 身體不適、衛生習慣、看醫生、休息 |
| Places | 50 | 圖書館、公園、市場、車站、動物園、醫院 |
| Total | 300 | 第一階段先做 100，穩定後擴到 300 |

## 5. 第一批 100 個 Scene

### School 20

1. `student_open_book_classroom`
2. `girl_read_storybook_classroom`
3. `boy_write_pencil_desk`
4. `student_put_pencil_case_bag`
5. `teacher_write_board_classroom`
6. `student_clean_board_classroom`
7. `boy_raise_hand_classroom`
8. `girl_answer_question_classroom`
9. `student_do_homework_desk`
10. `teacher_give_notebook_classroom`
11. `student_borrow_book_library`
12. `girl_draw_picture_classroom`
13. `boy_read_comic_classroom`
14. `student_open_bag_classroom`
15. `girl_use_ruler_desk`
16. `boy_find_eraser_desk`
17. `student_listen_teacher_classroom`
18. `teacher_point_clock_classroom`
19. `student_sing_music_class`
20. `boy_play_soccer_schoolyard`

### Home 16

1. `boy_clean_room_home`
2. `girl_watch_tv_living_room`
3. `boy_go_bed_bedroom`
4. `girl_brush_teeth_bathroom`
5. `student_wash_cup_kitchen`
6. `girl_set_table_dining_room`
7. `boy_help_mom_kitchen`
8. `girl_water_flowers_garden`
9. `student_put_toys_box_room`
10. `boy_read_book_bedroom`
11. `girl_close_window_home`
12. `dad_cook_dinner_kitchen`
13. `mom_wash_dishes_kitchen`
14. `family_eat_dinner_home`
15. `boy_feed_pet_home`
16. `girl_make_bed_bedroom`

### Food 16

1. `girl_drink_milk_breakfast`
2. `boy_eat_noodles_lunch`
3. `student_eat_lunch_classroom`
4. `girl_eat_sandwich_picnic`
5. `boy_drink_water_after_run`
6. `girl_take_apple_snack`
7. `student_buy_bananas_market`
8. `boy_buy_oranges_fruit_shop`
9. `girl_share_cake_party`
10. `student_pack_lunch_box_home`
11. `boy_eat_bread_breakfast`
12. `girl_drink_juice_picnic`
13. `family_make_salad_kitchen`
14. `student_choose_egg_breakfast`
15. `boy_order_soup_restaurant`
16. `girl_put_tomato_plate`

### Weather 16

1. `boy_play_sunny_park`
2. `girl_take_umbrella_rainy`
3. `student_see_snow_morning`
4. `boy_wear_jacket_cold`
5. `girl_wear_hat_sunny`
6. `student_see_cloudy_sky`
7. `boy_stay_inside_rainy`
8. `girl_open_window_windy`
9. `student_wear_boots_rainy`
10. `boy_drink_water_hot_day`
11. `girl_walk_cool_morning`
12. `student_check_weather_report`
13. `boy_hold_raincoat_school`
14. `girl_fly_kite_windy`
15. `student_sit_under_tree_hot`
16. `family_plan_trip_cloudy`

### Health 16

1. `girl_has_toothache_home`
2. `boy_feels_sleepy_after_lunch`
3. `student_run_playground_morning`
4. `girl_visit_doctor_clinic`
5. `boy_take_medicine_home`
6. `student_wash_hands_before_lunch`
7. `boy_has_fever_bed`
8. `girl_has_headache_classroom`
9. `student_drink_warm_water`
10. `boy_rest_nurse_office`
11. `girl_cough_classroom`
12. `student_check_temperature`
13. `boy_hurt_foot_playground`
14. `girl_cover_ears_noise`
15. `student_eat_healthy_food`
16. `boy_sleep_early_health`

### Places 16

1. `student_go_library_friday`
2. `boy_ride_bike_park`
3. `mom_buy_fruit_market`
4. `student_visit_zoo_classmates`
5. `boy_take_bus_school`
6. `girl_wait_station_dad`
7. `student_go_hospital_mom`
8. `girl_shop_bookstore`
9. `boy_visit_museum_family`
10. `student_order_restaurant`
11. `girl_cross_street_light`
12. `boy_buy_ticket_station`
13. `student_play_playground_school`
14. `girl_read_library_table`
15. `family_walk_park_evening`
16. `boy_find_shop_street`

## 6. 擴到 300 的策略

第一批 100 個完成後，不要只手動再補 200 個。建議用組合規則補齊：

- 每個 topic 固定 8 到 12 個核心 action。
- 每個 action 搭配 3 到 6 個 object。
- 每個 object 搭配 2 到 4 個 place 或 weather。
- 生成前檢查 ID 不重複。
- 每個 topic 至少保留 15 個 easy、20 個 medium、15 個 hard。

範例：

```js
makeScene({
  topic: 'weather',
  actors: ['boy', 'girl', 'student'],
  actions: ['wear', 'take', 'see', 'stay'],
  objects: ['jacket', 'hat', 'umbrella', 'raincoat', 'cloudySky'],
  places: ['school', 'park', 'home'],
  weather: ['sunny', 'rainy', 'cloudy', 'cold']
});
```

## 7. SVG 元件設計

建議拆成這些共用繪圖函式：

- `drawBackground(place, weather)`
- `drawActor(actor, pose)`
- `drawObject(object)`
- `drawActionCue(action, object)`
- `drawSceneCard(sceneConfig)`

元件分層：

1. 背景：classroom、home、kitchen、park、library、market、station、clinic。
2. 人物：boy、girl、teacher、mom、dad、student、family。
3. 物品：book、pencil、bag、apple、water、umbrella、jacket、medicine。
4. 動作線索：read、write、eat、drink、wash、wear、take、visit。
5. 天氣符號：sun、cloud、rain、snow、wind。

## 8. 題庫接入方式

目前 Listening pattern 類似：

```js
['food', 'water', 'drinks water after running', '聽 water。', 'water 是水。']
```

之後改成：

```js
{
  topic: 'food',
  scene: 'boy_drink_water_after_run',
  audio: '{name} drinks water after running {timePhrase}.',
  hint: '聽 drinks water。',
  explain: 'drink water 是喝水。'
}
```

`makePictureChoices()` 從同 topic 或鄰近 topic 裡選干擾場景，避免選項太離譜。

## 9. 抽題防重複規則

Listening 模式除了避免同一題重複，也要避免圖片重複：

- 最近 5 題避免相同 answer scene。
- 最近 3 題避免相同 action。
- 最近 3 題避免相同 object。
- 如果使用者篩選太窄，才放寬規則。

## 10. 驗收標準

每次修改後檢查：

- Listening 題數仍為 800。
- 可用 answer scene 至少 100，第二階段至少 300。
- 所有 scene ID 都有 label。
- 所有 scene ID 都能畫出 SVG，不 fallback 成同一張圖。
- 每輪 10 題中，相同 answer scene 不超過 1 次。
- 每輪 10 題中，相同 topic 可以重複，但 action / object 不應大量連續重複。
- 手機 390px 寬度下，每張圖仍可辨識。
- JS 語法通過。

## 11. 實作順序

1. 新增 `LISTENING_SCENES` 資料表，先放第一批 100 個 scene。
2. 新增共用 SVG 元件，不一次刪掉舊 `drawScene()`。
3. 讓 `drawScene()` 先支援新 scene config，舊 scene 繼續可用。
4. 改 `LISTENING_PATTERNS` 為物件格式。
5. 改 `makePictureChoices()`，優先選同 topic 但不同 object / action 的干擾選項。
6. 加入 scene / action / object 防重複抽題。
7. 跑題庫檢查與手機預覽。
8. 穩定後再擴到 300 scene。
