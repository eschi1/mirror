import os
import subprocess
import sys
player = "omxplayer -o local"
CurrentStream = 0
RetryNum = 0

def load_whitelist():
        with open("whitelist.txt","r") as f:
                WhiteList = f.readlines()
        f.close()

        if len(WhiteList) == 0:
                print ("Whitelist is empty. Exiting...")
                exit()
        else:
                for i in range(0,len(WhiteList)):
                        WhiteList[i] = WhiteList[i].rstrip('\n')
                return WhiteList

def play_twitch(self):
        WhiteList = load_whitelist()
        name = WhiteList[CurrentStream]
        subprocess.Popen(["livestreamer", "twitch.tv/"+name, "best", "-np omxplayer -o local"])

def next_twitch(self):
        global CurrentStream
        subprocess.call("pkill omx", shell=True)
        WhiteList = load_whitelist()
        CurrentStream += 1
        if CurrentStream == len(WhiteList):
                CurrentStream = 0
                return 0
        else:
                name1 = WhiteList[CurrentStream]
                subprocess.Popen(["livestreamer", "twitch.tv/"+name1, "best", "-np omxplayer -o local"])
