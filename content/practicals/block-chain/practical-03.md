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
  block_string = f"{data}{nonce}".encode()
  return hashlib.sha256(block_string).hexdigest()

def mine_block(data, difficulty):
  target = "0" * difficulty
  nonce = 0
  start_time = time.time()

  print(f"Minning started... Difficulty: {difficulty}")

  while True:
    hash_value = compute_hash(data, nonce)
    if hash_value.startswith(target):
      end_time = time.time()

      print(f"Blockmined!")
      print(f"Nonce found: {nonce}")
      print(f"Hash : {hash_value}") # Corrected from hash_value to hash_result
      print(f"Time taken: {end_time - start_time:.4f} seconds")
      
      return nonce, hash_value
    nonce += 1

if __name__ == "__main__":
  data = "Hello, this is my block data!"
  difficulty = 4
  nonce, block_hash = mine_block(data, difficulty)

  print("\nTesting verification...")

  test_hash = compute_hash(data, nonce)

  print("Valid hash?", test_hash.startswith("0" * difficulty))

```