from typing import final


g = 3   # Global
def sub1():
    a = 5
    b = 7
    # Point 1
    def sub2():
        print(g , end="\n")
        c = 9
        myvar: final  =12

        # Point 2
        print(a, b, c, g , end="\n")
        def sub3():
            g = 11
            print(a , b ,c , g ,end="\n")
            # Point 3
        sub3()
    sub2()
sub1()
