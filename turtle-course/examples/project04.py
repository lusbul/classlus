import turtle
t = turtle.Turtle()
t.speed(0)
for height in [-1, 0, 150, 151]:
    if height < 0:
        color = "blue"
    elif height <= 150:
        color = "green"
    else:
        color = "red"
    t.penup()
    t.goto(-100 + height, height - 70)
    t.dot(16, color)
turtle.done()
