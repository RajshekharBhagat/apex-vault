---
subject: Natural Language Processing
number: 6
title: Stop Words Handling and Noun Comparison
aim: To compare nouns and perform text preprocessing by handling stop words using NLTK, Gensim, and SpaCy libraries.
---

## Installing
```bash
!pip install nltk
!pip install gensim
!pip install spacy
```

# A. Compare Two Nouns
## Code
```python
import nltk
from nltk.corpus import wordnet

nltk.download('wordnet')

syn1 = wordnet.synsets('football')
syn2 = wordnet.synsets('soccer')

for s1 in syn1:
    for s2 in syn2:
        print("Path similarity of:")
        print(s1, '(', s1.pos(), ')', '[', s1.definition(), ']')
        print(s2, '(', s2.pos(), ')', '[', s2.definition(), ']')
        print("is", s1.path_similarity(s2))
        print()
```

# B. Handling Stop Words

## 1. Using NLTK Stopwords
```python
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('stopwords')
nltk.download('punkt')

print(stopwords.words('english'))

text = "Yashesh like to play football, however he is not too fond of tennis."
text_tokens = word_tokenize(text)

# Remove default stopwords
tokens_without_sw = [word for word in text_tokens if word not in stopwords.words('english')]
print(tokens_without_sw)

# Add stopword
all_stopwords = stopwords.words('english')
all_stopwords.append('play')

tokens_without_sw = [word for word in text_tokens if word not in all_stopwords]
print(tokens_without_sw)

# Remove stopword
all_stopwords.remove('not')

tokens_without_sw = [word for word in text_tokens if word not in all_stopwords]
print(tokens_without_sw)
```

## 2. Using Gensim Stopwords
```python
import gensim
from gensim.parsing.preprocessing import remove_stopwords, STOPWORDS
from nltk.tokenize import word_tokenize

text = "Yashesh likes to play football, however he is not too fond of tennis."

# Remove stopwords
filtered_sentence = remove_stopwords(text)
print(filtered_sentence)

print(STOPWORDS)

# Add stopwords
all_stopwords_gensim = STOPWORDS.union(set(['likes', 'play']))

text_tokens = word_tokenize(text)
tokens_without_sw = [word for word in text_tokens if word not in all_stopwords_gensim]
print(tokens_without_sw)

# Remove stopword from list
sw_list = {"not"}
all_stopwords_gensim = STOPWORDS.difference(sw_list)

text = "Yahesh likes to play football, however he is not too fond of tennis."
text_tokens = word_tokenize(text)

tokens_without_sw = [word for word in text_tokens if word not in all_stopwords_gensim]
print(tokens_without_sw)
```

## 3. Using SpaCy Stopwords
```python
import spacy
import nltk
from nltk.tokenize import word_tokenize

nltk.download('punkt')

import spacy.cli
spacy.cli.download("en_core_web_sm")

sp = spacy.load('en_core_web_sm')

all_stopwords = sp.Defaults.stop_words

# Add stopword
all_stopwords.add("play")

text = "Yashesh likes to play football, however he is not too fond of tennis."
text_tokens = word_tokenize(text)

tokens_without_sw = [word for word in text_tokens if word.lower() not in all_stopwords]
print(tokens_without_sw)

# Remove stopword
all_stopwords.remove('not')

tokens_without_sw = [word for word in text_tokens if word.lower() not in all_stopwords]
print(tokens_without_sw)
```