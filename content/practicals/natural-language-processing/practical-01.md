---
subject: Natural Language Processing
number: 1
title: Introduction to NLTK and Speech Processing
aim: To install and explore NLTK, and implement speech processing techniques including text-to-speech and speech-to-text conversion using Python.
---

# A. Installing NLTK.

## Install
```bash
pip install nltk
```

## Code
```python
import nltk
nltk.download()

from nltk.corpus import brown
brown.word()
```

# B. Write a python script to convert the given input Text to Speech.

## Code
```python
!pip install SpeechRecognition

import speech_recognition as sr

filename = "/content/file_example_WAV_10MG.wav"

r = sr.Recognizer()

with sr.AudioFile(filename) as source:
    audio = r.record(source)
    text = r.recognize_google(audio)
    print(text)
```

# C. Write a python script to convert audio file from Speech to Text.

## Install
```bash
pip install gtts
pip install playsound
```

## Code
```python 
from gtts import gTTS
from playsound import playsound
text_val = "This is a Natural Language Processing practical"
language = "en"
obj = gTTS(text=text_val, lang=language, slow=False)
obj.save("example.mp3")
playsound("example.mp3")
```

