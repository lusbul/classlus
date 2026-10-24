import turtle 
 
# Малюємо звичайний трикутник 
def draw_triangle(points, color): 
    turtle.fillcolor(color) 
    turtle.up() 
    turtle.goto(points[0][0], points[0][1]) 
    turtle.down() 
    turtle.begin_fill() 
    turtle.goto(points[1][0], points[1][1]) 
    turtle.goto(points[2][0], points[2][1]) 
    turtle.goto(points[0][0], points[0][1]) 
    turtle.end_fill() 
 
# Знаходимо середину відрізка 
def midpoint(p1, p2): 
    return ((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2) 
 
# Рекурсивна функція 
def sierpinski(points, degree): 
    colors = ["blue", "red", "green", "white", "yellow"] 
 
    draw_triangle(points, colors[degree]) 
 
    if degree > 0: 
        sierpinski( 
            [points[0], 
             midpoint(points[0], points[1]), 
             midpoint(points[0], points[2])], 
            degree - 1 
        ) 
 
        sierpinski( 
            [points[1], 
             midpoint(points[0], points[1]), 
             midpoint(points[1], points[2])], 
            degree - 1 
        ) 
 
        sierpinski( 
            [points[2], 
             midpoint(points[2], points[1]), 
             midpoint(points[0], points[2])], 
            degree - 1 
        ) 
 
 
# Початковий трикутник 
points = [(-200, -100), (0, 200), (200, -100)] 
 
turtle.speed(0) 
sierpinski(points, 4) 
 
turtle.hideturtle() 
turtle.done() 
 
