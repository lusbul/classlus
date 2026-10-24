import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

def house(x, y, color):
    t.penup()
    t.goto(x, y)
    t.setheading(0)
    t.pendown()
    t.color(color)
    t.begin_fill()
    for side in range(4):
        t.forward(50)
        t.left(90)
    t.end_fill()

colors = ["#45d9b0", "#ffc56b", "#9d98ff"]
for i in range(3):
    house(-180 + i * 120, -20, colors[i])
# Додайте дороги, парк та підписи функціями.
turtle.done()