import turtle
t = turtle.Turtle()
t.speed(0)
t.pensize(3)
t.color("#3530d9")
t.penup()
t.goto(-100, -60)
t.pendown()
for i in range(2):
    t.forward(200)
    t.left(90)
    t.forward(120)
    t.left(90)
turtle.done()
