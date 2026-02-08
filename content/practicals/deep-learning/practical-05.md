---
subject: Deep Learning
number: 5
title: Activation Functions.
aim: Types of Activation functions in Nerual Network
---

# A. Sigmoid
## Code
```python

import numpy as np
import matplotlib.pyplot as plt

def sigmoid(x) :
  return 1 / (1 + np.exp(-x))

x = np.linspace(-10, 10, 100)
y = sigmoid(x)

print("input: ", -2)
print("Sigmoid Output: ", sigmoid(-2))

plt.plot(x, y, label='Sigmoid Function')
plt.xlabel('Input(x)')
plt.ylabel('Output(y)')
plt.title('Sigmoid Activation Function')
plt.grid()
plt.legend()
plt.show()

```

# B. Tanh
## Code
```python

import numpy as np
import matplotlib.pyplot as plt

def tanh(x):
  return np.tanh(x)

x = np.linspace(-10, 10, 100)
y = tanh(x)

print("input: ", -2)
print("Tanh Output: ", tanh(-2))

plt.plot(x, y, label="Tanh Function")
plt.title('Tanh Activation Function')
plt.xlabel('Input(x)')
plt.ylabel('Output(y)')
plt.grid()
plt.legend()

```

# C. Relu
## Code
```python

import numpy as np

def relu(x):
  return np.maximum(0, x)

inputs = np.array([-2, 0 , -1.0, 0.0, 1.0, 2.0])
outputs = relu(inputs)

print("Input: ", inputs)
print("Output: ", outputs)

```

# D. Sequential Model
## Code
```python

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_dim = 10),
    Dense(32, activation='relu'),
    Dense(1)
])

model.summary()

```