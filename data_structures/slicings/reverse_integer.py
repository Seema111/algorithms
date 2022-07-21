def reverse_string(x):
    string = str(x)
    
    if string[0] == '-':
        return int('-'+string[:0:-1])
    else:
        return int(string[::-1])


print(reverse_string(-83944))
print(reverse_string(98123478))