import turtle
t = turtle.Turtle()
t.speed(0)
# Вкладені квадрати зі спільним центром
colors = ["#3530d9", "#f5a0cc", "#ec806b"]
for i in range(16):
    side = 360 - i * 20
    t.penup()
    t.goto(-side / 2, -side / 2)
    t.setheading(0)
    t.pendown()
    t.pencolor(colors[i % 3])
    t.pensize(3)
    for j in range(4):
        t.forward(side)
        t.left(90)
turtle.done()
