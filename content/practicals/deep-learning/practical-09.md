---
subject: Deep Learning
number: 9
title: Implementation of RNN for Sequence Prediction
aim: Implement RNN to predict the next value in a sequence for time series or number prediction.
---

## Code
```python
import numpy as np 
import matplotlib.pyplot as plt 
from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import SimpleRNN, Dense 

# Input sequence data
X = np.array([[1, 2, 3], 
              [2, 3, 4], 
              [3, 4, 5], 
              [4, 5, 6]]) 

y = np.array([4, 5, 6, 7]) 

# Reshape input to [samples, time steps, features]
X = X.reshape((X.shape[0], X.shape[1], 1)) 

# Build RNN model
model = Sequential() 
model.add(SimpleRNN(10, activation='relu', input_shape=(3, 1))) 
model.add(Dense(1)) 

# Compile model
model.compile(optimizer='adam', loss='mse') 

# Train model
model.fit(X, y, epochs=200, verbose=0) 

# Test input
test_input = np.array([[5, 6, 7]]) 
test_input = test_input.reshape((1, 3, 1)) 

# Prediction
prediction = model.predict(test_input) 
print("Predicted value:", prediction)