import turtle
t = turtle.Turtle()
t.speed(0)
t.color("orange")
t.penup()
t.goto(80, -80)
t.pendown()
t.circle(80)
for i in range(8):
    t.penup()
    t.circle(80, 45)
    t.dot(16, "orange")
turtle.done()
