import turtle
t = turtle.Turtle()
t.speed(0)
def atom(x, y, diameter, color, label):
    t.penup()
    t.goto(x, y)
    t.dot(diameter, color)
    t.goto(x, y - 45)
    t.color("white")
    t.write(label, align="center")
atom(0, 20, 60, "red", "O")
atom(-65, -30, 30, "cyan", "H")
atom(65, -30, 30, "cyan", "H")
turtle.done()
