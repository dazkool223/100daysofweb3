import os
import subprocess

# Clone the repository
subprocess.run(["git", "clone", "https://github.com/dazkool223/100daysofweb3.git"])

# Change to the repository directory
os.chdir("100daysofweb3")

# Reads the last line of the README.md file
def get_readme(): 
    with open("README.md", "rb") as file:
        try:
            file.seek(-2, os.SEEK_END)
            while file.read(1) != b'\n':
                file.seek(-2, os.SEEK_CUR)
        except OSError:
            file.seek(0)
        last_line = file.readline().decode()
    return last_line

# Print the contents of the README.md file
def format():
    line = get_readme()
    t1 = "Daily Update Tweet\n"
    t2 = "#100daysofcode #100DaysofCodeLW3 w/ @LearnWeb3DAO"
    tweet = t1 + line + t2
    return tweet
print(format())

