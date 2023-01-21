import os

def get(): 
    with open("README.md", "rb") as file:
        try:
            file.seek(-2, os.SEEK_END)
            while file.read(1) != b'\n':
                file.seek(-2, os.SEEK_CUR)
        except OSError:
            file.seek(0)
        last_line = file.readline().decode()
    return last_line

def format():
    line = get()
    t1 = "Daily Update Tweet\n"
    t2 = "#100daysofcode #100DaysofCodeLW3 w/ @LearnWeb3DAO"
    tweet = t1 + line + t2
    return tweet
print(format())