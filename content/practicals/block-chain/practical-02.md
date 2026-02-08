---
subject: blockchain
number: 2
title: Multiple Transactions + Simple Blockchain
aim: Create multiple transactions and implement genesis block.
---

# Part A — Multiple Transactions

```python
class Transaction:
    def __init__(self, transaction_id, date, amount, description):
        self.transaction_id = transaction_id
        self.date = date
        self.amount = amount
        self.description = description
```

---

# Part B — Blockchain with Genesis Block

```python
import hashlib
import time

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_string = str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash)
        return hashlib.sha256(block_string.encode()).hexdigest()
```