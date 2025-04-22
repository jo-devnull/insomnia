from watchfiles import watch
from subprocess import run

run(["packwiz.exe", "refresh"])

for changes in watch("./minecraft", raise_interrupt=False):
    run(["packwiz.exe", "refresh"])
