// Question bank and generation templates for GEPT Kids English Lab.
// Keep this file framework-free so the site can run as static GitHub Pages HTML.
(function () {
    const BANK = {
      listening: [
        {
          level: 'kids',
          topic: 'school',
          title: 'Classroom Action',
          prompt: 'Listen and choose the picture.',
          audio: 'Please open your book to page ten.',
          answer: 'book',
          hint: '老師在說課本和頁碼。',
          explain: 'open your book 是課堂常見指令。',
          choices: [
            { id: 'book', label: 'Open a book', scene: 'book' },
            { id: 'soccer', label: 'Play soccer', scene: 'soccer' },
            { id: 'lunch', label: 'Eat lunch', scene: 'lunch' }
          ]
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'Lunch Time',
          prompt: 'Listen and choose the picture.',
          audio: 'The boy wants some noodles for lunch.',
          answer: 'noodles',
          hint: '注意 wants 和 noodles。',
          explain: 'for lunch 表示午餐吃什麼。',
          choices: [
            { id: 'cake', label: 'A birthday cake', scene: 'cake' },
            { id: 'noodles', label: 'Noodles', scene: 'noodles' },
            { id: 'milk', label: 'Milk', scene: 'milk' }
          ]
        },
        {
          level: 'kids',
          topic: 'weather',
          title: 'Weather',
          prompt: 'Listen and choose the picture.',
          audio: 'It is rainy. Take your umbrella.',
          answer: 'umbrella',
          hint: '聽天氣和要帶的物品。',
          explain: 'rainy 和 umbrella 常一起出現。',
          choices: [
            { id: 'sun', label: 'A sunny day', scene: 'sun' },
            { id: 'umbrella', label: 'An umbrella', scene: 'umbrella' },
            { id: 'snow', label: 'Snow', scene: 'snow' }
          ]
        },
        {
          level: 'bridge',
          topic: 'health',
          title: 'At the Nurse Office',
          prompt: 'Listen and choose the best answer.',
          audio: 'Mia has a toothache. She cannot eat the apple.',
          answer: 'toothache',
          hint: '注意身體不舒服的地方。',
          explain: 'toothache 是牙痛，所以不能吃蘋果。',
          choices: [
            { id: 'toothache', label: 'She has a toothache.', scene: 'toothache' },
            { id: 'sleepy', label: 'She is sleepy.', scene: 'sleepy' },
            { id: 'running', label: 'She is running.', scene: 'running' }
          ]
        },
        {
          level: 'bridge',
          topic: 'places',
          title: 'After School',
          prompt: 'Listen and choose the place.',
          audio: 'After school, Ken goes to the library to read a storybook.',
          answer: 'library',
          hint: '聽 Ken 去哪裡，以及做什麼。',
          explain: 'library 是圖書館，可以 read a storybook。',
          choices: [
            { id: 'market', label: 'Market', scene: 'market' },
            { id: 'library', label: 'Library', scene: 'library' },
            { id: 'park', label: 'Park', scene: 'park' }
          ]
        },
        {
          level: 'bridge',
          topic: 'home',
          title: 'Helping at Home',
          prompt: 'Listen and choose what Dad asks.',
          audio: 'Dad asks Leo to clean his room before dinner.',
          answer: 'clean',
          hint: '注意 Dad asks Leo to...',
          explain: 'clean his room 是整理房間。',
          choices: [
            { id: 'clean', label: 'Clean his room', scene: 'clean' },
            { id: 'watch', label: 'Watch TV', scene: 'watch' },
            { id: 'sleep', label: 'Go to bed', scene: 'sleep' }
          ]
        }
      ],
      reading: [
        {
          level: 'kids',
          topic: 'school',
          title: 'A Classroom Notice',
          passage: 'Class 302 will visit the school garden on Friday. Please bring a hat and a water bottle. We will meet at the classroom at 9:00.',
          question: 'What should students bring?',
          answer: 'hat-water',
          hint: '找 Please bring 後面的物品。',
          explain: '通知說 Please bring a hat and a water bottle.',
          choices: [
            { id: 'hat-water', text: 'A hat and a water bottle' },
            { id: 'cake-card', text: 'A cake and a card' },
            { id: 'bike-ball', text: 'A bike and a ball' }
          ]
        },
        {
          level: 'kids',
          topic: 'home',
          title: "Ben's Saturday",
          passage: 'Ben gets up at seven on Saturday. He helps his mom make breakfast. In the afternoon, he plays basketball with his cousins.',
          question: 'Who does Ben play basketball with?',
          answer: 'cousins',
          hint: '找 plays basketball with 後面的人。',
          explain: '文章說 with his cousins。',
          choices: [
            { id: 'mom', text: 'His mom' },
            { id: 'teacher', text: 'His teacher' },
            { id: 'cousins', text: 'His cousins' }
          ]
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'A Short Message',
          passage: 'Hi Ruby, I am at the fruit shop. Do you want bananas or oranges? I can buy some for our picnic. From Lily',
          question: 'Where is Lily?',
          answer: 'fruit-shop',
          hint: '第一句說 I am at...',
          explain: 'I am at the fruit shop 表示 Lily 在水果店。',
          choices: [
            { id: 'fruit-shop', text: 'At the fruit shop' },
            { id: 'bookstore', text: 'At the bookstore' },
            { id: 'classroom', text: 'In the classroom' }
          ]
        },
        {
          level: 'bridge',
          topic: 'weather',
          title: 'Field Trip Plan',
          passage: 'The weather report says it will be cloudy in the morning and rainy after lunch. The zoo trip will start at 8:30. Students should wear comfortable shoes and bring a raincoat.',
          question: 'Why should students bring a raincoat?',
          answer: 'rainy',
          hint: '找天氣預報 lunch 後面的狀況。',
          explain: 'It will be rainy after lunch，所以需要 raincoat。',
          choices: [
            { id: 'cold', text: 'It will be very cold.' },
            { id: 'rainy', text: 'It will rain after lunch.' },
            { id: 'hot', text: 'It will be sunny and hot.' }
          ]
        },
        {
          level: 'bridge',
          topic: 'places',
          title: 'Library Rules',
          passage: 'Welcome to Green Library. You can borrow three books for two weeks. Please keep quiet and do not eat in the reading room.',
          question: 'Which is true?',
          answer: 'quiet',
          hint: '注意規則中 Please 開頭的句子。',
          explain: '圖書館規則要求 keep quiet。',
          choices: [
            { id: 'quiet', text: 'Readers should keep quiet.' },
            { id: 'five', text: 'Readers can borrow five books.' },
            { id: 'eat', text: 'Readers can eat in the reading room.' }
          ]
        },
        {
          level: 'bridge',
          topic: 'health',
          title: 'A Note to Teacher',
          passage: "Dear Ms. Wang, Tom has a fever today. He will stay home and drink warm water. He cannot go to the music show this afternoon. From Tom's dad",
          question: 'Why will Tom stay home?',
          answer: 'fever',
          hint: '找 Tom 今天怎麼了。',
          explain: 'Tom has a fever，所以今天在家休息。',
          choices: [
            { id: 'fever', text: 'He has a fever.' },
            { id: 'music', text: 'He needs music practice.' },
            { id: 'water', text: 'He lost his water bottle.' }
          ]
        }
      ],
      vocab: [
        {
          level: 'kids',
          topic: 'school',
          title: 'School Words',
          word: 'borrow',
          phonics: 'bor-row',
          answer: '借用',
          hint: '在圖書館常會做這件事。',
          explain: 'borrow a book 表示借一本書。',
          choices: ['借用', '關燈', '跳舞']
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'Food Words',
          word: 'thirsty',
          phonics: 'thirs-ty',
          answer: '口渴的',
          hint: '想喝水時的感覺。',
          explain: 'I am thirsty. 表示我口渴了。',
          choices: ['口渴的', '安靜的', '昂貴的']
        },
        {
          level: 'kids',
          topic: 'home',
          title: 'Home Words',
          word: 'clean',
          phonics: 'clean',
          answer: '打掃；乾淨的',
          hint: '整理房間或讓東西不髒。',
          explain: 'clean your room 是打掃你的房間。',
          choices: ['打掃；乾淨的', '畫畫', '生氣的']
        },
        {
          level: 'bridge',
          topic: 'places',
          title: 'Place Words',
          word: 'station',
          phonics: 'sta-tion',
          answer: '車站',
          hint: '搭火車或公車會去的地方。',
          explain: 'train station 是火車站。',
          choices: ['車站', '雨衣', '牙痛']
        },
        {
          level: 'bridge',
          topic: 'weather',
          title: 'Weather Words',
          word: 'cloudy',
          phonics: 'cloud-y',
          answer: '多雲的',
          hint: '天空有很多雲。',
          explain: 'It is cloudy today. 表示今天多雲。',
          choices: ['多雲的', '健康的', '遲到的']
        },
        {
          level: 'bridge',
          topic: 'health',
          title: 'Health Words',
          word: 'medicine',
          phonics: 'med-i-cine',
          answer: '藥',
          hint: '生病時可能會吃。',
          explain: 'Take some medicine. 表示吃藥。',
          choices: ['藥', '明信片', '操場']
        }
      ]
    };

    const EXTRA_BANK = {
      listening: [
        {
          level: 'kids',
          topic: 'school',
          title: 'Pencil Case',
          prompt: 'Listen and choose the picture.',
          audio: 'Put your pencil in the pencil case.',
          answer: 'book',
          hint: '聽 pencil 和 pencil case。',
          explain: 'pencil case 是鉛筆盒。',
          choices: [
            { id: 'book', label: 'School things', scene: 'book' },
            { id: 'park', label: 'A park', scene: 'park' },
            { id: 'cake', label: 'A cake', scene: 'cake' }
          ]
        },
        {
          level: 'kids',
          topic: 'school',
          title: 'After Class',
          prompt: 'Listen and choose the activity.',
          audio: 'Amy plays soccer with her friends after class.',
          answer: 'soccer',
          hint: '聽 plays soccer。',
          explain: 'after class 是下課後。',
          choices: [
            { id: 'soccer', label: 'Play soccer', scene: 'soccer' },
            { id: 'sleep', label: 'Go to bed', scene: 'sleep' },
            { id: 'market', label: 'Go shopping', scene: 'market' }
          ]
        },
        {
          level: 'kids',
          topic: 'home',
          title: 'Evening Routine',
          prompt: 'Listen and choose what the girl does.',
          audio: 'The girl watches TV with her brother at night.',
          answer: 'watch',
          hint: '聽 watches TV。',
          explain: 'watch TV 是看電視。',
          choices: [
            { id: 'watch', label: 'Watch TV', scene: 'watch' },
            { id: 'clean', label: 'Clean the room', scene: 'clean' },
            { id: 'library', label: 'Read in a library', scene: 'library' }
          ]
        },
        {
          level: 'kids',
          topic: 'home',
          title: 'Bed Time',
          prompt: 'Listen and choose the picture.',
          audio: 'It is nine o clock. Please go to bed.',
          answer: 'sleep',
          hint: '聽 go to bed。',
          explain: 'go to bed 是上床睡覺。',
          choices: [
            { id: 'sleep', label: 'Go to bed', scene: 'sleep' },
            { id: 'running', label: 'Run outside', scene: 'running' },
            { id: 'noodles', label: 'Eat noodles', scene: 'noodles' }
          ]
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'Breakfast Drink',
          prompt: 'Listen and choose the picture.',
          audio: 'I drink milk for breakfast every day.',
          answer: 'milk',
          hint: '聽 drink milk。',
          explain: 'for breakfast 是早餐。',
          choices: [
            { id: 'milk', label: 'Milk', scene: 'milk' },
            { id: 'umbrella', label: 'Umbrella', scene: 'umbrella' },
            { id: 'park', label: 'Park', scene: 'park' }
          ]
        },
        {
          level: 'kids',
          topic: 'weather',
          title: 'Sunny Morning',
          prompt: 'Listen and choose the weather.',
          audio: 'It is sunny today. Let us play in the park.',
          answer: 'sun',
          hint: '聽 sunny。',
          explain: 'sunny 是晴朗的。',
          choices: [
            { id: 'sun', label: 'Sunny', scene: 'sun' },
            { id: 'snow', label: 'Snowy', scene: 'snow' },
            { id: 'umbrella', label: 'Rainy', scene: 'umbrella' }
          ]
        },
        {
          level: 'kids',
          topic: 'places',
          title: 'At the Market',
          prompt: 'Listen and choose the place.',
          audio: 'Mom buys apples at the market.',
          answer: 'market',
          hint: '聽 buys apples 和 market。',
          explain: 'market 是市場。',
          choices: [
            { id: 'market', label: 'Market', scene: 'market' },
            { id: 'library', label: 'Library', scene: 'library' },
            { id: 'watch', label: 'TV room', scene: 'watch' }
          ]
        }
      ],
      reading: [
        {
          level: 'kids',
          topic: 'school',
          title: 'Lost and Found',
          passage: 'I found a blue pencil case under the desk. It has two pencils and a small ruler in it. Please ask Mr. Lin after class.',
          question: 'What color is the pencil case?',
          answer: 'blue',
          hint: '找 pencil case 前面的顏色。',
          explain: '文章說 a blue pencil case。',
          choices: [
            { id: 'blue', text: 'Blue' },
            { id: 'green', text: 'Green' },
            { id: 'red', text: 'Red' }
          ]
        },
        {
          level: 'kids',
          topic: 'school',
          title: 'Music Class',
          passage: 'Music class is on Tuesday morning. Please bring your recorder. We will sing a new song, too.',
          question: 'When is music class?',
          answer: 'tuesday',
          hint: '找 is on 後面的時間。',
          explain: 'Music class is on Tuesday morning.',
          choices: [
            { id: 'monday', text: 'Monday afternoon' },
            { id: 'tuesday', text: 'Tuesday morning' },
            { id: 'friday', text: 'Friday evening' }
          ]
        },
        {
          level: 'kids',
          topic: 'home',
          title: 'Family Dinner',
          passage: 'Nina helps Dad set the table. Her brother washes the cups. They eat dinner at six thirty.',
          question: 'What does Nina do?',
          answer: 'table',
          hint: '找 Nina helps Dad 後面的事。',
          explain: 'set the table 是擺餐桌。',
          choices: [
            { id: 'table', text: 'She sets the table.' },
            { id: 'cups', text: 'She washes the cups.' },
            { id: 'books', text: 'She reads books.' }
          ]
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'Snack Time',
          passage: 'There are three bananas and two oranges on the table. Sam takes one banana for his snack.',
          question: 'What does Sam take?',
          answer: 'banana',
          hint: '找 Sam takes one...',
          explain: 'Sam takes one banana.',
          choices: [
            { id: 'banana', text: 'A banana' },
            { id: 'orange', text: 'An orange' },
            { id: 'cake', text: 'A cake' }
          ]
        },
        {
          level: 'kids',
          topic: 'weather',
          title: 'Rainy Day',
          passage: 'It is raining now. The students cannot play outside. They draw pictures in the classroom.',
          question: 'Where do the students draw pictures?',
          answer: 'classroom',
          hint: '找 draw pictures in...',
          explain: 'They draw pictures in the classroom.',
          choices: [
            { id: 'classroom', text: 'In the classroom' },
            { id: 'park', text: 'In the park' },
            { id: 'zoo', text: 'At the zoo' }
          ]
        },
        {
          level: 'kids',
          topic: 'health',
          title: 'Feeling Sick',
          passage: 'Jack has a headache. He tells his teacher. The teacher asks him to drink water and rest.',
          question: 'How does Jack feel?',
          answer: 'headache',
          hint: '找 Jack has a...',
          explain: 'headache 是頭痛。',
          choices: [
            { id: 'hungry', text: 'He is hungry.' },
            { id: 'headache', text: 'He has a headache.' },
            { id: 'happy', text: 'He is happy.' }
          ]
        },
        {
          level: 'kids',
          topic: 'places',
          title: 'Park Time',
          passage: 'Lisa goes to the park with her dad. She rides a bike and sees two birds in the tree.',
          question: 'Who goes to the park with Lisa?',
          answer: 'dad',
          hint: '找 with her...',
          explain: 'Lisa goes to the park with her dad.',
          choices: [
            { id: 'mom', text: 'Her mom' },
            { id: 'dad', text: 'Her dad' },
            { id: 'teacher', text: 'Her teacher' }
          ]
        }
      ],
      vocab: [
        {
          level: 'kids',
          topic: 'school',
          title: 'School Words',
          word: 'ruler',
          phonics: 'ru-ler',
          answer: '尺',
          hint: '畫直線時會用到。',
          explain: 'a ruler 是一把尺。',
          choices: ['尺', '雨傘', '早餐']
        },
        {
          level: 'kids',
          topic: 'school',
          title: 'School Words',
          word: 'classmate',
          phonics: 'class-mate',
          answer: '同學',
          hint: '同一班的人。',
          explain: 'my classmate 是我的同學。',
          choices: ['同學', '晚餐', '車站']
        },
        {
          level: 'kids',
          topic: 'home',
          title: 'Home Words',
          word: 'bedroom',
          phonics: 'bed-room',
          answer: '臥室',
          hint: '睡覺的房間。',
          explain: 'bedroom 是臥室。',
          choices: ['臥室', '圖書館', '牙齒']
        },
        {
          level: 'kids',
          topic: 'food',
          title: 'Food Words',
          word: 'breakfast',
          phonics: 'break-fast',
          answer: '早餐',
          hint: '早上吃的一餐。',
          explain: 'eat breakfast 是吃早餐。',
          choices: ['早餐', '外套', '公園']
        },
        {
          level: 'kids',
          topic: 'weather',
          title: 'Weather Words',
          word: 'rainy',
          phonics: 'rain-y',
          answer: '下雨的',
          hint: '需要雨傘的天氣。',
          explain: 'a rainy day 是下雨天。',
          choices: ['下雨的', '安靜的', '乾淨的']
        },
        {
          level: 'kids',
          topic: 'health',
          title: 'Health Words',
          word: 'headache',
          phonics: 'head-ache',
          answer: '頭痛',
          hint: '頭不舒服。',
          explain: 'have a headache 是頭痛。',
          choices: ['頭痛', '市場', '鉛筆盒']
        },
        {
          level: 'kids',
          topic: 'places',
          title: 'Place Words',
          word: 'park',
          phonics: 'park',
          answer: '公園',
          hint: '可以散步或玩球的地方。',
          explain: 'go to the park 是去公園。',
          choices: ['公園', '藥', '午餐']
        }
      ]
    };

    Object.keys(EXTRA_BANK).forEach((mode) => {
      BANK[mode].push(...EXTRA_BANK[mode]);
    });

    const TARGET_QUESTIONS_PER_MODE = 800;
    const STUDENT_NAMES = ['Amy', 'Ben', 'Cindy', 'David', 'Emma', 'Jack', 'Lisa', 'Ryan'];
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const TIME_PHRASES = ['today', 'on Monday', 'on Tuesday', 'after school', 'before dinner', 'after lunch', 'in the morning', 'in the afternoon', 'at seven o clock', 'every Friday'];
    const PLACE_PHRASES = ['in class', 'at home', 'near the window', 'with a friend', 'with her brother', 'with his sister', 'at school', 'in the park'];
    const READING_DETAILS_BY_TITLE = {
      'Class Job': [
        'The teacher says thank you after class.',
        'The notebooks are for the next lesson.',
        'The board is clean before lunch.'
      ],
      'Book Day': [
        'The class reads quietly after lunch.',
        'The teacher asks one question about the story.',
        'The storybook is on the reading table.'
      ],
      'Morning at Home': [
        'The bag is near the front door.',
        'The student checks the bag before leaving home.',
        'The lunch box is for school.'
      ],
      'Helping Mom': [
        'Mom thanks the student after dinner.',
        'The cups are clean before bedtime.',
        'The table is ready for the family.'
      ],
      'Picnic Food': [
        'The water is in a blue bottle.',
        'They eat under a big tree.',
        'The picnic starts after lunch.'
      ],
      'Snack Shop': [
        'Dad will eat the bread after dinner.',
        'Mom puts the milk in the fridge.',
        'The snack shop is near the school.'
      ],
      'Weather Report': [
        'The class trip starts after lunch.',
        'The hat is for the walk outside.',
        'The jacket keeps the student warm.'
      ],
      'Rain Plan': [
        'The classroom is dry and quiet.',
        'The basketball court is wet.',
        'The student waits for the rain to stop.'
      ],
      'Nurse Note': [
        'The nurse writes a short note to the teacher.',
        'The student rests in the nurse office.',
        'The student feels better after drinking water.'
      ],
      'Sports Day': [
        'The student drinks water under the tree.',
        'The teacher asks the student to rest.',
        'The race is over before lunch.'
      ],
      'Library Visit': [
        'The library card is in the school bag.',
        'The student reads quietly at a table.',
        'The books are due next week.'
      ],
      'Market Trip': [
        'Grandpa puts the cake in a small bag.',
        'They carry the food home together.',
        'The market is busy in the morning.'
      ]
    };
    const LEGACY_SCENE_LABELS = {
      book: 'School things',
      soccer: 'Play soccer',
      lunch: 'Eat lunch',
      cake: 'Cake',
      noodles: 'Noodles',
      milk: 'Milk',
      sun: 'Sunny day',
      umbrella: 'Umbrella',
      snow: 'Snow',
      toothache: 'Toothache',
      sleepy: 'Sleepy',
      running: 'Running',
      market: 'Market',
      library: 'Library',
      park: 'Park',
      clean: 'Clean the room',
      watch: 'Watch TV',
      sleep: 'Go to bed',
      pencil: 'Pencil',
      desk: 'Desk',
      teacher: 'Teacher',
      homework: 'Homework',
      sandwich: 'Sandwich',
      water: 'Water',
      apple: 'Apple',
      jacket: 'Jacket',
      hat: 'Hat',
      cloudy: 'Cloudy',
      doctor: 'Doctor',
      medicine: 'Medicine',
      washHands: 'Wash hands',
      zoo: 'Zoo',
      bus: 'Bus',
      station: 'Station',
      garden: 'Garden',
      cup: 'Cup'
    };

    const scene = (id, topic, label, actor, action, object, place, phrase, hint, explain, difficulty = 'easy', weather = null) => ({
      id, topic, label, actor, action, object, place, phrase, hint, explain, difficulty, weather
    });

    const LISTENING_SCENES = [
      scene('student_open_book_classroom', 'school', 'Open a book', 'student', 'open', 'book', 'classroom', 'opens a book in class', '聽 open a book。', 'open a book 是打開書。'),
      scene('girl_read_storybook_classroom', 'school', 'Read a storybook', 'girl', 'read', 'storybook', 'classroom', 'reads a storybook in class', '聽 reads a storybook。', 'read a storybook 是讀故事書。'),
      scene('boy_write_pencil_desk', 'school', 'Write with a pencil', 'boy', 'write', 'pencil', 'classroom', 'writes with a pencil at the desk', '聽 pencil 和 writes。', 'write with a pencil 是用鉛筆寫字。'),
      scene('student_put_pencil_case_bag', 'school', 'Put a pencil case in a bag', 'student', 'put', 'pencil case', 'classroom', 'puts a pencil case in the bag', '聽 pencil case 和 bag。', 'pencil case 是鉛筆盒。'),
      scene('teacher_write_board_classroom', 'school', 'Teacher writes on the board', 'teacher', 'write', 'board', 'classroom', 'writes on the board', '聽 teacher 和 board。', 'write on the board 是在黑板上寫字。', 'medium'),
      scene('student_clean_board_classroom', 'school', 'Clean the board', 'student', 'clean', 'board', 'classroom', 'cleans the board after class', '聽 cleans the board。', 'clean the board 是擦黑板。'),
      scene('boy_raise_hand_classroom', 'school', 'Raise a hand', 'boy', 'raise', 'hand', 'classroom', 'raises his hand in class', '聽 raises his hand。', 'raise a hand 是舉手。'),
      scene('girl_answer_question_classroom', 'school', 'Answer a question', 'girl', 'answer', 'question', 'classroom', 'answers a question for the teacher', '聽 answers a question。', 'answer a question 是回答問題。', 'medium'),
      scene('student_do_homework_desk', 'school', 'Do homework', 'student', 'do', 'homework', 'classroom', 'does homework at the desk', '聽 homework。', 'do homework 是寫作業。'),
      scene('teacher_give_notebook_classroom', 'school', 'Give a notebook', 'teacher', 'give', 'notebook', 'classroom', 'gives a notebook to a student', '聽 gives a notebook。', 'give a notebook 是給筆記本。', 'medium'),
      scene('student_borrow_book_library', 'school', 'Borrow a book', 'student', 'borrow', 'book', 'library', 'borrows a book from the library', '聽 borrows a book。', 'borrow a book 是借書。'),
      scene('girl_draw_picture_classroom', 'school', 'Draw a picture', 'girl', 'draw', 'picture', 'classroom', 'draws a picture in class', '聽 draws a picture。', 'draw a picture 是畫圖。'),
      scene('boy_read_comic_classroom', 'school', 'Read a comic book', 'boy', 'read', 'comic book', 'classroom', 'reads a comic book after class', '聽 comic book。', 'comic book 是漫畫書。', 'medium'),
      scene('student_open_bag_classroom', 'school', 'Open a school bag', 'student', 'open', 'bag', 'classroom', 'opens a school bag near the desk', '聽 school bag。', 'school bag 是書包。'),
      scene('girl_use_ruler_desk', 'school', 'Use a ruler', 'girl', 'use', 'ruler', 'classroom', 'uses a ruler at the desk', '聽 ruler。', 'ruler 是尺。'),
      scene('boy_find_eraser_desk', 'school', 'Find an eraser', 'boy', 'find', 'eraser', 'classroom', 'finds an eraser under the desk', '聽 eraser。', 'eraser 是橡皮擦。', 'medium'),
      scene('student_listen_teacher_classroom', 'school', 'Listen to the teacher', 'student', 'listen', 'teacher', 'classroom', 'listens to the teacher in class', '聽 listens to the teacher。', 'listen to the teacher 是聽老師說話。'),
      scene('teacher_point_clock_classroom', 'school', 'Point at the clock', 'teacher', 'point', 'clock', 'classroom', 'points at the clock on the wall', '聽 clock。', 'clock 是時鐘。', 'medium'),
      scene('student_sing_music_class', 'school', 'Sing in music class', 'student', 'sing', 'music', 'classroom', 'sings a song in music class', '聽 sings a song。', 'sing a song 是唱歌。'),
      scene('boy_play_soccer_schoolyard', 'school', 'Play soccer', 'boy', 'play', 'soccer ball', 'playground', 'plays soccer in the schoolyard', '聽 plays soccer。', 'soccer 是足球。'),

      scene('boy_clean_room_home', 'home', 'Clean a room', 'boy', 'clean', 'room', 'bedroom', 'cleans his room before dinner', '聽 cleans his room。', 'clean a room 是打掃房間。'),
      scene('girl_watch_tv_living_room', 'home', 'Watch TV', 'girl', 'watch', 'TV', 'living room', 'watches TV in the living room', '聽 watches TV。', 'watch TV 是看電視。'),
      scene('boy_go_bed_bedroom', 'home', 'Go to bed', 'boy', 'sleep', 'bed', 'bedroom', 'goes to bed at nine', '聽 goes to bed。', 'go to bed 是上床睡覺。'),
      scene('girl_brush_teeth_bathroom', 'home', 'Brush teeth', 'girl', 'brush', 'teeth', 'bathroom', 'brushes her teeth before bed', '聽 brushes her teeth。', 'brush teeth 是刷牙。'),
      scene('student_wash_cup_kitchen', 'home', 'Wash a cup', 'student', 'wash', 'cup', 'kitchen', 'washes a cup in the kitchen', '聽 washes a cup。', 'wash a cup 是洗杯子。'),
      scene('girl_set_table_dining_room', 'home', 'Set the table', 'girl', 'set', 'table', 'dining room', 'sets the table for dinner', '聽 sets the table。', 'set the table 是擺餐桌。', 'medium'),
      scene('boy_help_mom_kitchen', 'home', 'Help Mom', 'boy', 'help', 'mom', 'kitchen', 'helps Mom in the kitchen', '聽 helps Mom。', 'help Mom 是幫媽媽。'),
      scene('girl_water_flowers_garden', 'home', 'Water flowers', 'girl', 'water', 'flowers', 'garden', 'waters flowers in the garden', '聽 waters flowers。', 'water flowers 是澆花。'),
      scene('student_put_toys_box_room', 'home', 'Put toys in a box', 'student', 'put', 'toys', 'bedroom', 'puts toys in a box', '聽 toys 和 box。', 'put toys in a box 是把玩具放進盒子。', 'medium'),
      scene('boy_read_book_bedroom', 'home', 'Read in the bedroom', 'boy', 'read', 'book', 'bedroom', 'reads a book in the bedroom', '聽 reads a book。', 'read a book 是讀書。'),
      scene('girl_close_window_home', 'home', 'Close the window', 'girl', 'close', 'window', 'living room', 'closes the window at home', '聽 closes the window。', 'close the window 是關窗戶。'),
      scene('dad_cook_dinner_kitchen', 'home', 'Cook dinner', 'dad', 'cook', 'dinner', 'kitchen', 'cooks dinner in the kitchen', '聽 cooks dinner。', 'cook dinner 是煮晚餐。'),
      scene('mom_wash_dishes_kitchen', 'home', 'Wash dishes', 'mom', 'wash', 'dishes', 'kitchen', 'washes dishes after dinner', '聽 washes dishes。', 'wash dishes 是洗碗盤。', 'medium'),
      scene('family_eat_dinner_home', 'home', 'Eat dinner', 'family', 'eat', 'dinner', 'dining room', 'eats dinner at home', '聽 eats dinner。', 'eat dinner 是吃晚餐。'),
      scene('boy_feed_pet_home', 'home', 'Feed a pet', 'boy', 'feed', 'pet', 'living room', 'feeds the pet after school', '聽 feeds the pet。', 'feed the pet 是餵寵物。', 'medium'),
      scene('girl_make_bed_bedroom', 'home', 'Make the bed', 'girl', 'make', 'bed', 'bedroom', 'makes the bed in the morning', '聽 makes the bed。', 'make the bed 是整理床鋪。'),

      scene('girl_drink_milk_breakfast', 'food', 'Drink milk', 'girl', 'drink', 'milk', 'kitchen', 'drinks milk for breakfast', '聽 drinks milk。', 'milk 是牛奶。'),
      scene('boy_eat_noodles_lunch', 'food', 'Eat noodles', 'boy', 'eat', 'noodles', 'dining room', 'eats noodles for lunch', '聽 eats noodles。', 'noodles 是麵。'),
      scene('student_eat_lunch_classroom', 'food', 'Eat lunch', 'student', 'eat', 'lunch', 'classroom', 'eats lunch with classmates', '聽 eats lunch。', 'lunch 是午餐。'),
      scene('girl_eat_sandwich_picnic', 'food', 'Eat a sandwich', 'girl', 'eat', 'sandwich', 'park', 'eats a sandwich at the picnic', '聽 sandwich。', 'sandwich 是三明治。'),
      scene('boy_drink_water_after_run', 'food', 'Drink water', 'boy', 'drink', 'water', 'playground', 'drinks water after running', '聽 drinks water。', 'drink water 是喝水。'),
      scene('girl_take_apple_snack', 'food', 'Take an apple', 'girl', 'take', 'apple', 'kitchen', 'takes an apple for snack time', '聽 apple。', 'apple 是蘋果。'),
      scene('student_buy_bananas_market', 'food', 'Buy bananas', 'student', 'buy', 'bananas', 'market', 'buys bananas at the market', '聽 buys bananas。', 'banana 是香蕉。'),
      scene('boy_buy_oranges_fruit_shop', 'food', 'Buy oranges', 'boy', 'buy', 'oranges', 'market', 'buys oranges at the fruit shop', '聽 oranges。', 'orange 是柳橙。'),
      scene('girl_share_cake_party', 'food', 'Share a cake', 'girl', 'share', 'cake', 'home', 'shares a cake at the party', '聽 cake 和 party。', 'share a cake 是分享蛋糕。', 'medium'),
      scene('student_pack_lunch_box_home', 'food', 'Pack a lunch box', 'student', 'pack', 'lunch box', 'kitchen', 'packs a lunch box before school', '聽 lunch box。', 'lunch box 是便當盒。', 'medium'),
      scene('boy_eat_bread_breakfast', 'food', 'Eat bread', 'boy', 'eat', 'bread', 'kitchen', 'eats bread for breakfast', '聽 bread。', 'bread 是麵包。'),
      scene('girl_drink_juice_picnic', 'food', 'Drink juice', 'girl', 'drink', 'juice', 'park', 'drinks juice at the picnic', '聽 drinks juice。', 'juice 是果汁。'),
      scene('family_make_salad_kitchen', 'food', 'Make salad', 'family', 'make', 'salad', 'kitchen', 'makes salad in the kitchen', '聽 makes salad。', 'salad 是沙拉。', 'medium'),
      scene('student_choose_egg_breakfast', 'food', 'Choose an egg', 'student', 'choose', 'egg', 'kitchen', 'chooses an egg for breakfast', '聽 egg。', 'egg 是蛋。'),
      scene('boy_order_soup_restaurant', 'food', 'Order soup', 'boy', 'order', 'soup', 'restaurant', 'orders soup at the restaurant', '聽 orders soup。', 'soup 是湯。', 'medium'),
      scene('girl_put_tomato_plate', 'food', 'Put a tomato on a plate', 'girl', 'put', 'tomato', 'kitchen', 'puts a tomato on the plate', '聽 tomato 和 plate。', 'tomato 是番茄。'),

      scene('boy_play_sunny_park', 'weather', 'Play on a sunny day', 'boy', 'play', 'sun', 'park', 'plays in the park on a sunny day', '聽 sunny day。', 'sunny 是晴朗的。', 'easy', 'sunny'),
      scene('girl_take_umbrella_rainy', 'weather', 'Take an umbrella', 'girl', 'take', 'umbrella', 'street', 'takes an umbrella on a rainy day', '聽 umbrella 和 rainy。', 'umbrella 是雨傘。', 'easy', 'rainy'),
      scene('student_see_snow_morning', 'weather', 'See snow', 'student', 'see', 'snow', 'home', 'sees snow in the morning', '聽 snow。', 'snow 是雪。', 'easy', 'snowy'),
      scene('boy_wear_jacket_cold', 'weather', 'Wear a jacket', 'boy', 'wear', 'jacket', 'school', 'wears a jacket on a cold morning', '聽 jacket。', 'jacket 是外套。', 'easy', 'cold'),
      scene('girl_wear_hat_sunny', 'weather', 'Wear a hat', 'girl', 'wear', 'hat', 'park', 'wears a hat on a sunny day', '聽 hat。', 'hat 是帽子。', 'easy', 'sunny'),
      scene('student_see_cloudy_sky', 'weather', 'See a cloudy sky', 'student', 'see', 'cloudy sky', 'school', 'sees a cloudy sky in the afternoon', '聽 cloudy sky。', 'cloudy 是多雲的。', 'easy', 'cloudy'),
      scene('boy_stay_inside_rainy', 'weather', 'Stay inside', 'boy', 'stay', 'inside', 'home', 'stays inside on a rainy day', '聽 stays inside。', 'stay inside 是待在室內。', 'medium', 'rainy'),
      scene('girl_open_window_windy', 'weather', 'Open a window', 'girl', 'open', 'window', 'home', 'opens the window on a windy day', '聽 windy 和 window。', 'windy 是有風的。', 'medium', 'windy'),
      scene('student_wear_boots_rainy', 'weather', 'Wear boots', 'student', 'wear', 'boots', 'street', 'wears boots on a rainy day', '聽 boots。', 'boots 是靴子。', 'easy', 'rainy'),
      scene('boy_drink_water_hot_day', 'weather', 'Drink water on a hot day', 'boy', 'drink', 'water', 'park', 'drinks water on a hot day', '聽 hot day 和 water。', 'hot 是熱的。', 'medium', 'hot'),
      scene('girl_walk_cool_morning', 'weather', 'Walk on a cool morning', 'girl', 'walk', 'morning', 'park', 'walks in the park on a cool morning', '聽 cool morning。', 'cool 是涼爽的。', 'medium', 'cool'),
      scene('student_check_weather_report', 'weather', 'Check the weather report', 'student', 'check', 'weather report', 'home', 'checks the weather report before school', '聽 weather report。', 'weather report 是天氣預報。', 'hard', 'cloudy'),
      scene('boy_hold_raincoat_school', 'weather', 'Hold a raincoat', 'boy', 'hold', 'raincoat', 'school', 'holds a raincoat after lunch', '聽 raincoat。', 'raincoat 是雨衣。', 'medium', 'rainy'),
      scene('girl_fly_kite_windy', 'weather', 'Fly a kite', 'girl', 'fly', 'kite', 'park', 'flies a kite on a windy day', '聽 flies a kite。', 'fly a kite 是放風箏。', 'medium', 'windy'),
      scene('student_sit_under_tree_hot', 'weather', 'Sit under a tree', 'student', 'sit', 'tree', 'park', 'sits under a tree on a hot day', '聽 under a tree。', 'sit under a tree 是坐在樹下。', 'hard', 'hot'),
      scene('family_plan_trip_cloudy', 'weather', 'Plan a trip', 'family', 'plan', 'trip', 'home', 'plans a trip on a cloudy day', '聽 plans a trip。', 'plan a trip 是計畫旅行。', 'hard', 'cloudy'),

      scene('girl_has_toothache_home', 'health', 'Have a toothache', 'girl', 'have', 'toothache', 'home', 'has a toothache after eating candy', '聽 toothache。', 'toothache 是牙痛。'),
      scene('boy_feels_sleepy_after_lunch', 'health', 'Feel sleepy', 'boy', 'feel', 'sleepy', 'classroom', 'feels sleepy after lunch', '聽 sleepy。', 'sleepy 是想睡的。'),
      scene('student_run_playground_morning', 'health', 'Run on the playground', 'student', 'run', 'playground', 'playground', 'runs on the playground every morning', '聽 runs。', 'run 是跑步。'),
      scene('girl_visit_doctor_clinic', 'health', 'Visit a doctor', 'girl', 'visit', 'doctor', 'clinic', 'visits the doctor with Mom', '聽 doctor。', 'doctor 是醫生。'),
      scene('boy_take_medicine_home', 'health', 'Take medicine', 'boy', 'take', 'medicine', 'home', 'takes medicine after breakfast', '聽 medicine。', 'medicine 是藥。'),
      scene('student_wash_hands_before_lunch', 'health', 'Wash hands', 'student', 'wash', 'hands', 'school', 'washes hands before lunch', '聽 washes hands。', 'wash hands 是洗手。'),
      scene('boy_has_fever_bed', 'health', 'Have a fever', 'boy', 'have', 'fever', 'bedroom', 'has a fever and stays in bed', '聽 fever。', 'fever 是發燒。', 'medium'),
      scene('girl_has_headache_classroom', 'health', 'Have a headache', 'girl', 'have', 'headache', 'classroom', 'has a headache in class', '聽 headache。', 'headache 是頭痛。'),
      scene('student_drink_warm_water', 'health', 'Drink warm water', 'student', 'drink', 'warm water', 'home', 'drinks warm water after coughing', '聽 warm water。', 'warm water 是溫水。', 'medium'),
      scene('boy_rest_nurse_office', 'health', 'Rest in the nurse office', 'boy', 'rest', 'nurse', 'clinic', 'rests in the nurse office', '聽 rests。', 'rest 是休息。', 'medium'),
      scene('girl_cough_classroom', 'health', 'Cough in class', 'girl', 'cough', 'mouth', 'classroom', 'coughs in class and wears a mask', '聽 coughs。', 'cough 是咳嗽。'),
      scene('student_check_temperature', 'health', 'Check temperature', 'student', 'check', 'temperature', 'clinic', 'checks the temperature with the nurse', '聽 temperature。', 'temperature 是體溫。', 'hard'),
      scene('boy_hurt_foot_playground', 'health', 'Hurt a foot', 'boy', 'hurt', 'foot', 'playground', 'hurts his foot on the playground', '聽 foot。', 'foot 是腳。', 'medium'),
      scene('girl_cover_ears_noise', 'health', 'Cover ears', 'girl', 'cover', 'ears', 'classroom', 'covers her ears because it is noisy', '聽 ears 和 noisy。', 'ear 是耳朵。', 'hard'),
      scene('student_eat_healthy_food', 'health', 'Eat healthy food', 'student', 'eat', 'healthy food', 'dining room', 'eats healthy food for lunch', '聽 healthy food。', 'healthy 是健康的。', 'medium'),
      scene('boy_sleep_early_health', 'health', 'Sleep early', 'boy', 'sleep', 'bed', 'bedroom', 'sleeps early because he is tired', '聽 sleeps early。', 'sleep early 是早睡。', 'medium'),

      scene('student_go_library_friday', 'places', 'Go to the library', 'student', 'go', 'library', 'library', 'goes to the library on Friday', '聽 library。', 'library 是圖書館。'),
      scene('boy_ride_bike_park', 'places', 'Ride a bike in the park', 'boy', 'ride', 'bike', 'park', 'rides a bike in the park', '聽 rides a bike。', 'ride a bike 是騎腳踏車。'),
      scene('mom_buy_fruit_market', 'places', 'Buy fruit at the market', 'mom', 'buy', 'fruit', 'market', 'buys fruit at the market', '聽 market。', 'market 是市場。'),
      scene('student_visit_zoo_classmates', 'places', 'Visit the zoo', 'student', 'visit', 'zoo', 'zoo', 'visits the zoo with classmates', '聽 zoo。', 'zoo 是動物園。'),
      scene('boy_take_bus_school', 'places', 'Take a bus', 'boy', 'take', 'bus', 'station', 'takes a bus to school', '聽 bus。', 'bus 是公車。'),
      scene('girl_wait_station_dad', 'places', 'Wait at the station', 'girl', 'wait', 'station', 'station', 'waits at the station with Dad', '聽 station。', 'station 是車站。'),
      scene('student_go_hospital_mom', 'places', 'Go to the hospital', 'student', 'go', 'hospital', 'clinic', 'goes to the hospital with Mom', '聽 hospital。', 'hospital 是醫院。', 'medium'),
      scene('girl_shop_bookstore', 'places', 'Shop at a bookstore', 'girl', 'shop', 'book', 'shop', 'shops at the bookstore after school', '聽 bookstore。', 'bookstore 是書店。', 'medium'),
      scene('boy_visit_museum_family', 'places', 'Visit a museum', 'boy', 'visit', 'museum', 'museum', 'visits a museum with his family', '聽 museum。', 'museum 是博物館。', 'medium'),
      scene('student_order_restaurant', 'places', 'Order at a restaurant', 'student', 'order', 'meal', 'restaurant', 'orders a meal at the restaurant', '聽 restaurant。', 'restaurant 是餐廳。', 'medium'),
      scene('girl_cross_street_light', 'places', 'Cross the street', 'girl', 'cross', 'street', 'street', 'crosses the street at the light', '聽 street 和 light。', 'cross the street 是過馬路。', 'hard'),
      scene('boy_buy_ticket_station', 'places', 'Buy a ticket', 'boy', 'buy', 'ticket', 'station', 'buys a ticket at the station', '聽 ticket。', 'ticket 是票。', 'medium'),
      scene('student_play_playground_school', 'places', 'Play on the playground', 'student', 'play', 'playground', 'playground', 'plays on the school playground', '聽 playground。', 'playground 是操場。'),
      scene('girl_read_library_table', 'places', 'Read at a library table', 'girl', 'read', 'book', 'library', 'reads at a library table', '聽 library table。', '在圖書館桌邊閱讀。', 'medium'),
      scene('family_walk_park_evening', 'places', 'Walk in the park', 'family', 'walk', 'park', 'park', 'walks in the park in the evening', '聽 walks in the park。', 'walk in the park 是在公園散步。'),
      scene('boy_find_shop_street', 'places', 'Find a shop', 'boy', 'find', 'shop', 'street', 'finds a shop on the street', '聽 shop 和 street。', 'shop 是商店。', 'medium')
    ];

    const SCENE_MAP = Object.fromEntries(LISTENING_SCENES.map((item) => [item.id, item]));
    const SCENE_LABELS = {
      ...LEGACY_SCENE_LABELS,
      ...Object.fromEntries(LISTENING_SCENES.map((item) => [item.id, item.label]))
    };

    const LISTENING_PATTERNS = LISTENING_SCENES;

    const READING_PATTERNS = [
      {
        topic: 'school',
        title: 'Class Job',
        make(name, day) {
          return {
            passage: `${name} is the class helper on ${day}. ${name} cleans the board and gives notebooks to the teacher.`,
            question: `What does ${name} clean?`,
            answer: 'board',
            choices: [{ id: 'board', text: 'The board' }, { id: 'window', text: 'The window' }, { id: 'bike', text: 'The bike' }],
            hint: '找 cleans 後面的東西。',
            explain: '文章說 cleans the board。'
          };
        }
      },
      {
        topic: 'school',
        title: 'Book Day',
        make(name, day) {
          return {
            passage: `On ${day}, ${name} brings a storybook to school. The book is about a small dog and a red ball.`,
            question: 'What is the book about?',
            answer: 'dog',
            choices: [{ id: 'dog', text: 'A small dog' }, { id: 'cat', text: 'A black cat' }, { id: 'bird', text: 'A blue bird' }],
            hint: '找 about 後面的內容。',
            explain: '文章說 about a small dog。'
          };
        }
      },
      {
        topic: 'home',
        title: 'Morning at Home',
        make(name, day) {
          return {
            passage: `${name} gets up at six forty on ${day}. After breakfast, ${name} puts the lunch box in the bag.`,
            question: 'What does the student put in the bag?',
            answer: 'lunch-box',
            choices: [{ id: 'lunch-box', text: 'A lunch box' }, { id: 'umbrella', text: 'An umbrella' }, { id: 'ball', text: 'A ball' }],
            hint: '找 puts 後面的物品。',
            explain: '文章說 puts the lunch box in the bag。'
          };
        }
      },
      {
        topic: 'home',
        title: 'Helping Mom',
        make(name, day) {
          return {
            passage: `${name} helps Mom after dinner. ${name} washes three cups and puts them on the table.`,
            question: 'How many cups does the student wash?',
            answer: 'three',
            choices: [{ id: 'two', text: 'Two' }, { id: 'three', text: 'Three' }, { id: 'five', text: 'Five' }],
            hint: '找 washes 後面的數字。',
            explain: '文章說 washes three cups。'
          };
        }
      },
      {
        topic: 'food',
        title: 'Picnic Food',
        make(name, day) {
          return {
            passage: `${name} has a picnic with friends on ${day}. They bring sandwiches, apples, and water.`,
            question: 'What do they bring to drink?',
            answer: 'water',
            choices: [{ id: 'juice', text: 'Juice' }, { id: 'water', text: 'Water' }, { id: 'milk', text: 'Milk' }],
            hint: '找飲料。',
            explain: '文章列出 sandwiches, apples, and water。'
          };
        }
      },
      {
        topic: 'food',
        title: 'Snack Shop',
        make(name, day) {
          return {
            passage: `${name} goes to the snack shop after school. ${name} buys bread for Dad and milk for Mom.`,
            question: 'Who is the milk for?',
            answer: 'mom',
            choices: [{ id: 'dad', text: 'Dad' }, { id: 'mom', text: 'Mom' }, { id: 'teacher', text: 'Teacher' }],
            hint: '找 milk for...',
            explain: '文章說 milk for Mom。'
          };
        }
      },
      {
        topic: 'weather',
        title: 'Weather Report',
        make(name, day) {
          return {
            passage: `The weather report says ${day} will be cloudy. ${name} will wear a jacket and bring a hat.`,
            question: 'What will the weather be like?',
            answer: 'cloudy',
            choices: [{ id: 'sunny', text: 'Sunny' }, { id: 'cloudy', text: 'Cloudy' }, { id: 'snowy', text: 'Snowy' }],
            hint: '找 will be 後面的天氣。',
            explain: '文章說 will be cloudy。'
          };
        }
      },
      {
        topic: 'weather',
        title: 'Rain Plan',
        make(name, day) {
          return {
            passage: `It is rainy after lunch. ${name} cannot play basketball outside, so ${name} reads comics in the classroom.`,
            question: 'Why can the student not play outside?',
            answer: 'rainy',
            choices: [{ id: 'rainy', text: 'It is rainy.' }, { id: 'hot', text: 'It is hot.' }, { id: 'late', text: 'It is late.' }],
            hint: '找第一句的天氣。',
            explain: '文章說 It is rainy after lunch。'
          };
        }
      },
      {
        topic: 'health',
        title: 'Nurse Note',
        make(name, day) {
          return {
            passage: `${name} has a headache in the morning. The nurse asks ${name} to drink water and rest for ten minutes.`,
            question: 'What problem does the student have?',
            answer: 'headache',
            choices: [{ id: 'headache', text: 'A headache' }, { id: 'toothache', text: 'A toothache' }, { id: 'cold', text: 'A cold' }],
            hint: '找 has a...',
            explain: '文章說 has a headache。'
          };
        }
      },
      {
        topic: 'health',
        title: 'Sports Day',
        make(name, day) {
          return {
            passage: `${name} runs too fast on Sports Day. ${name} feels tired and sits under a tree.`,
            question: 'How does the student feel?',
            answer: 'tired',
            choices: [{ id: 'angry', text: 'Angry' }, { id: 'tired', text: 'Tired' }, { id: 'hungry', text: 'Hungry' }],
            hint: '找 feels 後面的感覺。',
            explain: '文章說 feels tired。'
          };
        }
      },
      {
        topic: 'places',
        title: 'Library Visit',
        make(name, day) {
          return {
            passage: `${name} visits the library on ${day}. ${name} borrows two books and reads one story there.`,
            question: 'How many books does the student borrow?',
            answer: 'two',
            choices: [{ id: 'one', text: 'One' }, { id: 'two', text: 'Two' }, { id: 'three', text: 'Three' }],
            hint: '找 borrows 後面的數字。',
            explain: '文章說 borrows two books。'
          };
        }
      },
      {
        topic: 'places',
        title: 'Market Trip',
        make(name, day) {
          return {
            passage: `${name} goes to the market with Grandpa. They buy tomatoes, eggs, and a small cake.`,
            question: 'Who goes to the market with the student?',
            answer: 'grandpa',
            choices: [{ id: 'mom', text: 'Mom' }, { id: 'grandpa', text: 'Grandpa' }, { id: 'friend', text: 'A friend' }],
            hint: '找 with 後面的人。',
            explain: '文章說 with Grandpa。'
          };
        }
      }
    ];

    const GENERATED_WORDS = [
      ['apple', '蘋果', 'food', 'ap-ple'], ['banana', '香蕉', 'food', 'ba-na-na'], ['orange', '柳橙', 'food', 'or-ange'],
      ['bread', '麵包', 'food', 'bread'], ['water', '水', 'food', 'wa-ter'], ['juice', '果汁', 'food', 'juice'],
      ['sandwich', '三明治', 'food', 'sand-wich'], ['tomato', '番茄', 'food', 'to-ma-to'], ['egg', '蛋', 'food', 'egg'],
      ['dinner', '晚餐', 'food', 'din-ner'], ['lunch', '午餐', 'food', 'lunch'], ['hungry', '餓的', 'food', 'hun-gry'],
      ['teacher', '老師', 'school', 'teach-er'], ['student', '學生', 'school', 'stu-dent'], ['notebook', '筆記本', 'school', 'note-book'],
      ['pencil', '鉛筆', 'school', 'pen-cil'], ['eraser', '橡皮擦', 'school', 'e-ras-er'], ['desk', '書桌', 'school', 'desk'],
      ['chair', '椅子', 'school', 'chair'], ['board', '黑板', 'school', 'board'], ['homework', '作業', 'school', 'home-work'],
      ['lesson', '課程', 'school', 'les-son'], ['answer', '答案', 'school', 'an-swer'], ['question', '問題', 'school', 'ques-tion'],
      ['family', '家人', 'home', 'fam-i-ly'], ['mother', '母親', 'home', 'moth-er'], ['father', '父親', 'home', 'fa-ther'],
      ['sister', '姊妹', 'home', 'sis-ter'], ['brother', '兄弟', 'home', 'broth-er'], ['kitchen', '廚房', 'home', 'kitch-en'],
      ['table', '桌子', 'home', 'ta-ble'], ['window', '窗戶', 'home', 'win-dow'], ['door', '門', 'home', 'door'],
      ['garden', '花園', 'home', 'gar-den'], ['evening', '傍晚', 'home', 'eve-ning'], ['morning', '早晨', 'home', 'morn-ing'],
      ['sunny', '晴朗的', 'weather', 'sun-ny'], ['windy', '有風的', 'weather', 'wind-y'], ['hot', '熱的', 'weather', 'hot'],
      ['cold', '冷的', 'weather', 'cold'], ['warm', '溫暖的', 'weather', 'warm'], ['cool', '涼爽的', 'weather', 'cool'],
      ['storm', '暴風雨', 'weather', 'storm'], ['jacket', '外套', 'weather', 'jack-et'], ['hat', '帽子', 'weather', 'hat'],
      ['boots', '靴子', 'weather', 'boots'], ['outside', '在外面', 'weather', 'out-side'], ['inside', '在裡面', 'weather', 'in-side'],
      ['doctor', '醫生', 'health', 'doc-tor'], ['nurse', '護理師', 'health', 'nurse'], ['fever', '發燒', 'health', 'fe-ver'],
      ['cough', '咳嗽', 'health', 'cough'], ['tired', '疲倦的', 'health', 'tired'], ['rest', '休息', 'health', 'rest'],
      ['hand', '手', 'health', 'hand'], ['foot', '腳', 'health', 'foot'], ['eye', '眼睛', 'health', 'eye'],
      ['ear', '耳朵', 'health', 'ear'], ['healthy', '健康的', 'health', 'health-y'], ['sad', '難過的', 'health', 'sad'],
      ['happy', '快樂的', 'health', 'hap-py'], ['library', '圖書館', 'places', 'li-brar-y'], ['classroom', '教室', 'places', 'class-room'],
      ['playground', '操場', 'places', 'play-ground'], ['zoo', '動物園', 'places', 'zoo'], ['shop', '商店', 'places', 'shop'],
      ['hospital', '醫院', 'places', 'hos-pi-tal'], ['museum', '博物館', 'places', 'mu-se-um'], ['restaurant', '餐廳', 'places', 'res-tau-rant'],
      ['street', '街道', 'places', 'street'], ['bus', '公車', 'places', 'bus'], ['train', '火車', 'places', 'train'],
      ['ticket', '票', 'places', 'tick-et'], ['borrow', '借用', 'school', 'bor-row'], ['quiet', '安靜的', 'school', 'qui-et'],
      ['listen', '聽', 'school', 'lis-ten'], ['speak', '說', 'school', 'speak'], ['write', '寫', 'school', 'write'],
      ['draw', '畫', 'school', 'draw'], ['jump', '跳', 'health', 'jump'], ['walk', '走路', 'health', 'walk'],
      ['clean', '打掃', 'home', 'clean'], ['cook', '煮飯', 'home', 'cook'], ['wash', '清洗', 'home', 'wash'],
      ['read', '閱讀', 'school', 'read'], ['bring', '帶來', 'school', 'bring'], ['visit', '拜訪', 'places', 'vis-it'],
      ['picnic', '野餐', 'places', 'pic-nic'], ['movie', '電影', 'home', 'mov-ie'], ['music', '音樂', 'school', 'mu-sic']
    ];

    const VOCAB_ADJECTIVES = [
      ['big', '大的'], ['small', '小的'], ['red', '紅色的'], ['blue', '藍色的'], ['green', '綠色的'],
      ['yellow', '黃色的'], ['new', '新的'], ['old', '舊的'], ['clean', '乾淨的'], ['dirty', '髒的'],
      ['happy', '快樂的'], ['sad', '難過的'], ['fast', '快的'], ['slow', '慢的'], ['long', '長的'],
      ['short', '短的'], ['hot', '熱的'], ['cold', '冷的'], ['warm', '溫暖的'], ['cool', '涼爽的']
    ];
    const VOCAB_NOUNS = [
      ['book', '書', 'school'], ['bag', '書包', 'school'], ['desk', '書桌', 'school'], ['chair', '椅子', 'school'],
      ['pencil', '鉛筆', 'school'], ['ruler', '尺', 'school'], ['notebook', '筆記本', 'school'], ['classroom', '教室', 'school'],
      ['apple', '蘋果', 'food'], ['banana', '香蕉', 'food'], ['orange', '柳橙', 'food'], ['cake', '蛋糕', 'food'],
      ['sandwich', '三明治', 'food'], ['egg', '蛋', 'food'], ['bread', '麵包', 'food'], ['lunch box', '便當盒', 'food'],
      ['room', '房間', 'home'], ['table', '桌子', 'home'], ['window', '窗戶', 'home'], ['door', '門', 'home'],
      ['kitchen', '廚房', 'home'], ['garden', '花園', 'home'], ['bed', '床', 'home'], ['cup', '杯子', 'home'],
      ['hat', '帽子', 'weather'], ['jacket', '外套', 'weather'], ['umbrella', '雨傘', 'weather'], ['boots', '靴子', 'weather'],
      ['day', '日子', 'weather'], ['morning', '早晨', 'weather'], ['sky', '天空', 'weather'], ['cloud', '雲', 'weather'],
      ['hand', '手', 'health'], ['foot', '腳', 'health'], ['eye', '眼睛', 'health'], ['ear', '耳朵', 'health'],
      ['doctor', '醫生', 'health'], ['nurse', '護理師', 'health'], ['medicine', '藥', 'health'], ['water bottle', '水壺', 'health'],
      ['park', '公園', 'places'], ['library', '圖書館', 'places'], ['market', '市場', 'places'], ['zoo', '動物園', 'places'],
      ['shop', '商店', 'places'], ['station', '車站', 'places'], ['street', '街道', 'places'], ['bus', '公車', 'places']
    ];
    const VOCAB_ACTIONS = [
      ['read', '閱讀'], ['write', '寫'], ['draw', '畫'], ['listen to', '聽'], ['speak to', '和...說話'],
      ['bring', '帶來'], ['borrow', '借用'], ['clean', '打掃'], ['wash', '清洗'], ['cook', '煮'],
      ['eat', '吃'], ['drink', '喝'], ['buy', '買'], ['visit', '參觀'], ['walk to', '走去'],
      ['run in', '在...跑步'], ['play with', '和...玩'], ['look at', '看著'], ['put away', '收好'], ['take', '拿']
    ];

    const VALID_VOCAB_ITEMS = [
      { word: 'apple', answer: '蘋果', topic: 'food', phonics: 'ap-ple', difficulty: 'easy', pos: 'noun' },
      { word: 'banana', answer: '香蕉', topic: 'food', phonics: 'ba-na-na', difficulty: 'easy', pos: 'noun' },
      { word: 'orange', answer: '柳橙', topic: 'food', phonics: 'or-ange', difficulty: 'easy', pos: 'noun' },
      { word: 'bread', answer: '麵包', topic: 'food', phonics: 'bread', difficulty: 'easy', pos: 'noun' },
      { word: 'water', answer: '水', topic: 'food', phonics: 'wa-ter', difficulty: 'easy', pos: 'noun' },
      { word: 'juice', answer: '果汁', topic: 'food', phonics: 'juice', difficulty: 'easy', pos: 'noun' },
      { word: 'sandwich', answer: '三明治', topic: 'food', phonics: 'sand-wich', difficulty: 'easy', pos: 'noun' },
      { word: 'tomato', answer: '番茄', topic: 'food', phonics: 'to-ma-to', difficulty: 'easy', pos: 'noun' },
      { word: 'egg', answer: '蛋', topic: 'food', phonics: 'egg', difficulty: 'easy', pos: 'noun' },
      { word: 'breakfast', answer: '早餐', topic: 'food', phonics: 'break-fast', difficulty: 'easy', pos: 'noun' },
      { word: 'lunch', answer: '午餐', topic: 'food', phonics: 'lunch', difficulty: 'easy', pos: 'noun' },
      { word: 'dinner', answer: '晚餐', topic: 'food', phonics: 'din-ner', difficulty: 'easy', pos: 'noun' },
      { word: 'hungry', answer: '餓的', topic: 'food', phonics: 'hun-gry', difficulty: 'easy', pos: 'adjective' },
      { word: 'thirsty', answer: '口渴的', topic: 'food', phonics: 'thirs-ty', difficulty: 'easy', pos: 'adjective' },
      { word: 'teacher', answer: '老師', topic: 'school', phonics: 'teach-er', difficulty: 'easy', pos: 'noun' },
      { word: 'student', answer: '學生', topic: 'school', phonics: 'stu-dent', difficulty: 'easy', pos: 'noun' },
      { word: 'classmate', answer: '同學', topic: 'school', phonics: 'class-mate', difficulty: 'easy', pos: 'noun' },
      { word: 'book', answer: '書', topic: 'school', phonics: 'book', difficulty: 'easy', pos: 'noun' },
      { word: 'notebook', answer: '筆記本', topic: 'school', phonics: 'note-book', difficulty: 'easy', pos: 'noun' },
      { word: 'pencil', answer: '鉛筆', topic: 'school', phonics: 'pen-cil', difficulty: 'easy', pos: 'noun' },
      { word: 'eraser', answer: '橡皮擦', topic: 'school', phonics: 'e-ras-er', difficulty: 'easy', pos: 'noun' },
      { word: 'ruler', answer: '尺', topic: 'school', phonics: 'ru-ler', difficulty: 'easy', pos: 'noun' },
      { word: 'desk', answer: '書桌', topic: 'school', phonics: 'desk', difficulty: 'easy', pos: 'noun' },
      { word: 'chair', answer: '椅子', topic: 'school', phonics: 'chair', difficulty: 'easy', pos: 'noun' },
      { word: 'board', answer: '黑板', topic: 'school', phonics: 'board', difficulty: 'easy', pos: 'noun' },
      { word: 'homework', answer: '作業', topic: 'school', phonics: 'home-work', difficulty: 'easy', pos: 'noun' },
      { word: 'question', answer: '問題', topic: 'school', phonics: 'ques-tion', difficulty: 'easy', pos: 'noun' },
      { word: 'answer', answer: '答案', topic: 'school', phonics: 'an-swer', difficulty: 'easy', pos: 'noun' },
      { word: 'family', answer: '家人', topic: 'home', phonics: 'fam-i-ly', difficulty: 'easy', pos: 'noun' },
      { word: 'mother', answer: '母親', topic: 'home', phonics: 'moth-er', difficulty: 'easy', pos: 'noun' },
      { word: 'father', answer: '父親', topic: 'home', phonics: 'fa-ther', difficulty: 'easy', pos: 'noun' },
      { word: 'sister', answer: '姊妹', topic: 'home', phonics: 'sis-ter', difficulty: 'easy', pos: 'noun' },
      { word: 'brother', answer: '兄弟', topic: 'home', phonics: 'broth-er', difficulty: 'easy', pos: 'noun' },
      { word: 'kitchen', answer: '廚房', topic: 'home', phonics: 'kitch-en', difficulty: 'easy', pos: 'noun' },
      { word: 'bedroom', answer: '臥室', topic: 'home', phonics: 'bed-room', difficulty: 'easy', pos: 'noun' },
      { word: 'table', answer: '桌子', topic: 'home', phonics: 'ta-ble', difficulty: 'easy', pos: 'noun' },
      { word: 'window', answer: '窗戶', topic: 'home', phonics: 'win-dow', difficulty: 'easy', pos: 'noun' },
      { word: 'door', answer: '門', topic: 'home', phonics: 'door', difficulty: 'easy', pos: 'noun' },
      { word: 'garden', answer: '花園', topic: 'home', phonics: 'gar-den', difficulty: 'easy', pos: 'noun' },
      { word: 'morning', answer: '早上', topic: 'home', phonics: 'morn-ing', difficulty: 'easy', pos: 'noun' },
      { word: 'evening', answer: '晚上', topic: 'home', phonics: 'eve-ning', difficulty: 'easy', pos: 'noun' },
      { word: 'sunny', answer: '晴朗的', topic: 'weather', phonics: 'sun-ny', difficulty: 'easy', pos: 'adjective' },
      { word: 'rainy', answer: '下雨的', topic: 'weather', phonics: 'rain-y', difficulty: 'easy', pos: 'adjective' },
      { word: 'windy', answer: '有風的', topic: 'weather', phonics: 'wind-y', difficulty: 'easy', pos: 'adjective' },
      { word: 'cloudy', answer: '多雲的', topic: 'weather', phonics: 'cloud-y', difficulty: 'easy', pos: 'adjective' },
      { word: 'hot', answer: '熱的', topic: 'weather', phonics: 'hot', difficulty: 'easy', pos: 'adjective' },
      { word: 'cold', answer: '冷的', topic: 'weather', phonics: 'cold', difficulty: 'easy', pos: 'adjective' },
      { word: 'warm', answer: '溫暖的', topic: 'weather', phonics: 'warm', difficulty: 'easy', pos: 'adjective' },
      { word: 'cool', answer: '涼爽的', topic: 'weather', phonics: 'cool', difficulty: 'easy', pos: 'adjective' },
      { word: 'umbrella', answer: '雨傘', topic: 'weather', phonics: 'um-brel-la', difficulty: 'easy', pos: 'noun' },
      { word: 'jacket', answer: '夾克', topic: 'weather', phonics: 'jack-et', difficulty: 'easy', pos: 'noun' },
      { word: 'hat', answer: '帽子', topic: 'weather', phonics: 'hat', difficulty: 'easy', pos: 'noun' },
      { word: 'boots', answer: '靴子', topic: 'weather', phonics: 'boots', difficulty: 'easy', pos: 'noun' },
      { word: 'doctor', answer: '醫生', topic: 'health', phonics: 'doc-tor', difficulty: 'easy', pos: 'noun' },
      { word: 'nurse', answer: '護理師', topic: 'health', phonics: 'nurse', difficulty: 'easy', pos: 'noun' },
      { word: 'fever', answer: '發燒', topic: 'health', phonics: 'fe-ver', difficulty: 'easy', pos: 'noun' },
      { word: 'cough', answer: '咳嗽', topic: 'health', phonics: 'cough', difficulty: 'easy', pos: 'noun' },
      { word: 'headache', answer: '頭痛', topic: 'health', phonics: 'head-ache', difficulty: 'easy', pos: 'noun' },
      { word: 'toothache', answer: '牙痛', topic: 'health', phonics: 'tooth-ache', difficulty: 'easy', pos: 'noun' },
      { word: 'medicine', answer: '藥', topic: 'health', phonics: 'med-i-cine', difficulty: 'easy', pos: 'noun' },
      { word: 'tired', answer: '累的', topic: 'health', phonics: 'tired', difficulty: 'easy', pos: 'adjective' },
      { word: 'healthy', answer: '健康的', topic: 'health', phonics: 'health-y', difficulty: 'easy', pos: 'adjective' },
      { word: 'happy', answer: '開心的', topic: 'health', phonics: 'hap-py', difficulty: 'easy', pos: 'adjective' },
      { word: 'sad', answer: '難過的', topic: 'health', phonics: 'sad', difficulty: 'easy', pos: 'adjective' },
      { word: 'park', answer: '公園', topic: 'places', phonics: 'park', difficulty: 'easy', pos: 'noun' },
      { word: 'library', answer: '圖書館', topic: 'places', phonics: 'li-brar-y', difficulty: 'easy', pos: 'noun' },
      { word: 'market', answer: '市場', topic: 'places', phonics: 'mar-ket', difficulty: 'easy', pos: 'noun' },
      { word: 'zoo', answer: '動物園', topic: 'places', phonics: 'zoo', difficulty: 'easy', pos: 'noun' },
      { word: 'shop', answer: '商店', topic: 'places', phonics: 'shop', difficulty: 'easy', pos: 'noun' },
      { word: 'hospital', answer: '醫院', topic: 'places', phonics: 'hos-pi-tal', difficulty: 'easy', pos: 'noun' },
      { word: 'museum', answer: '博物館', topic: 'places', phonics: 'mu-se-um', difficulty: 'easy', pos: 'noun' },
      { word: 'restaurant', answer: '餐廳', topic: 'places', phonics: 'res-tau-rant', difficulty: 'easy', pos: 'noun' },
      { word: 'station', answer: '車站', topic: 'places', phonics: 'sta-tion', difficulty: 'easy', pos: 'noun' },
      { word: 'street', answer: '街道', topic: 'places', phonics: 'street', difficulty: 'easy', pos: 'noun' },

      { word: 'red apple', answer: '紅色的蘋果', topic: 'food', phonics: 'red ap-ple', difficulty: 'medium', pos: 'phrase' },
      { word: 'green apple', answer: '綠色的蘋果', topic: 'food', phonics: 'green ap-ple', difficulty: 'medium', pos: 'phrase' },
      { word: 'yellow banana', answer: '黃色的香蕉', topic: 'food', phonics: 'yel-low ba-na-na', difficulty: 'medium', pos: 'phrase' },
      { word: 'hot soup', answer: '熱湯', topic: 'food', phonics: 'hot soup', difficulty: 'medium', pos: 'phrase' },
      { word: 'cold water', answer: '冰水', topic: 'food', phonics: 'cold wa-ter', difficulty: 'medium', pos: 'phrase' },
      { word: 'warm milk', answer: '溫牛奶', topic: 'food', phonics: 'warm milk', difficulty: 'medium', pos: 'phrase' },
      { word: 'small cake', answer: '小蛋糕', topic: 'food', phonics: 'small cake', difficulty: 'medium', pos: 'phrase' },
      { word: 'big sandwich', answer: '大的三明治', topic: 'food', phonics: 'big sand-wich', difficulty: 'medium', pos: 'phrase' },
      { word: 'new notebook', answer: '新的筆記本', topic: 'school', phonics: 'new note-book', difficulty: 'medium', pos: 'phrase' },
      { word: 'blue bag', answer: '藍色的書包', topic: 'school', phonics: 'blue bag', difficulty: 'medium', pos: 'phrase' },
      { word: 'green book', answer: '綠色的書', topic: 'school', phonics: 'green book', difficulty: 'medium', pos: 'phrase' },
      { word: 'yellow pencil', answer: '黃色的鉛筆', topic: 'school', phonics: 'yel-low pen-cil', difficulty: 'medium', pos: 'phrase' },
      { word: 'long ruler', answer: '長尺', topic: 'school', phonics: 'long ru-ler', difficulty: 'medium', pos: 'phrase' },
      { word: 'short pencil', answer: '短鉛筆', topic: 'school', phonics: 'short pen-cil', difficulty: 'medium', pos: 'phrase' },
      { word: 'quiet classmate', answer: '安靜的同學', topic: 'school', phonics: 'qui-et class-mate', difficulty: 'medium', pos: 'phrase' },
      { word: 'clean desk', answer: '乾淨的書桌', topic: 'school', phonics: 'clean desk', difficulty: 'medium', pos: 'phrase' },
      { word: 'clean room', answer: '乾淨的房間', topic: 'home', phonics: 'clean room', difficulty: 'medium', pos: 'phrase' },
      { word: 'dirty cup', answer: '髒杯子', topic: 'home', phonics: 'dir-ty cup', difficulty: 'medium', pos: 'phrase' },
      { word: 'small kitchen', answer: '小廚房', topic: 'home', phonics: 'small kitch-en', difficulty: 'medium', pos: 'phrase' },
      { word: 'big garden', answer: '大花園', topic: 'home', phonics: 'big gar-den', difficulty: 'medium', pos: 'phrase' },
      { word: 'open door', answer: '開著的門', topic: 'home', phonics: 'o-pen door', difficulty: 'medium', pos: 'phrase' },
      { word: 'closed window', answer: '關著的窗戶', topic: 'home', phonics: 'closed win-dow', difficulty: 'medium', pos: 'phrase' },
      { word: 'rainy day', answer: '下雨天', topic: 'weather', phonics: 'rain-y day', difficulty: 'medium', pos: 'phrase' },
      { word: 'sunny day', answer: '晴天', topic: 'weather', phonics: 'sun-ny day', difficulty: 'medium', pos: 'phrase' },
      { word: 'cloudy morning', answer: '多雲的早上', topic: 'weather', phonics: 'cloud-y morn-ing', difficulty: 'medium', pos: 'phrase' },
      { word: 'windy afternoon', answer: '有風的下午', topic: 'weather', phonics: 'wind-y af-ter-noon', difficulty: 'medium', pos: 'phrase' },
      { word: 'warm jacket', answer: '保暖的夾克', topic: 'weather', phonics: 'warm jack-et', difficulty: 'medium', pos: 'phrase' },
      { word: 'cool evening', answer: '涼爽的晚上', topic: 'weather', phonics: 'cool eve-ning', difficulty: 'medium', pos: 'phrase' },
      { word: 'sick student', answer: '生病的學生', topic: 'health', phonics: 'sick stu-dent', difficulty: 'medium', pos: 'phrase' },
      { word: 'warm water', answer: '溫水', topic: 'health', phonics: 'warm wa-ter', difficulty: 'medium', pos: 'phrase' },
      { word: 'clean hands', answer: '乾淨的手', topic: 'health', phonics: 'clean hands', difficulty: 'medium', pos: 'phrase' },
      { word: 'healthy food', answer: '健康的食物', topic: 'health', phonics: 'health-y food', difficulty: 'medium', pos: 'phrase' },
      { word: 'tired doctor', answer: '疲累的醫生', topic: 'health', phonics: 'tired doc-tor', difficulty: 'medium', pos: 'phrase' },
      { word: 'happy nurse', answer: '開心的護理師', topic: 'health', phonics: 'hap-py nurse', difficulty: 'medium', pos: 'phrase' },
      { word: 'busy street', answer: '繁忙的街道', topic: 'places', phonics: 'bus-y street', difficulty: 'medium', pos: 'phrase' },
      { word: 'quiet library', answer: '安靜的圖書館', topic: 'places', phonics: 'qui-et li-brar-y', difficulty: 'medium', pos: 'phrase' },
      { word: 'big hospital', answer: '大醫院', topic: 'places', phonics: 'big hos-pi-tal', difficulty: 'medium', pos: 'phrase' },
      { word: 'small shop', answer: '小商店', topic: 'places', phonics: 'small shop', difficulty: 'medium', pos: 'phrase' },
      { word: 'new restaurant', answer: '新的餐廳', topic: 'places', phonics: 'new res-tau-rant', difficulty: 'medium', pos: 'phrase' },
      { word: 'old museum', answer: '舊博物館', topic: 'places', phonics: 'old mu-se-um', difficulty: 'medium', pos: 'phrase' },

      { word: 'read a book', answer: '讀一本書', topic: 'school', phonics: 'read a book', difficulty: 'hard', pos: 'phrase' },
      { word: 'write a sentence', answer: '寫一個句子', topic: 'school', phonics: 'write a sen-tence', difficulty: 'hard', pos: 'phrase' },
      { word: 'draw a picture', answer: '畫一張圖', topic: 'school', phonics: 'draw a pic-ture', difficulty: 'hard', pos: 'phrase' },
      { word: 'listen to music', answer: '聽音樂', topic: 'school', phonics: 'lis-ten to mu-sic', difficulty: 'hard', pos: 'phrase' },
      { word: 'speak English', answer: '說英文', topic: 'school', phonics: 'speak Eng-lish', difficulty: 'hard', pos: 'phrase' },
      { word: 'bring a notebook', answer: '帶一本筆記本', topic: 'school', phonics: 'bring a note-book', difficulty: 'hard', pos: 'phrase' },
      { word: 'borrow a book', answer: '借一本書', topic: 'school', phonics: 'bor-row a book', difficulty: 'hard', pos: 'phrase' },
      { word: 'answer a question', answer: '回答一個問題', topic: 'school', phonics: 'an-swer a ques-tion', difficulty: 'hard', pos: 'phrase' },
      { word: 'ask a question', answer: '問一個問題', topic: 'school', phonics: 'ask a ques-tion', difficulty: 'hard', pos: 'phrase' },
      { word: 'open your book', answer: '打開你的書', topic: 'school', phonics: 'o-pen your book', difficulty: 'hard', pos: 'phrase' },
      { word: 'cook dinner', answer: '煮晚餐', topic: 'food', phonics: 'cook din-ner', difficulty: 'hard', pos: 'phrase' },
      { word: 'eat breakfast', answer: '吃早餐', topic: 'food', phonics: 'eat break-fast', difficulty: 'hard', pos: 'phrase' },
      { word: 'drink water', answer: '喝水', topic: 'food', phonics: 'drink wa-ter', difficulty: 'hard', pos: 'phrase' },
      { word: 'buy a cake', answer: '買一個蛋糕', topic: 'food', phonics: 'buy a cake', difficulty: 'hard', pos: 'phrase' },
      { word: 'make a sandwich', answer: '做一個三明治', topic: 'food', phonics: 'make a sand-wich', difficulty: 'hard', pos: 'phrase' },
      { word: 'wash an apple', answer: '洗一顆蘋果', topic: 'food', phonics: 'wash an ap-ple', difficulty: 'hard', pos: 'phrase' },
      { word: 'clean the room', answer: '打掃房間', topic: 'home', phonics: 'clean the room', difficulty: 'hard', pos: 'phrase' },
      { word: 'wash your hands', answer: '洗手', topic: 'home', phonics: 'wash your hands', difficulty: 'hard', pos: 'phrase' },
      { word: 'close the window', answer: '關窗戶', topic: 'home', phonics: 'close the win-dow', difficulty: 'hard', pos: 'phrase' },
      { word: 'open the door', answer: '開門', topic: 'home', phonics: 'o-pen the door', difficulty: 'hard', pos: 'phrase' },
      { word: 'help your mother', answer: '幫助你的媽媽', topic: 'home', phonics: 'help your moth-er', difficulty: 'hard', pos: 'phrase' },
      { word: 'watch TV', answer: '看電視', topic: 'home', phonics: 'watch T V', difficulty: 'hard', pos: 'phrase' },
      { word: 'put away your bag', answer: '收好你的書包', topic: 'home', phonics: 'put a-way your bag', difficulty: 'hard', pos: 'phrase' },
      { word: 'take an umbrella', answer: '帶一把雨傘', topic: 'weather', phonics: 'take an um-brel-la', difficulty: 'hard', pos: 'phrase' },
      { word: 'wear a jacket', answer: '穿夾克', topic: 'weather', phonics: 'wear a jack-et', difficulty: 'hard', pos: 'phrase' },
      { word: 'put on boots', answer: '穿上靴子', topic: 'weather', phonics: 'put on boots', difficulty: 'hard', pos: 'phrase' },
      { word: 'look at the sky', answer: '看天空', topic: 'weather', phonics: 'look at the sky', difficulty: 'hard', pos: 'phrase' },
      { word: 'stay inside', answer: '待在室內', topic: 'weather', phonics: 'stay in-side', difficulty: 'hard', pos: 'phrase' },
      { word: 'see a doctor', answer: '看醫生', topic: 'health', phonics: 'see a doc-tor', difficulty: 'hard', pos: 'phrase' },
      { word: 'take medicine', answer: '吃藥', topic: 'health', phonics: 'take med-i-cine', difficulty: 'hard', pos: 'phrase' },
      { word: 'drink warm water', answer: '喝溫水', topic: 'health', phonics: 'drink warm wa-ter', difficulty: 'hard', pos: 'phrase' },
      { word: 'get some rest', answer: '休息一下', topic: 'health', phonics: 'get some rest', difficulty: 'hard', pos: 'phrase' },
      { word: 'brush your teeth', answer: '刷牙', topic: 'health', phonics: 'brush your teeth', difficulty: 'hard', pos: 'phrase' },
      { word: 'wash your face', answer: '洗臉', topic: 'health', phonics: 'wash your face', difficulty: 'hard', pos: 'phrase' },
      { word: 'go to the park', answer: '去公園', topic: 'places', phonics: 'go to the park', difficulty: 'hard', pos: 'phrase' },
      { word: 'visit the zoo', answer: '參觀動物園', topic: 'places', phonics: 'vis-it the zoo', difficulty: 'hard', pos: 'phrase' },
      { word: 'walk to school', answer: '走路去學校', topic: 'places', phonics: 'walk to school', difficulty: 'hard', pos: 'phrase' },
      { word: 'run in the park', answer: '在公園跑步', topic: 'places', phonics: 'run in the park', difficulty: 'hard', pos: 'phrase' },
      { word: 'buy a ticket', answer: '買票', topic: 'places', phonics: 'buy a tick-et', difficulty: 'hard', pos: 'phrase' },
      { word: 'wait at the station', answer: '在車站等', topic: 'places', phonics: 'wait at the sta-tion', difficulty: 'hard', pos: 'phrase' },
      { word: 'eat at a restaurant', answer: '在餐廳吃飯', topic: 'places', phonics: 'eat at a res-tau-rant', difficulty: 'hard', pos: 'phrase' }
    ];

    const VOCAB_ITEMS_BY_DIFFICULTY = {
      easy: VALID_VOCAB_ITEMS.filter((item) => item.difficulty === 'easy'),
      medium: VALID_VOCAB_ITEMS.filter((item) => item.difficulty === 'medium'),
      hard: VALID_VOCAB_ITEMS.filter((item) => item.difficulty === 'hard')
    };

    function makePictureChoices(answerScene, index, topic = 'all') {
      const answerConfig = SCENE_MAP[answerScene];
      const scenePool = LISTENING_SCENES.length
        ? LISTENING_SCENES
        : Object.keys(SCENE_LABELS).map((id) => ({ id, topic: 'all' }));
      const primaryDistractors = scenePool.filter((item) => {
        if (item.id === answerScene) return false;
        if (topic !== 'all' && item.topic !== topic) return false;
        if (!answerConfig) return true;
        return item.action !== answerConfig.action && item.object !== answerConfig.object;
      });
      const secondaryDistractors = scenePool.filter((item) => {
        if (item.id === answerScene) return false;
        if (topic !== 'all' && item.topic !== topic) return false;
        return true;
      });
      const fallbackDistractors = scenePool.filter((item) => item.id !== answerScene);
      const source = primaryDistractors.length >= 2
        ? primaryDistractors
        : (secondaryDistractors.length >= 2 ? secondaryDistractors : fallbackDistractors);
      const first = source[index % source.length].id;
      const second = source[(index + 7) % source.length].id;
      return [answerScene, first, second].map((scene) => ({
        id: scene,
        label: SCENE_LABELS[scene],
        scene
      }));
    }

    function getGeneratedDifficulty(index) {
      const bucket = index % 12;
      if (bucket < 5) return 'easy';
      if (bucket < 9) return 'medium';
      return 'hard';
    }

    function makeListeningAudio(name, pattern, timePhrase, placePhrase, difficulty) {
      const hasTime = /\b(after|before|at seven|at eight|at nine|in the morning|in the afternoon|on Monday|on Tuesday|on Wednesday|on Thursday|on Friday|every morning|for breakfast|for lunch|for dinner)\b/i.test(pattern.phrase);
      const hasPlace = /\b(in class|in the classroom|at home|in the kitchen|in the park|at the market|at the station|at the restaurant|at the library|on the playground|in the bedroom|in the living room)\b/i.test(pattern.phrase);
      const details = [];
      if (!hasTime) details.push(timePhrase);
      if (difficulty === 'hard' && !hasPlace) details.push(placePhrase);
      return `${name} ${pattern.phrase}${details.length ? ` ${details.join(' ')}` : ''}.`;
    }

    function addGeneratedListeningQuestions() {
      let index = 0;
      while (BANK.listening.length < TARGET_QUESTIONS_PER_MODE) {
        const pattern = LISTENING_PATTERNS[index % LISTENING_PATTERNS.length];
        const name = STUDENT_NAMES[index % STUDENT_NAMES.length];
        const timePhrase = TIME_PHRASES[Math.floor(index / LISTENING_PATTERNS.length) % TIME_PHRASES.length];
        const placePhrase = PLACE_PHRASES[Math.floor(index / (LISTENING_PATTERNS.length * TIME_PHRASES.length)) % PLACE_PHRASES.length];
        const difficulty = pattern.difficulty || getGeneratedDifficulty(index);
        const topic = pattern.topic;
        const scene = pattern.id;
        BANK.listening.push({
          level: 'kids',
          difficulty,
          topic,
          title: `Daily Listening ${index + 1}`,
          prompt: 'Listen and choose the picture.',
          audio: makeListeningAudio(name, pattern, timePhrase, placePhrase, difficulty),
          answer: scene,
          hint: pattern.hint,
          explain: pattern.explain,
          choices: makePictureChoices(scene, index, topic)
        });
        index += 1;
      }
    }

    function addGeneratedReadingQuestions() {
      let index = 0;
      while (BANK.reading.length < TARGET_QUESTIONS_PER_MODE) {
        const pattern = READING_PATTERNS[index % READING_PATTERNS.length];
        const name = STUDENT_NAMES[index % STUDENT_NAMES.length];
        const day = DAYS[index % DAYS.length];
        const difficulty = getGeneratedDifficulty(index);
        const made = pattern.make(name, day);
        const detailPool = READING_DETAILS_BY_TITLE[pattern.title] || [];
        const detail = detailPool[Math.floor(index / READING_PATTERNS.length) % detailPool.length] || '';
        BANK.reading.push({
          level: 'kids',
          difficulty,
          topic: pattern.topic,
          title: `${pattern.title} ${index + 1}`,
          passage: difficulty === 'easy' || !detail ? made.passage : `${made.passage} ${detail}`,
          question: made.question,
          answer: made.answer,
          hint: made.hint,
          explain: made.explain,
          choices: made.choices
        });
        index += 1;
      }
    }

    function makeGeneratedVocabItem(index) {
      const difficulty = getGeneratedDifficulty(index);
      if (difficulty === 'easy' && index < GENERATED_WORDS.length) {
        const [word, answer, topic, phonics] = GENERATED_WORDS[index];
        return { word, answer, topic, phonics, difficulty };
      }

      if (difficulty !== 'hard') {
        const adjective = VOCAB_ADJECTIVES[index % VOCAB_ADJECTIVES.length];
        const noun = VOCAB_NOUNS[Math.floor(index / VOCAB_ADJECTIVES.length) % VOCAB_NOUNS.length];
        return {
          word: `${adjective[0]} ${noun[0]}`,
          answer: `${adjective[1]}${noun[1]}`,
          topic: noun[2],
          phonics: `${adjective[0]} ${noun[0]}`,
          difficulty
        };
      }

      const action = VOCAB_ACTIONS[index % VOCAB_ACTIONS.length];
      const noun = VOCAB_NOUNS[Math.floor(index / VOCAB_ACTIONS.length) % VOCAB_NOUNS.length];
      return {
        word: `${action[0]} ${noun[0]}`,
        answer: `${action[1]}${noun[1]}`,
        topic: noun[2],
        phonics: `${action[0]} ${noun[0]}`,
        difficulty
      };
    }

    function addGeneratedVocabQuestions() {
      let index = 0;
      while (BANK.vocab.length < TARGET_QUESTIONS_PER_MODE) {
        const item = makeGeneratedVocabItem(index);
        const first = makeGeneratedVocabItem(index + 137).answer;
        const second = makeGeneratedVocabItem(index + 293).answer;
        BANK.vocab.push({
          level: 'kids',
          difficulty: item.difficulty,
          topic: item.topic,
          title: `Word Practice ${index + 1}`,
          word: item.word,
          phonics: item.phonics,
          answer: item.answer,
          hint: `想想 ${item.word} 在生活或學校情境中的意思。`,
          explain: `${item.word} 的意思是「${item.answer}」。`,
          choices: [item.answer, first, second]
        });
        index += 1;
      }
    }

    function pickCuratedVocabItem(index) {
      const difficulty = getGeneratedDifficulty(index);
      const source = VOCAB_ITEMS_BY_DIFFICULTY[difficulty] || VALID_VOCAB_ITEMS;
      const round = Math.floor(index / source.length);
      const offset = (round * 7) % source.length;
      return source[(index + offset) % source.length];
    }

    function makeCuratedVocabChoices(item, index) {
      const sameTopic = VALID_VOCAB_ITEMS.filter((candidate) => (
        candidate.answer !== item.answer &&
        candidate.word !== item.word &&
        candidate.pos === item.pos &&
        candidate.difficulty === item.difficulty &&
        candidate.topic === item.topic
      ));
      const sameKind = VALID_VOCAB_ITEMS.filter((candidate) => (
        candidate.answer !== item.answer &&
        candidate.word !== item.word &&
        candidate.pos === item.pos &&
        candidate.difficulty === item.difficulty
      ));
      const fallback = VALID_VOCAB_ITEMS.filter((candidate) => (
        candidate.answer !== item.answer &&
        candidate.word !== item.word
      ));
      const pools = [sameTopic, sameKind, fallback];
      const choices = [item.answer];
      pools.forEach((pool) => {
        if (choices.length >= 3 || pool.length === 0) return;
        for (let step = 0; step < pool.length && choices.length < 3; step += 1) {
          const candidate = pool[(index + step) % pool.length].answer;
          if (!choices.includes(candidate)) choices.push(candidate);
        }
      });
      if (choices.length < 3) {
        throw new Error(`Not enough unique choices for vocab item: ${item.word}`);
      }
      return choices;
    }

    function addCuratedVocabQuestions() {
      let index = 0;
      while (BANK.vocab.length < TARGET_QUESTIONS_PER_MODE) {
        const item = pickCuratedVocabItem(index);
        BANK.vocab.push({
          level: 'kids',
          difficulty: item.difficulty,
          topic: item.topic,
          title: `Word Practice ${index + 1}`,
          word: item.word,
          phonics: item.phonics,
          answer: item.answer,
          hint: `${item.word} 是已審核的常用單字或自然片語。`,
          explain: `${item.word} 的意思是「${item.answer}」。`,
          choices: makeCuratedVocabChoices(item, index)
        });
        index += 1;
      }
    }

    function normalizeManualVocabQuestions() {
      BANK.vocab.forEach((item) => {
        if (!item.difficulty) item.difficulty = item.level === 'bridge' ? 'medium' : 'easy';
      });
    }

    addGeneratedListeningQuestions();
    addGeneratedReadingQuestions();
    normalizeManualVocabQuestions();
    addCuratedVocabQuestions();

    window.GEPT_QUESTIONS = {
      BANK,
      SCENE_LABELS,
      SCENE_MAP,
      LISTENING_SCENES,
      TARGET_QUESTIONS_PER_MODE
    };
})();
