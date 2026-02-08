---
subject: blockchain
number: 1
title: Client Class + Transaction System
aim: Implement client key generation using RSA and a basic transaction class.
---

# Part A — Client Class (RSA Keys)

## Packages
```bash
pip install cryptography
pip install pycryptodome
```

## Code
```python

import Crypto
import Crypto.Random
from Crypto.Hash import SHA
from Crypto.PublicKey import RSA
from Crypto.Signature import PKCS1_v1_5
import binascii

class Client:

  def __init__(self):
    random_gen = Crypto.Random.new().read
    self._private_key = RSA.generate(1024, random_gen)
    self._public_key = self._private_key.publickey()
    self._signer = PKCS1_v1_5.new(self._private_key)

  @property

  def identity(self):
    return binascii.hexlify(self._public_key.exportKey(format='DER')).decode('ascii')

Alice = Client()
print(Alice.identity)

```

---

# Part B — Transaction Class

## Code
```python

class Transaction:

  def __init__(self, account_holder, balance=0) :
    self.account_holder = account_holder
    self.balance = balance

  def send_money(self, amount, recipient):
    if amount <= 0:
      return "Amount must be greateer than zero."
    if amount > self.balance:
      return "Insufficient balance."

    self.balance -= amount
    recipient.receive_money(amount)
    return f"Sent {amount} to {recipient.account_holder}. Remaining balance: {self.balance}."

  def receive_money(self, amount):
    if amount <= 0:
      return "Amount must be greater than zero."
    self.balance += amount
    return f"Received {amount}. New balance: {self.balance}."

  def __str__(self):
    return f"Account Holder: {self.account_holder}, Balance: {self.balance}"


account1 = Transaction("Alice", 1000)
account2 = Transaction("Bob",500)

print(account1.send_money(300, account2))
print(account1)
print(account2)

```