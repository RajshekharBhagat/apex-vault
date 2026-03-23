import nltk
 
nltk.download('punkt_tab')
 
from nltk import tokenize
 
# Define Grammar
grammar1 = nltk.CFG.fromstring("""
S -> VP
VP -> VP NP
NP -> Det NP
Det -> 'that'
NP -> singular Noun
NP -> 'flight'
VP -> 'Book'
""")
 
# Input Sentence
sentence = "Book that flight"
 
# Tokenization
all_tokens = tokenize.word_tokenize(sentence)
print("Tokens:", all_tokens)
 
# Parsing
parser = nltk.ChartParser(grammar1)
 
for tree in parser.parse(all_tokens):
    print(tree)
    tree.draw() # This line is not executable in Google collab. Run this program in other IDE.