---
subject: blockchain
number: 3
title: Mining Function
aim: Create mining function with proof-of-work.
---

## Code
```python
import hashlib
import time

def compute_hash(data, nonce):
    return hashlib.sha256(f"{data}{nonce}".encode()).hexdigest()

def mine_block(data, difficulty):
    target = "0" * difficulty
    nonce = 0

    while True:
        hash_value = compute_hash(data, nonce)
        if hash_value.startswith(target):
            return nonce, hash_value
        nonce += 1
```