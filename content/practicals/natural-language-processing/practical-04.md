---
subject: Natural Language Processing
number: 4
title: Word Mapping and Tagging Techniques in NLP
aim: To map words to properties using Python dictionaries and implement tagging techniques including Default Tagger, Regular Expression Tagger, and Unigram Tagger.
---

## Installing
```bash
!pip install nltk
```

# A. Map Words to Properties Using Python Dictionaries
## Code
```python
pos = {}

pos['colorless'] = 'ADJ'
pos['ideas'] = 'N'
pos['sleep'] = 'V'
pos['furiously'] = 'ADV'

print(pos['colorless'])

print(list(pos))
print(sorted(pos))

print([w for w in pos if w.endswith('s')])

for word in sorted(pos):
    print(word + ":", pos[word])

print(pos.keys())
print(pos.values())
print(pos.items())
print(pos)
```

# B. Tagging Techniques

## a. Default Tagger
```python
import nltk
from nltk.corpus import brown

nltk.download('brown')
nltk.download('punkt')
nltk.download('punkt_tab')

tags = [tag for (word, tag) in brown.tagged_words(categories='news')]
print(nltk.FreqDist(tags).max())

raw = 'I do not like green eggs and ham, I do not like them Sam I am!'
tokens = nltk.word_tokenize(raw)

default_tagger = nltk.DefaultTagger('NN')
print(default_tagger.tag(tokens))

brown_tagged_sents = brown.tagged_sents(categories='news')

accuracy = default_tagger.evaluate(brown_tagged_sents)
print("Default tagger accuracy:", accuracy)
```

## b. Regular Expression Tagger
```python
import nltk

patterns = [
    (r'.*ing$', 'VBG'),
    (r'.*ed$', 'VBD'),
    (r'.*es$', 'VBZ'),
    (r'.*ould$', 'MD'),
    (r'.*\'s$', 'NN$'),
    (r'.*s$', 'NNS'),
    (r'^-?[0-9]+(.[0-9]+)?$', 'CD'),
    (r'.*', 'NN')
]

regexp_tagger = nltk.RegexpTagger(patterns)

from nltk.corpus import brown

brown_sents = brown.sents(categories='news')
print(regexp_tagger.tag(brown_sents[3]))

brown_tagged_sents = brown.tagged_sents(categories='news')

accuracy = regexp_tagger.evaluate(brown_tagged_sents)
print("Regexp tagger accuracy:", accuracy)
```

## c. Unigram Tagger
```python
import nltk
from nltk.corpus import brown

brown_tagged_sents = brown.tagged_sents(categories='news')
brown_sents = brown.sents(categories='news')

unigram_tagger = nltk.UnigramTagger(brown_tagged_sents)

print(unigram_tagger.tag(brown_sents[2007]))

accuracy = unigram_tagger.evaluate(brown_tagged_sents)
print("Unigram tagger accuracy:", accuracy)
```