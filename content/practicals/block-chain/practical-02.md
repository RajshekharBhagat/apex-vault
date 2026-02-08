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

    def __str__(self):
        return(f"Transaction ID: {self.transaction_id},"
            f"Date: {self.date},"
            f"Amount: ${self.amount:.2f},"
            f"Description: {self.description}")

def create_transaction():
    transaction_id = input("Enter Transaction ID:")
    date = input("Enter Transaction Date(YYYY-MM-DD):")
    amount = float(input("Enter Transaction Amount:"))
    description = input("Enter Transaction Description:")
    return Transaction(transaction_id, date, amount, description)  

def display_transactions(transactions):
    if not transactions:
        print("No transactions to display")
    else:
        print("\nTransaction History:")
        for i, transaction in enumerate(transactions, start = 1):
            print(f"{i}, {transaction}")   

def main():
    transactions = []
    while True:
        print("\n Menu:")
        print("1. Create a new transaction")
        print("2. Display all transaction")
        print("3. Exit") 
        choice = input("Enter your choice:")
        if choice =='1':
            transaction = create_transaction()
            transactions.append(transaction)
            print("Transaction added successfully.")
        elif choice =='2':
            display_transactions(transactions)
        elif choice == '3':
            print("Exiting the program. Good Bye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__== "__main__":
    main()

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
        block_string = (str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash))
        return hashlib.sha256(block_string.encode()).hexdigest()

class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]   

    def create_genesis_block(self):
        return Block(0, time.time(), "Genesis BLock", "0")

    def get_latest_block(self):
        return self.chain[-1]

    def add_block(self, data):
        prev_block = self.get_latest_block()
        new_block = Block(index=prev_block.index + 1, timestamp=time.time(), data=data, previous_hash=prev_block.hash)
        self.chain.append(new_block)

if __name__ == "__main__":
    my_chain = Blockchain()
    my_chain.add_block("First transaction data")
    my_chain.add_block("Second transaction data")
    my_chain.add_block("Third transaction data")

    print("Blockcgain Created:\n")
    
    for block in my_chain.chain:
        print("------------------------------------\n")
        print(f"Block Index				: {block.index}")
        print(f"Timestamp				: {block.timestamp}")
        print(f"Data					: {block.data}")
        print(f"Previous Hash			: {block.previous_hash}")
        print(f"Current Hash			: {block.hash}")
        print("------------------------------------\n")

```