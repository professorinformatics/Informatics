"""find duplicate files in directory tree
"""

import os
import hashlib

def walkdir(dirname):
    names = []

    for name in os.listdir(dirname):
        path = os.path.join(dirname, name)
        if os.path.isfile(path):
            names.append(path)
        else:
            names.extend(walkdir(path))
            
    return names

def checksums(dirname, suffix):
    names = walkdir(dirname)
    d = {}
    for name in names:
        if name.endswith(suffix):
            fin = open(file, 'rb')
            digest = hashlib.file_digest(fin, "md5")
            checksum = digest.hexdigest()
            fin.close()
            if checksum in d:
                d[checksum].append(name)
            else:
                d[checksum] = [name]
        
if __name__ == '__main__':
    d = checksums('c:\\', '.py')
    for key, names in d.items():
        if len(names) > 1:
            for name in names:
                print(name)

