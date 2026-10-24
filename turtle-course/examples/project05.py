import turtle
t = turtle.Turtle()
t.speed(0)
colors = ["orange", "cyan", "violet"]
def flower(x, y, petals, color):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color(color)
    for i in range(petals):
        t.circle(25)
        t.left(360 / petals)
for i in range(3):
    flower(-180 + i * 180, 0, 6 + i * 2, colors[i])
turtle.done()
