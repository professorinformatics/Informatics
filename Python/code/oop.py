"""This module contains code related to classes and objects
"""

import math

class Point:
    """Represents a point in 2D space
    """
    
class Rectangle:
    """Represents a rectangle.

    attributes: width, height, corner
    """
    
def print_point(p):
    print('(%g, %g)' % (p.x, p.y))

def find_center(rect):
    p = Point()
    p.x = rect.corner.x + rect.width/2
    p.y = rect.corner.y + rect.height/2
    return p

if __name__ == '__main__':
    print(Point)
    blank = Point()
    print(blank)    
    blank.x = 3.0
    blank.y = 4.0
    print_point(blank)
    distance = math.sqrt(blank.x**2 + blank.y**2)
    print(distance)

    #but what about....
    #point = Point()
    #print_point(point)
    
    box = Rectangle()
    box.width = 100.0
    box.height = 200.0
    box.corner = Point()
    box.corner.x = 0.0
    box.corner.y = 0.0
    print(box)
    print(box.width)
    print(box.corner.y)
    center = find_center(box)
    print_point(center)
