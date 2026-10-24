import turtle
t = turtle.Turtle()
t.speed(0)
t.left(90)
t.penup()
t.goto(0, -190)
t.pendown()
def tree(size):
    if size < 8:
        t.dot(6, "green")
        return
    t.forward(size)
    t.left(30)
    tree(size * 0.7)
    t.right(60)
    tree(size * 0.7)
    t.left(30)
    t.backward(size)
tree(95)
turtle.done()
