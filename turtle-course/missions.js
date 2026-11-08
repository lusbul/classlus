const MISSIONS = [
  {
    "title": "Перші кроки дослідника",
    "tag": "Використовуємо бібліотеку Turtle мови Python",
    "story": "Експедиція починається. Черепашка має нанести на карту периметр дослідницької ділянки й повернутися до старту.",
    "theory": [
      [
        "Створіть дослідника",
        "import turtle підключає модуль, а t = turtle.Turtle() створює об’єкт. Команди виконуємо зверху вниз. Початковий напрям — праворуч."
      ],
      [
        "Рух і повороти",
        "forward(100) переміщує на 100 пікселів. left(90) повертає проти годинникової стрілки; right(90) — за нею. Поворот не переміщує черепашку."
      ],
      [
        "Шлях і переміщення",
        "Шлях — уся пройдена відстань. Переміщення — зміна положення від старту до фінішу. Після замкненого маршруту переміщення дорівнює нулю, а шлях — ні."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.shape(\"turtle\")\nt.color(\"#45d9b0\")\nt.pensize(3)\nt.forward(120)\nt.left(90)\nt.forward(80)\n# Допишіть ще дві сторони прямокутника\n\nturtle.done()",
    "task": "Завершіть прямокутний маршрут 120 × 80 пікселів. Масштаб: 10 пікселів = 1 метр. Обчисліть шлях у метрах і поясніть, чому переміщення дорівнює нулю.",
    "stretch": "Змініть масштаб на 5 пікселів = 1 метр. Не змінюючи код, поясніть, як змінилася реальна довжина маршруту.",
    "order": [
      "import turtle",
      "t = turtle.Turtle()",
      "t.forward(120)",
      "t.left(90)"
    ],
    "quiz": [
      {
        "q": "Периметр ділянки 120 × 80 пікселів за масштабу 10 пікселів = 1 метр — це…",
        "options": [
          "20 м",
          "40 м",
          "400 м"
        ],
        "a": 1
      },
      {
        "q": "Після повного обходу прямокутника переміщення дорівнює…",
        "options": [
          "40 м",
          "400 пікселів",
          "0"
        ],
        "a": 2
      }
    ],
    "explain": [
      "Шлях: 2 × (120 + 80) = 400 пікселів = 40 м.",
      "Фініш збігається зі стартом, тому переміщення дорівнює нулю."
    ],
    "projects": []
  },
  {
    "title": "Секрети кола та кольорові світи",
    "tag": "Коло · координати · моделі",
    "story": "На галявині знайдено зразки речовин. Створіть умовну модель молекули води й перевірте, чого така схема не показує.",
    "theory": [
      [
        "Коло та його центр",
        "circle(r) малює коло радіуса r. Якщо черепашка дивиться праворуч, центр кола лежить на r пікселів вище її початкової точки. dot(d) малює круглу точку діаметра d у поточній позиції."
      ],
      [
        "Перо й координати",
        "penup() вимикає слід; goto(x, y) переміщує до координат; pendown() повертає малювання. Центр полотна — (0, 0), додатній y спрямований угору."
      ],
      [
        "Кольори та заливка",
        "color(\"red\") або color(\"#ff0000\") задає колір. begin_fill() і end_fill() обрамляють замкнений контур. У RGB за стандартного colormode(1.0) компоненти лежать від 0 до 1."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.penup()\n# Кисень: умовний діаметр 60 пікселів\nt.goto(0, 20)\nt.dot(60, \"red\")\n# Перший атом Гідрогену\nt.goto(-65, -30)\nt.dot(30, \"white\")\n# Додайте другий атом симетрично праворуч\n\nturtle.done()",
    "task": "Додайте другий атом Гідрогену в точці (65, -30). Проведіть зв’язки окремими лініями. Поясніть співвідношення кількості атомів H:O. Для круга радіуса 30 пікселів обчисліть діаметр.",
    "stretch": "Розмістіть атоми CO₂ на одній прямій. Додайте легенду кольорів. Схеми умовні: розміри, відстані та кут H–O–H тут не відтворюють точну геометрію молекули.",
    "order": [
      "t.penup()",
      "t.goto(0, -40)",
      "t.pendown()",
      "t.circle(40)"
    ],
    "quiz": [
      {
        "q": "Для круга радіуса 30 пікселів діаметр дорівнює…",
        "options": [
          "15",
          "30",
          "60"
        ],
        "a": 2
      },
      {
        "q": "У молекулі H₂O кількість атомів Гідрогену до Оксигену — …",
        "options": [
          "2:1",
          "1:2",
          "2:2"
        ],
        "a": 0
      }
    ],
    "explain": [
      "Діаметр d = 2r = 60 пікселів. dot(60) і circle(30) мають однаковий діаметр.",
      "H₂O містить два атоми Гідрогену та один Оксигену: 2:1. Колір у моделі — домовленість."
    ],
    "projects": []
  },
  {
    "title": "Нові інструменти для Міста Пікселів",
    "tag": "Функції · підписи · карта",
    "story": "Картографічна група готує карту міста. Потрібні узгоджені підписи й дороги різної товщини, які легко повторно використати.",
    "theory": [
      [
        "Інструменти картографа",
        "pensize(5) задає товщину лінії. write(\"Парк\") додає напис. speed(0) вимикає анімаційні затримки; speed(1) малює повільніше. Це налаштування показу, а не фізична швидкість у м/с."
      ],
      [
        "Власна команда",
        "def label(x, y, text): оголошує функцію з параметрами. Її тіло має відступи. Виклик label(0, 100, \"Парк\") підставляє значення та виконує команди."
      ],
      [
        "Кілька дослідників",
        "t1 = turtle.Turtle() і t2 = turtle.Turtle() створюють незалежні об’єкти. У кожного свої координати, напрям, перо та колір."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.color(\"#45d9b0\")\n\ndef label(x, y, text):\n    t.penup()\n    t.goto(x, y)\n    t.write(text, align=\"center\", font=(\"Arial\", 14, \"normal\"))\n\nlabel(-140, 80, \"Лабораторія\")\nlabel(140, 80, \"Парк\")\n# Додайте третю локацію. Другій черепашці доручіть дорогу.\n\nturtle.done()",
    "task": "Додайте функцію road(x, y, length), що малює горизонтальну дорогу товщиною 6. З’єднайте точки (-140, 0) і (140, 0). За масштабу 20 пікселів = 1 метр знайдіть довжину дороги.",
    "stretch": "Створіть другу черепашку для підписів. Поясніть, чому зміна кольору першої не повинна змінювати колір другої. Складіть легенду з трьох типів доріг.",
    "order": [
      "def label(x, y, text):",
      "    t.penup()",
      "    t.goto(x, y)",
      "    t.write(text)"
    ],
    "quiz": [
      {
        "q": "Дорога від x = -140 до x = 140 має довжину…",
        "options": [
          "140 пікселів",
          "280 пікселів",
          "0 пікселів"
        ],
        "a": 1
      },
      {
        "q": "Що виконає функцію після її оголошення?",
        "options": [
          "Саме слово def",
          "Коментар # label",
          "Виклик label(0, 0, \"Парк\")"
        ],
        "a": 2
      }
    ],
    "explain": [
      "140 − (−140) = 280 пікселів. За масштабу 20 пікселів/м це 14 м.",
      "def створює функцію; команди її тіла виконуються під час виклику."
    ],
    "projects": []
  },
  {
    "title": "Циклічні джунглі та магія візерунків",
    "tag": "Цикли · кути · симетрія",
    "story": "У джунглях повторюються стежки, квіти та геометричні форми. Дослідіть правило повороту й побудуйте знак експедиції.",
    "theory": [
      [
        "Цикл for",
        "for i in range(6): повторює тіло шість разів. Значення i: 0, 1, 2, 3, 4, 5. Відступ об’єднує команди в тіло циклу."
      ],
      [
        "Поворот багатокутника",
        "Для правильного опуклого n-кутника зовнішній поворот дорівнює 360 / n. Внутрішній кут — 180 − 360 / n. Не плутайте їх."
      ],
      [
        "Вкладені цикли",
        "Внутрішній цикл малює одну фігуру, зовнішній — повторює її з поворотом. Для 12 рівномірно розташованих променів крок повороту дорівнює 30°."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.color(\"#45d9b0\")\nt.pensize(2)\nn = 6\nfor i in range(n):\n    t.forward(70)\n    t.left(360 / n)\n\nturtle.done()",
    "task": "Перетворіть шестикутник на восьмикутник, змінюючи лише n. Обчисліть зовнішній та внутрішній кути. Потім створіть сонце з 12 променів: уперед, назад, поворот.",
    "stretch": "Створіть квітку з 12 квадратів вкладеним циклом. Змініть крок повороту й передбачте, чи повернеться напрям до початкового. Додайте список кольорів та індекс i % len(colors).",
    "order": [
      "for i in range(6):",
      "    t.forward(70)",
      "    t.left(60)"
    ],
    "quiz": [
      {
        "q": "Зовнішній поворот правильного восьмикутника — …",
        "options": [
          "45°",
          "135°",
          "60°"
        ],
        "a": 0
      },
      {
        "q": "12 променів із повним обертом: кут між сусідніми променями…",
        "options": [
          "12°",
          "30°",
          "36°"
        ],
        "a": 1
      }
    ],
    "explain": [
      "360 / 8 = 45°. Внутрішній кут дорівнює 180 − 45 = 135°.",
      "360 / 12 = 30°. Після 12 поворотів загальний поворот — 360°."
    ],
    "projects": []
  },
  {
    "title": "Датчики дослідника та магія вибору",
    "tag": "Умови · межі · випадковість",
    "story": "Експедиція наносить на карту небезпечні висоти. Черепашка має позначати точки за правилами, а ви перевірите граничні значення.",
    "theory": [
      [
        "Вибір дії",
        "if перевіряє умову. elif додає іншу перевірку, else обробляє решту випадків. == порівнює, = присвоює. Відступи визначають належність команд до гілки."
      ],
      [
        "Умовний датчик",
        "xcor() і ycor() повертають координати. Ми моделюємо датчик: програма знає положення об’єкта, але не вимірює реальну висоту гори."
      ],
      [
        "Перевірте межу",
        "Умова height > 150 не включає 150. Перевірте 149, 150 і 151. Випадковий randint(1, 100) може дати будь-яке ціле число від 1 до 100 включно."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef mark(height):\n    t.penup()\n    t.goto(-100, height)\n    if height > 150:\n        t.color(\"red\")\n    else:\n        t.color(\"#45d9b0\")\n    t.pendown()\n    t.forward(200)\n\nmark(-80)\nmark(0)\nmark(150)\nmark(180)\nturtle.done()",
    "task": "Додайте третій рівень: height < 0 — синій, від 0 до 150 включно — зелений, понад 150 — червоний. Викличте mark для -1, 0, 150, 151 і поясніть кожен результат.",
    "stretch": "Змоделюйте випадковий маршрут із 20 кроків. Якщо xcor() > 200, змініть напрям на захід через setheading(180). Поясніть, чому випадкові повороти самі по собі не гарантують повернення до старту.",
    "order": [
      "if height > 150:",
      "    t.color(\"red\")",
      "else:",
      "    t.color(\"green\")"
    ],
    "quiz": [
      {
        "q": "За умови height > 150 значення 150 потрапить…",
        "options": [
          "У гілку if",
          "У гілку else",
          "У дві гілки"
        ],
        "a": 1
      },
      {
        "q": "Під час перевірки height < 0 точка 0…",
        "options": [
          "Задовольняє умову",
          "Не задовольняє умову",
          "Завжди спричиняє помилку"
        ],
        "a": 1
      }
    ],
    "explain": [
      "150 > 150 — хибне порівняння. Межа потребує окремої перевірки.",
      "0 не менше 0. Для включення нуля потрібно <= 0."
    ],
    "projects": []
  },
  {
    "title": "Місто Пікселів: архітектори майбутнього",
    "tag": "Проєкт · моделі · аргументація",
    "story": "Побудуйте яскраве місто за власним генеральним планом. Програмуйте будівлі як функції, використовуйте цикли для поверхів і порівнюйте масштаб.",
    "theory": [
      [
        "Архітектура проєкту",
        "Спочатку сформулюйте задачу й масштаб, потім розбийте малюнок на функції. Повторення виконуйте циклами. Підписуйте об’єкти, не перекриваючи зображення."
      ],
      [
        "Перевірка моделі",
        "Оберіть тестові координати, межі та розміри. Перевірте, чи вміщується композиція у вікно 640 × 440. Умовна схема не є точним фізичним або хімічним вимірюванням."
      ],
      [
        "Критерії роботи",
        "Має бути функція з параметрами, цикл, пояснений розрахунок і підписи. Для поглибленого рівня — умова та друга черепашка. У звіті зазначте внесок кожного учасника."
      ],
      [
        "Архітектура як алгоритм",
        "Одна функція tower(x, height, color) будує будинок, а вкладені цикли створюють ряди вікон. Зміна параметрів змінює всю композицію."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef block(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for j in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef tower(x, height, color):\n    block(x, -140, 80, height, color)\n    for floor in range(int(height // 35)):\n        for col in range(2):\n            block(x+15+col*32, -115+floor*35, 18, 22, \"#fff2a8\")\n\nheights = [110, 180, 145, 225]\ncolors = [\"#8bd4d1\", \"#b9a0f4\", \"#ffb985\", \"#93c9f5\"]\nfor i in range(4):\n    tower(-215+i*110, heights[i], colors[i])\n# Дослідіть: як змінюється кількість вікон зі зростанням висоти?\n\nturtle.done()",
    "task": "Оберіть проєкт нижче. Запишіть мету, масштаб або умовні позначення, один розрахунок і три перевірки. Реалізуйте, запустіть та поясніть результат. У команді розподіліть ролі: розробник, дослідник, тестувальник.",
    "stretch": "Створіть панораму з 6 будівель, додайте нічний режим і підрахуйте кількість вікон за формулою.",
    "order": [
      "Поставити задачу й обрати масштаб",
      "Розбити малюнок на функції",
      "Написати й запустити код",
      "Перевірити та пояснити результат"
    ],
    "quiz": [
      {
        "q": "Три будинки завширшки 50, відстань між їхніми лівими краями — 120. Проміжок між сусідніми будинками…",
        "options": [
          "50",
          "70",
          "120"
        ],
        "a": 1
      },
      {
        "q": "Що робить проєкт дослідницьким?",
        "options": [
          "Лише кількість кольорів",
          "Велика кількість рядків",
          "Перевірка припущення й пояснення результату"
        ],
        "a": 2
      }
    ],
    "explain": [
      "Проміжок = 120 − 50 = 70 пікселів. Повна ширина кварталу: 2 × 120 + 50 = 290.",
      "Дослідження має запитання, модель, перевірку та аргументований висновок."
    ],
    "projects": [
      {
        "title": "Неоновий мегаполіс",
        "text": "Панорама з чотирьох веж, вікна за вкладеними циклами, різні висоти та кольори. Змініть дані й обчисліть кількість вікон.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef block(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for j in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef tower(x, height, color):\n    block(x, -140, 80, height, color)\n    for floor in range(int(height // 35)):\n        for col in range(2):\n            block(x+15+col*32, -115+floor*35, 18, 22, \"#fff2a8\")\n\nheights = [110, 180, 145, 225]\ncolors = [\"#8bd4d1\", \"#b9a0f4\", \"#ffb985\", \"#93c9f5\"]\nfor i in range(4):\n    tower(-215+i*110, heights[i], colors[i])\n# Дослідіть: як змінюється кількість вікон зі зростанням висоти?\n\nturtle.done()"
      },
      {
        "title": "Екомісто",
        "text": "Створіть житловий квартал, парк, сонячні панелі та дороги. Масштаб 10 пікселів = 1 метр. Обчисліть площу одного квадратного будинку й ширину кварталу.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.pensize(2)\n\ndef house(x, y, color):\n    t.penup()\n    t.goto(x, y)\n    t.setheading(0)\n    t.pendown()\n    t.color(color)\n    t.begin_fill()\n    for side in range(4):\n        t.forward(50)\n        t.left(90)\n    t.end_fill()\n\ncolors = [\"#45d9b0\", \"#ffc56b\", \"#9d98ff\"]\nfor i in range(3):\n    house(-180 + i * 120, -20, colors[i])\n# Додайте дороги, парк та підписи функціями.\nturtle.done()"
      },
      {
        "title": "Оглядове коло",
        "text": "Створіть колесо радіуса 80 із 8 кабінками. Обчисліть діаметр і кут між кабінками. Пам’ятайте: circle(r) починається на колі, а не в центрі.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.color(\"orange\")\nt.penup()\nt.goto(80, -80)\nt.pendown()\nt.circle(80)\nfor i in range(8):\n    t.penup()\n    t.circle(80, 45)\n    t.dot(16, \"orange\")\nturtle.done()\n"
      },
      {
        "title": "Атлас молекул",
        "text": "Намалюйте умовні моделі H₂O, CO₂ і O₂, додайте легенду. Обчисліть кількість атомів кожного елемента в трьох молекулах води. Не називайте схему точною моделлю розмірів.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\ndef atom(x, y, diameter, color, label):\n    t.penup()\n    t.goto(x, y)\n    t.dot(diameter, color)\n    t.goto(x, y - 45)\n    t.color(\"white\")\n    t.write(label, align=\"center\")\natom(0, 20, 60, \"red\", \"O\")\natom(-65, -30, 30, \"cyan\", \"H\")\natom(65, -30, 30, \"cyan\", \"H\")\nturtle.done()\n"
      },
      {
        "title": "Карта висот",
        "text": "Побудуйте легенду трьох зон, перевірте межі -1, 0, 150, 151. Додайте функцію позначення точок і таблицю очікуваних кольорів.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nfor height in [-1, 0, 150, 151]:\n    if height < 0:\n        color = \"blue\"\n    elif height <= 150:\n        color = \"green\"\n    else:\n        color = \"red\"\n    t.penup()\n    t.goto(-100 + height, height - 70)\n    t.dot(16, color)\nturtle.done()\n"
      },
      {
        "title": "Геометричний ботанічний сад",
        "text": "Намалюйте три квітки з різною кількістю пелюсток, використовуючи вкладені цикли. Розрахуйте кут повороту для кожної та порівняйте кількість повторень.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\ncolors = [\"orange\", \"cyan\", \"violet\"]\ndef flower(x, y, petals, color):\n    t.penup()\n    t.goto(x, y)\n    t.pendown()\n    t.color(color)\n    for i in range(petals):\n        t.circle(25)\n        t.left(360 / petals)\nfor i in range(3):\n    flower(-180 + i * 180, 0, 6 + i * 2, colors[i])\nturtle.done()\n"
      }
    ]
  },
  {
    "title": "Геометрія, що розквітає: мандали й фрактальні мотиви",
    "tag": "Цикли · симетрія · розетки",
    "story": "Створіть цифровий ботанічний сад: симетричні квіти, розетки та багатошарові мандали. Відкрийте, як математика керує красою.",
    "theory": [
      [
        "Кут повного оберту",
        "Щоб розташувати n елементів рівномірно, використайте крок 360/n градусів. Для 12 пелюсток це 30 градусів."
      ],
      [
        "Параметри й повторне використання",
        "Функція flower(x, y, r, colors) задає положення, розмір і палітру. Одна функція створює цілий сад."
      ],
      [
        "Вкладені цикли",
        "Зовнішній цикл створює кільця, внутрішній - елементи кожного кільця. Так народжуються складні мандали."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef petal(x, y, radius, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(color); t.begin_fill(); t.circle(radius); t.end_fill()\n\ndef flower(x, y, r, colors):\n    for i in range(12):\n        angle = i * 30\n        t.penup(); t.goto(x, y); t.setheading(angle)\n        t.forward(r); t.pendown()\n        petal(t.xcor(), t.ycor(), r * 0.45, colors[i % len(colors)])\n    petal(x, y, r * 0.36, \"#ffcb45\")\n\npalette = [\"#ff6b9d\", \"#b18cff\", \"#62d6c5\", \"#ffab70\"]\nflower(-110, 30, 75, palette)\nflower(115, -40, 55, palette)\n# Експеримент: змініть 12 на 18 і крок 30 на 20.\n\nturtle.done()",
    "task": "Створіть дві квітки з різною кількістю пелюсток і багатошарову мандалу. Поясніть, як обчислювали кути.",
    "stretch": "Створіть три кільця по 24 елементи, додайте градієнт із чотирьох кольорів та порівняйте симетрію.",
    "order": [
      "import turtle",
      "for i in range(12):",
      "    t.circle(65)",
      "    t.left(30)"
    ],
    "quiz": [
      {
        "q": "Який кут між 12 однаковими пелюстками?",
        "options": [
          "30°",
          "45°",
          "60°"
        ],
        "a": 0
      },
      {
        "q": "Скільки разів виконається тіло циклу range(8)?",
        "options": [
          "7",
          "8",
          "9"
        ],
        "a": 1
      }
    ],
    "explain": [
      "360 / 12 = 30 градусів.",
      "range(8) створює вісім повторень."
    ],
    "projects": [
      {
        "title": "Квітковий сад",
        "text": "Дві великі різнокольорові квітки з параметрами. Додайте третю та змініть формулу розташування пелюсток.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef petal(x, y, radius, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(color); t.begin_fill(); t.circle(radius); t.end_fill()\n\ndef flower(x, y, r, colors):\n    for i in range(12):\n        angle = i * 30\n        t.penup(); t.goto(x, y); t.setheading(angle)\n        t.forward(r); t.pendown()\n        petal(t.xcor(), t.ycor(), r * 0.45, colors[i % len(colors)])\n    petal(x, y, r * 0.36, \"#ffcb45\")\n\npalette = [\"#ff6b9d\", \"#b18cff\", \"#62d6c5\", \"#ffab70\"]\nflower(-110, 30, 75, palette)\nflower(115, -40, 55, palette)\n# Експеримент: змініть 12 на 18 і крок 30 на 20.\n\nturtle.done()"
      },
      {
        "title": "Мандала з 54 фігур",
        "text": "Три кільця, у кожному по 18 шестикутників. Дослідіть залежність візерунка від кута.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ncolors = [\"#8e67e8\", \"#1bb4b2\", \"#f7a644\", \"#f06c99\"]\nfor ring in range(3):\n    for i in range(18):\n        t.penup(); t.goto(0, 0); t.setheading(i * 20 + ring * 10)\n        t.forward(35 + ring * 45); t.pendown()\n        t.pencolor(colors[ring % 4]); t.pensize(2 + ring)\n        for side in range(6):\n            t.forward(15 + ring * 4)\n            t.right(60)\n# Спробуйте 24 повтори з поворотом 15 градусів.\n\nturtle.done()"
      }
    ]
  },
  {
    "title": "Кольорова архітектура: будинки й вітражі",
    "tag": "Заливка · функції · координати",
    "story": "Відкрийте архітектурне бюро. Збудуйте вулицю з різнокольоровими будинками, дахами, дверима та вікнами, використовуючи параметризовані функції.",
    "theory": [
      [
        "Заливка складних форм",
        "begin_fill() і end_fill() зафарбовують замкнений контур. Окремо малюйте фасад, дах і вікна."
      ],
      [
        "Параметризовані будівлі",
        "Функція house(x, y, w, color) дозволяє створювати будинки різних розмірів без копіювання команд."
      ],
      [
        "Пропорції та координати",
        "Висоту фасаду можна визначити як 0.75 від ширини, а ширину вікна - як 0.2. Перевірте, як змінюється вигляд при масштабуванні."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef rectangle(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for side in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef roof(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    t.goto(x + w/2, y + h); t.goto(x + w, y); t.goto(x, y)\n    t.end_fill()\n\ndef house(x, y, w, color):\n    rectangle(x, y, w, w*.75, color)\n    roof(x-8, y+w*.75, w+16, w*.45, \"#ed7089\")\n    rectangle(x+w*.4, y, w*.2, w*.35, \"#9c6d58\")\n    rectangle(x+w*.12, y+w*.38, w*.2, w*.2, \"#9adcf6\")\n    rectangle(x+w*.68, y+w*.38, w*.2, w*.2, \"#9adcf6\")\n\nhouse(-220, -130, 120, \"#ffe49c\")\nhouse(30, -130, 165, \"#b8e9d3\")\n# Змініть ширину будинків і створіть вулицю з 4 будинків.\n\nturtle.done()",
    "task": "Побудуйте вулицю з трьох будинків різних розмірів. Додайте щонайменше два декоративні елементи та поясніть пропорції.",
    "stretch": "Додайте нічний режим: темне тло, освітлені вікна, місяць і зорі. Усі будинки створіть однією функцією.",
    "order": [
      "def square(size, color):",
      "    t.fillcolor(color)",
      "    t.begin_fill()",
      "    t.end_fill()"
    ],
    "quiz": [
      {
        "q": "Яка команда завершує заливку?",
        "options": [
          "begin_fill()",
          "end_fill()",
          "fillcolor()"
        ],
        "a": 1
      },
      {
        "q": "Що робить penup()?",
        "options": [
          "Змінює колір",
          "Вимикає слід",
          "Очищає екран"
        ],
        "a": 1
      }
    ],
    "explain": [
      "end_fill() завершує заливання замкненого контуру.",
      "penup() дозволяє перейти без малювання лінії."
    ],
    "projects": [
      {
        "title": "Казкова вулиця",
        "text": "Два кольорові будинки з дахами, дверима й вікнами. Розширте композицію до цілого кварталу.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef rectangle(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for side in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef roof(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    t.goto(x + w/2, y + h); t.goto(x + w, y); t.goto(x, y)\n    t.end_fill()\n\ndef house(x, y, w, color):\n    rectangle(x, y, w, w*.75, color)\n    roof(x-8, y+w*.75, w+16, w*.45, \"#ed7089\")\n    rectangle(x+w*.4, y, w*.2, w*.35, \"#9c6d58\")\n    rectangle(x+w*.12, y+w*.38, w*.2, w*.2, \"#9adcf6\")\n    rectangle(x+w*.68, y+w*.38, w*.2, w*.2, \"#9adcf6\")\n\nhouse(-220, -130, 120, \"#ffe49c\")\nhouse(30, -130, 165, \"#b8e9d3\")\n# Змініть ширину будинків і створіть вулицю з 4 будинків.\n\nturtle.done()"
      },
      {
        "title": "Нічний мегаполіс",
        "text": "Місто з різними висотами та рядами вікон. Змініть тло на нічне та кольори підсвічування.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef block(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for j in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef tower(x, height, color):\n    block(x, -140, 80, height, color)\n    for floor in range(int(height // 35)):\n        for col in range(2):\n            block(x+15+col*32, -115+floor*35, 18, 22, \"#fff2a8\")\n\nheights = [110, 180, 145, 225]\ncolors = [\"#8bd4d1\", \"#b9a0f4\", \"#ffb985\", \"#93c9f5\"]\nfor i in range(4):\n    tower(-215+i*110, heights[i], colors[i])\n# Дослідіть: як змінюється кількість вікон зі зростанням висоти?\n\nturtle.done()"
      }
    ]
  },
  {
    "title": "Графічна лабораторія: власний цифровий світ",
    "tag": "Композиція · алгоритми · власний проєкт",
    "story": "Фінальна місія: створіть завершену авторську композицію, поєднавши функції, цикли, координати, геометрію та палітру.",
    "theory": [
      [
        "Декомпозиція сцени",
        "Розбийте картину на функції: sun(), tree(), polygon() та власні. Кожна відповідає за окремий об’єкт."
      ],
      [
        "Композиція та шари",
        "Малюйте від заднього плану до переднього. Координати визначають розміщення, а масштаб - пропорції."
      ],
      [
        "Тестування й авторський стиль",
        "Перевірте контури, кольори, повтори та координати. Додайте підпис і поясніть алгоритмічні рішення."
      ]
    ],
    "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef polygon(x, y, sides, length, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(color); t.begin_fill()\n    for i in range(sides):\n        t.forward(length); t.left(360/sides)\n    t.end_fill()\n\ndef sun(x, y, r):\n    t.penup(); t.goto(x, y-r); t.setheading(0); t.pendown()\n    t.color(\"#ffcb45\"); t.begin_fill(); t.circle(r); t.end_fill()\n    for i in range(12):\n        t.penup(); t.goto(x, y); t.setheading(i*30)\n        t.forward(r+8); t.pendown(); t.forward(18)\n\ndef tree(x, y, scale):\n    t.pensize(9*scale); t.color(\"#8c674b\")\n    t.penup(); t.goto(x, y); t.setheading(90); t.pendown(); t.forward(55*scale)\n    t.pensize(1)\n    t.penup(); t.goto(x, y+35*scale-35*scale); t.pendown()\n    t.color(\"#4fc7a1\"); t.begin_fill(); t.circle(35*scale); t.end_fill()\n\nsun(140, 130, 35)\nfor i in range(5):\n    tree(-200+i*95, -150, .65+i*.09)\npolygon(-60, -120, 4, 80, \"#bba2fa\")\n# Розширте сцену: додайте дах, двері, хмари та підпис.\n\nturtle.done()",
    "task": "Створіть авторську сцену з 5 об’єктів, 3 функцій, 2 циклів та щонайменше 4 кольорів. Поясніть один математичний принцип.",
    "stretch": "Додайте перемикач композиції через змінну theme, два варіанти палітри та параметр масштабу.",
    "order": [
      "def star(x, y, size):",
      "    t.penup()",
      "    t.goto(x, y)",
      "    for i in range(5):"
    ],
    "quiz": [
      {
        "q": "Який інструмент найкраще підходить для 10 зірок?",
        "options": [
          "Десять копій",
          "Цикл for",
          "Лише print()"
        ],
        "a": 1
      },
      {
        "q": "Що допомагає повторно використати малювання дерева?",
        "options": [
          "Функція",
          "Коментар",
          "Змінна без коду"
        ],
        "a": 0
      }
    ],
    "explain": [
      "Цикл дозволяє створити багато схожих елементів.",
      "Функція об’єднує команди в повторно використовуваний блок."
    ],
    "projects": [
      {
        "title": "Екопарк майбутнього",
        "text": "Сонце з 12 променями, дерева різних розмірів і геометрична споруда. Доповніть композицію хмарами та доріжками.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef polygon(x, y, sides, length, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(color); t.begin_fill()\n    for i in range(sides):\n        t.forward(length); t.left(360/sides)\n    t.end_fill()\n\ndef sun(x, y, r):\n    t.penup(); t.goto(x, y-r); t.setheading(0); t.pendown()\n    t.color(\"#ffcb45\"); t.begin_fill(); t.circle(r); t.end_fill()\n    for i in range(12):\n        t.penup(); t.goto(x, y); t.setheading(i*30)\n        t.forward(r+8); t.pendown(); t.forward(18)\n\ndef tree(x, y, scale):\n    t.pensize(9*scale); t.color(\"#8c674b\")\n    t.penup(); t.goto(x, y); t.setheading(90); t.pendown(); t.forward(55*scale)\n    t.pensize(1)\n    t.penup(); t.goto(x, y+35*scale-35*scale); t.pendown()\n    t.color(\"#4fc7a1\"); t.begin_fill(); t.circle(35*scale); t.end_fill()\n\nsun(140, 130, 35)\nfor i in range(5):\n    tree(-200+i*95, -150, .65+i*.09)\npolygon(-60, -120, 4, 80, \"#bba2fa\")\n# Розширте сцену: додайте дах, двері, хмари та підпис.\n\nturtle.done()"
      },
      {
        "title": "Футуристичне місто",
        "text": "Чотири вежі, ритм вікон, палітра та параметри висоти. Створіть денну й нічну версії.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef block(x, y, w, h, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(\"#34446c\", color); t.begin_fill()\n    for j in range(2):\n        t.forward(w); t.left(90); t.forward(h); t.left(90)\n    t.end_fill()\n\ndef tower(x, height, color):\n    block(x, -140, 80, height, color)\n    for floor in range(int(height // 35)):\n        for col in range(2):\n            block(x+15+col*32, -115+floor*35, 18, 22, \"#fff2a8\")\n\nheights = [110, 180, 145, 225]\ncolors = [\"#8bd4d1\", \"#b9a0f4\", \"#ffb985\", \"#93c9f5\"]\nfor i in range(4):\n    tower(-215+i*110, heights[i], colors[i])\n# Дослідіть: як змінюється кількість вікон зі зростанням висоти?\n\nturtle.done()"
      },
      {
        "title": "Сад симетрії",
        "text": "Квіти, повтори, симетрія та палітра. Побудуйте власну систему декоративних елементів.",
        "code": "import turtle\nt = turtle.Turtle()\nt.speed(0)\nt.hideturtle()\nscreen = turtle.Screen()\nscreen.bgcolor(\"#f4f8ff\")\n\ndef petal(x, y, radius, color):\n    t.penup(); t.goto(x, y); t.setheading(0); t.pendown()\n    t.color(color); t.begin_fill(); t.circle(radius); t.end_fill()\n\ndef flower(x, y, r, colors):\n    for i in range(12):\n        angle = i * 30\n        t.penup(); t.goto(x, y); t.setheading(angle)\n        t.forward(r); t.pendown()\n        petal(t.xcor(), t.ycor(), r * 0.45, colors[i % len(colors)])\n    petal(x, y, r * 0.36, \"#ffcb45\")\n\npalette = [\"#ff6b9d\", \"#b18cff\", \"#62d6c5\", \"#ffab70\"]\nflower(-110, 30, 75, palette)\nflower(115, -40, 55, palette)\n# Експеримент: змініть 12 на 18 і крок 30 на 20.\n\nturtle.done()"
      }
    ]
  }
];
