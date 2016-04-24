import os
import sys
import RPi.GPIO as GPIO
import time
import subprocess
import psutil
from twitch import play_twitch, next_twitch

GPIO.setmode(GPIO.BOARD)

# Pin var
motion = 40             # Pin  Bewegungsmelder
home_gpio = 11          # Pin  Home Button
music_gpio = 18         # Pin  Musik Button
twitch_gpio = 31        # Pin  Twitch Button
twitch_next_gpio = 32   # Pin  Twitch weiter schalten

# Pin Setup
GPIO.setup(motion, GPIO.IN)
GPIO.setup(home_gpio, GPIO.IN)
GPIO.setup(music_gpio, GPIO.IN)
GPIO.setup(twitch_gpio, GPIO.IN)
GPIO.setup(twitch_next_gpio, GPIO.IN)


# Functions

# Deaktivert Bildschirmschoner
def deactivate(motion):
        os.system("xscreensaver-command -deactivate")

# Aktiviert Musik
def music(music_gpio):
        #print "1"
        subprocess.Popen(["omxplayer", "-o", "local", "http://listen.technobase.fm/tunein-aacplus-pls"])

# Kill Twitch und Musik
def home(home_gpio):
        #print "aus"
        subprocess.call("pkill omx", shell=True)
        #subprocess.call("pkill livestreamer", shell=True)

# Events
GPIO.add_event_detect(motion, GPIO.RISING, callback=deactivate)

GPIO.add_event_detect(twitch_next_gpio, GPIO.RISING, callback=next_twitch, bouncetime=2000)

GPIO.add_event_detect(music_gpio, GPIO.RISING, callback=music, bouncetime=2000)

GPIO.add_event_detect(twitch_gpio, GPIO.RISING, callback=play_twitch, bouncetime=2000)

GPIO.add_event_detect(home_gpio, GPIO.RISING, callback=home, bouncetime=2000)

# While loop
while True:
        print "Sleeping"
        time.sleep(300)
