---
subject: Natural Language Processing
number: 3
title: Creation and Analysis of Custom and Tagged Corpora
aim: To create a custom corpus, explore tagged corpora using different methods, and analyze text to identify the most frequent noun tags.
---

## Installing
```bash
!pip install nltk
```

# A. Create and Own Corpus (Plain Text)
## Code
```python
import nltk
from nltk.corpus import PlaintextCorpusReader
from nltk import FreqDist
 
nltk.download('punkt')
 
corpus_root = r"/content"
corpus = PlaintextCorpusReader(corpus_root, ".*\.csv")
 
print("Files in corpus:", corpus.fileids())
 
 # download link: https://www.kaggle.com/datasets/huyngohoang/housingcsv?resource=download
words = corpus.words('housing.csv')
print("\nFirst 20 words:", words[:20])
print("\nTotal number of words:", len(words))
 
fdist = FreqDist(w.lower() for w in words)
print("\n10 most common words:", fdist.most_common(10))
```

# B. Study of Tagged Corpora
## Code
```python
import nltk

nltk.download('brown')
print(nltk.corpus.brown.tagged_words())

nltk.download('conll2000')
print(nltk.corpus.conll2000.tagged_words())

nltk.download('treebank')
print(nltk.corpus.treebank.tagged_words())
print(nltk.corpus.treebank.tagged_sents())
```

# C. Most Frequent Noun Tags
## Code
```python
import nltk
nltk.download('treebank')

wsj = nltk.corpus.treebank.tagged_words()

word_tag_fd = nltk.FreqDist(wsj)

nouns = [word + "/" + tag for (word, tag) in word_tag_fd if tag.startswith('N')]

print(nouns[:20])
```