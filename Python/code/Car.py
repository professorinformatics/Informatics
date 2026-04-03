"""This module contains code for the Point and Car classes"""

class Point():
    """Represents a point in space"""
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def __str__(self):
        return '(%d, %d)' % (self.x, self.y)

    
class Car:
    """Represents a vehicle"""
    def __init__(self, model, speed=0):
        self.model = model
        self.speed = speed
        self.gps = Point()

    def __str__(self):
        return 'Running with %d km/h at %s' % (self.speed, self.gps)
        
    def run(self):
        if self.speed > 0:
            self.gps.x += self.speed
            
    def stop(self):
        if self.speed > 0:
            self.speed = 0
        print('Stopped running')

    def accelerate(self, speed):
        self.speed += speed
    
    def crash(self, other):
        if self.gps.x == other.gps.x and self.gps.y == other.gps.y:
            print('CRASHED')
            

if __name__ == '__main__':
    mycar = Car('civic', 10)
    mycar.run()

    yourcar = Car('polo')
    mycar.accelerate(10)
    mycar.run()

    yourcar.accelerate(30)
    yourcar.run()

    print(mycar)
    print(yourcar)

    mycar.crash(yourcar)


            

            
