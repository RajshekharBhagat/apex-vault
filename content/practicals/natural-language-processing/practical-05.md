---
subject: Natural Language Processing
number: 5
title: WordNet and Semantic Relationship Analysis
aim: To explore the WordNet lexical database, study semantic relationships such as synonyms, antonyms, hyponyms, hypernyms, meronyms, entailments, and implement a program to find synonyms and antonyms of a given word.
---

## Installing
```bash
!pip install nltk
```

# A. Study of WordNet Dictionary
## Code
```python
import nltk
nltk.download('wordnet')

from nltk.corpus import wordnet as wn

print(wn.synsets('motorcar'))

print(wn.synset('car.n.01').lemma_names())
print(wn.synset('car.n.01').examples())
print(wn.synset('car.n.01').definition())

print(wn.synset('car.n.01').lemmas())
print(wn.lemma('car.n.01.automobile').synset())
print(wn.lemma('car.n.01.automobile'))
print(wn.lemma('car.n.01.automobile').name())
```

# B. Study of Semantic Relationships
## Code
```python
from nltk.corpus import wordnet as wn

print(wn.lemmas('car'))

for synset in wn.synsets('car'):
    print(synset.lemma_names())

print(wn.lemma('supply.n.02.supply').antonyms())
print(wn.lemma('rush.v.01.rush').antonyms())
print(wn.lemma('horizontal.a.01.horizontal').antonyms())

print(wn.synset('walk.v.01').entailments())
print(wn.synset('eat.v.01').entailments())

print(wn.synset('tree.n.01').member_holonyms())
print(wn.synset('tree.n.01').part_meronyms())
print(wn.synset('tree.n.01').substance_meronyms())

from nltk.corpus import wordnet

motorcar = wordnet.synset('motorcar.n.01')

print(motorcar.hypernyms())

types_of_motorcar = motorcar.hyponyms()
print(types_of_motorcar)

print(types_of_motorcar[0])

print(sorted([lemma.name() for synset in types_of_motorcar for lemma in synset.lemmas()]))
```

# C. Synonym and Antonym of Word "active"
## Code
```python
import nltk
from nltk.corpus import wordnet

print(wordnet.synsets("active"))

synonyms = []
antonyms = []

for syn in wordnet.synsets("active"):
    for lemma in syn.lemmas():
        synonyms.append(lemma.name())
        if lemma.antonyms():
            antonyms.append(lemma.antonyms()[0].name())

print("Synonyms:", set(synonyms))
print("Antonyms:", set(antonyms))
```