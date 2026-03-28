import os

def file_read(filename):
    arr = []
    path = os.path.dirname(os.path.realpath(__file__))
    print path
    f = open(path + '\\' + filename, 'r')
    for line in f:        
        arr.append(line[:-1])
    f.close()
    print (arr)

file_read('words1.txt')
    
