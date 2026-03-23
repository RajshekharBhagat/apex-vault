---
subject: Natural Language Processing
number: 10
title: NLP for Indian Languages
aim: To explore NLP techniques for Indian languages including Hindi word tokenization, sentence generation, and language identification.
---

## Installing
```bash
!pip install indic-nlp-library
!pip install -q transformers sentencepiece torch
!pip install -q langdetect
```

# A. Word Tokenization in Hindi
## Code
```python
from indicnlp.tokenize import indic_tokenize

hindi_text = "यह एनएलपी का व्यावहारिक अध्ययन है।"

tokens = indic_tokenize.trivial_tokenize(hindi_text)

print(tokens)
```

# B. Generate Similar Sentence from Hindi Text
## Code
```python
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

model_name = "google/mt5-small"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

text = "मैंआज बहुत खुश हूँ"

prompt = f"Generate a similar Hindi sentence: {text}"

inputs = tokenizer(prompt, return_tensors="pt").to(device)

outputs = model.generate(
    **inputs,
    max_length=50,
    do_sample=True,
    top_k=50,
    top_p=0.95,
    temperature=0.9,
    num_return_sequences=5
)

print("Output:")
for o in outputs:
    print("-", tokenizer.decode(o, skip_special_tokens=True))
```

# C. Identify Indian Language of Text
## Code
```python
from langdetect import detect, DetectorFactory
from langdetect.lang_detect_exception import LangDetectException

# Make detection deterministic
DetectorFactory.seed = 0

text = "પનીર કાપડિયા"

language_map = {
    "hi": "Hindi",
    "gu": "Gujarati",
    "en": "English",
    "mr": "Marathi",
    "ta": "Tamil",
    "te": "Telugu",
    "bn": "Bengali"
}

try:
    language_code = detect(text)
    language_name = language_map.get(language_code, language_code)

    print("Output:")
    print(language_name)

except LangDetectException:
    print("Could not detect language")
```