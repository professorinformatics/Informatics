"""This module contains code related to Time objects.
"""

class Time:
    """Represents the time of the day."""

def time_to_int(time):
    minutes = time.hour * 60 + time.minute
    seconds = minutes * 60 + time.second
    return seconds

def int_to_time(seconds):
    time = Time()
    minutes, time.second = divmod(seconds, 60)
    time.hour, time.minute = divmod(minutes, 60)
    return time

def mul_time(time, num):
    seconds = time_to_int(time) * num    
    return int_to_time(seconds)

def print_time(time):
    print('%.2d:%.2d:%.2d' % (time.hour, time.minute, time.second))
    
if __name__ == '__main__':
    race_time = Time()
    race_time.hour = 1
    race_time.minute = 34
    race_time.second = 5
    print('race time', end= ' ')
    print_time(race_time)
    
    distanceKm = 42.19
    print('race km', end=' ')
    print(distanceKm)
    
    pace = mul_time(race_time, 1/distanceKm)
    print('Time per km', end=' ')
    print_time(pace)
