---
subject: Natural Language Processing
number: 7
title: Text Tokenization Techniques
aim: To implement and compare various text tokenization techniques using Python split function, Regular Expressions, NLTK, SpaCy, and Keras.
---

## Installing
```bash
!pip install nltk
!pip install spacy
!pip install tensorflow
```

# A. Tokenization using Python split() Function
## Code
```python
import nltk

text = "This tool is on a beta stage."
data = text.split()

for i in data:
    print(i)
```

# B. Tokenization using Regular Expression
## Code
```python
import nltk
from nltk.tokenize import RegexpTokenizer

tk = RegexpTokenizer('\s+', gaps=True)

text = "I Love to study NLP in python"
tokens = tk.tokenize(text)

print(tokens)
```

# C. Tokenization using NLTK
## Code
```python
import nltk
nltk.download('punkt')

from nltk.tokenize import word_tokenize

text = "I Love to study NLP in python"

tokens = word_tokenize(text)

print(tokens)
```

# D. Tokenization using SpaCy
## Code
```python
import spacy

nlp = spacy.blank("en")

text = "I love to study Natural Language Processing in Python"

doc = nlp(text)

words = [word.text for word in doc]

print(words)
```

# E. Tokenization using Keras
## Code
```python
import nltk
from tensorflow.keras.preprocessing.text import text_to_word_sequence

text = "I love to study Natural Language Processing in Python"

tokens = text_to_word_sequence(text)

print(tokens)
```