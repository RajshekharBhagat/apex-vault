---
subject: Natural Language Processing
number: 8
title: Part-of-Speech Tagging and Named Entity Recognition
aim: To perform Part-of-Speech tagging, chunking, and Named Entity Recognition (NER) using both user-defined text and NLTK corpora.
---

## Installing
```bash
!pip install nltk
!pip install spacy
```

# A. POS Tagging and Chunking of User Defined Text
## Code
```python
import nltk
nltk.download('averaged_perceptron_tagger_eng')
nltk.download('maxent_ne_chunker_tab')
from nltk import tokenize, tag, chunk

# Download required resources
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('words')

para = "Today we will learn NLTK."

# Sentence Tokenization
sents = tokenize.sent_tokenize(para)
print("\nSentence Tokenization")
print("====================")
print(sents)

# Word Tokenization
print("\nWord Tokenization")
print("================")
all_words = []
for sent in sents:
    words = tokenize.word_tokenize(sent)
    all_words.append(words)
    print(words)

# POS Tagging
tagged_words = []
for words in all_words:
    tagged_words.append(tag.pos_tag(words))

print("\nPOS Tagging")
print("===========")
print(tagged_words)

# Chunking (NER)
print("\nChunking")
print("========")
for tagged in tagged_words:
    tree = chunk.ne_chunk(tagged)
    tree.pretty_print()
```

# B. Named Entity Recognition using SpaCy
## Code
```python
import spacy

nlp = spacy.load("en_core_web_sm")

text = (
    "When Sebastian Thrun started working on self-driving cars at "
    "Google in 2007, few people outside of the company took him "
    "seriously. I can tell you very senior CEOs of major American "
    "car companies would shake my hand and turn away because I wasn't "
    "worth talking to, said Thrun, in an interview with Recode earlier "
    "this week."
)

doc = nlp(text)

print("Noun phrases:", [chunk.text for chunk in doc.noun_chunks])
print("Verbs:", [token.lemma_ for token in doc if token.pos_ == "VERB"])
```

# C. NER with Diagram using NLTK Treebank Corpus
## Code
```python
import nltk

nltk.download('treebank')

from nltk.corpus import treebank_chunk

print(treebank_chunk.tagged_sents()[0])
print(treebank_chunk.chunked_sents()[0])

treebank_chunk.chunked_sents()[0].draw() # This line is not executable in Google collab. Run this program in other IDE.
```