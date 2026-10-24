 
import turtle 
import random 
 
t = turtle.Turtle() 
t.speed(0) 
 
def draw_klee_building(w, h, color): 
    # 1. Малюємо стіни будинку  
    t.fillcolor(color) 
    t.begin_fill() 
    for _ in range(2): 
        t.forward(w) 
        t.left(90) 
        t.forward(h) 
        t.left(90) 
    t.end_fill() 
 
    # 2. ЦИКЛ ВСЕРЕДИНІ ФУНКЦІЇ: малюємо поверхи-вікна  
    # Відступаємо від фундаменту і малюємо вікна до самого даху 
    for y_offset in range(15, h - 15, 25): 
        t.penup() 
        # Розрахунок позиції вікна відносно фундаменту 
        t.goto(t.xcor() + w/4, t.ycor() + y_offset) 
        t.pendown() 
         
        # Малюємо маленьке квадратне вікно  
        t.fillcolor("white") 
        t.begin_fill() 
        for _ in range(4): 
            t.forward(10) 
            t.left(90) 
        t.end_fill() 
         
        # Повертаємо черепашку на лінію фасаду для наступного кроку 
        t.penup() 
        t.goto(t.xcor() - w/4, t.ycor() - y_offset) 
 
# ГОЛОВНА ПРОГРАМА 
colors = ["#E74C3C", "#3498DB", "#F1C40F", "#2ECC71", "#9B59B6"] 
 
for i in range(6): 
    t.penup() 
    t.goto(-250 + i*90, -100) 
    t.pendown() 
    # Виклик функції з випадковими параметрами  
    draw_klee_building(70, random.randint(60, 200), random.choice(colors)) 
 
t.hideturtle() 
turtle.done() 
 
