---
subject: Natural Language Processing
number: 2
title: Exploration of NLTK Corpora.
aim: To study various NLTK corpora such as Brown, Inaugural, Reuters, and UDHR using different access methods.
---

## Installing
```bash
!pip install nltk
```

# A. Brown Corpus
## Code
```python
import nltk
import matplotlib.pyplot as plt


nltk.download('brown')
from nltk.corpus import brown

print(brown.words())
print(brown.categories())

print(brown.words(categories='news'))
print(brown.words(categories='religion'))
print(brown.words(categories='romance'))

print(brown.words(fileids=['cg22']))
print(brown.words(categories=['news', 'editorial', 'reviews']))

print(brown.sents())

news_text = brown.words(categories='news')
fdist = nltk.FreqDist(w.lower() for w in news_text)

modals = ['can', 'could', 'may', 'might', 'must', 'will']
for m in modals:
    print(m + ':', fdist[m])

cfd = nltk.ConditionalFreqDist(
    (genre, word)
    for genre in brown.categories()
    for word in brown.words(categories=genre)
)

genres = ['news', 'religion', 'hobbies', 'science_fiction', 'romance', 'humor']
modals = ['can', 'could', 'may', 'might', 'must', 'will']

cfd.tabulate(conditions=genres, samples=modals)
```

# B. Reuters Corpus
## Code
```python
nltk.download('reuters')
from nltk.corpus import reuters

print(reuters.fileids())
print(reuters.categories())

print(reuters.categories('training/9865'))
print(reuters.categories(['training/9865', 'training/9880']))

print(reuters.fileids('barley'))
print(reuters.fileids(['barley', 'corn']))

print(reuters.words('training/9865')[:14])

cfd = nltk.ConditionalFreqDist(
    (target, fileid[:4])
    for fileid in reuters.fileids()
    for w in reuters.words(fileid)
    for target in ['barley', 'corn']
    if w.lower() == target
)

cfd.plot()
plt.show()
```

# C. Inaugural Corpus
## Code
```python
nltk.download('inaugural')
from nltk.corpus import inaugural

print(inaugural.fileids())
print([fileid[:4] for fileid in inaugural.fileids()])

cfd = nltk.ConditionalFreqDist(
    (target, fileid[:4])
    for fileid in inaugural.fileids()
    for w in inaugural.words(fileid)
    for target in ['america', 'citizen']
    if w.lower().startswith(target)
)

cfd.plot()
plt.show()
```

# D. UDHR Corpus
## Code
```python
nltk.download('udhr')
from nltk.corpus import udhr

languages = ['Chickasaw', 'English', 'German_Deutsch']

cfd = nltk.ConditionalFreqDist(
    (lang, len(word))
    for lang in languages
    for word in udhr.words(lang + '-Latin1')
)

cfd.plot(cumulative=True)
plt.show()
```