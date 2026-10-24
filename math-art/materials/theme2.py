import turtle 
import random 
 
t = turtle.Turtle() 
t.speed(0) 
t.pensize(5) 
 
# Палітра Мондріана: червоний, синій, жовтий та білий 
mondrian_colors = ["red", "blue", "yellow", "white"] 
 
# Малюємо 10 випадкових кольорових прямокутників 
for i in range(10): 
    # 1. Обираємо випадкове місце та розмір 
    x = random.randint(-240, 100) 
    y = random.randint(-240, 100) 
    w = random.randint(40, 150) 
    h = random.randint(40, 150) 
     
    # 2. Переходимо до точки 
    t.penup() 
    t.goto(x, y) 
    t.pendown() 
     
    # 3. Налаштовуємо колір заповнення 
    current_color = random.choice(mondrian_colors) 
    t.color("black", current_color) # Контур чорний, середина кольорова 
     
    # 4. МАЛЮЄМО І ЗАФАРБОВУЄМО 
    t.begin_fill() # Починаємо зафарбовування 
    for side in range(2): 
        t.forward(w) 
        t.left(90) 
        t.forward(h) 
        t.left(90) 
    t.end_fill() # Завершуємо зафарбовування 
 
turtle.done() 
 
