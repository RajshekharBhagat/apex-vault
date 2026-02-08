---
subject: Deep Learning
number: 4
title: X-OR Problem
aim: X-OR Problem in Neural Network
---

## Packages
```bash
!pip install --upgrade tensorflow
```

## Code
```python

import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Dense    

X = np.array([[0, 0],[0, 1],[1, 0],[1, 1]])
Y = np.array([[0], [1],[1],[0]])

model = Sequential()
model.add(Dense(2, input_dim=2, activation='relu'))
model.add(Dense(2, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

model.compile(optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy'])

print("\n")
print("12 man")

model.fit(X, Y, epochs=100, verbose=1) 
print("\n")
print('Expected:', [i[0] for i in Y])
print('Predicted:', [int(round(i[0])) for i in model.predict(X)])


```

