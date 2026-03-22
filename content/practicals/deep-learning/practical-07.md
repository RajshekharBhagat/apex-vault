---
subject: Deep Learning
number: 7
title: Number Recognition from Image using CNN
aim: Using CNN, implement number recognition from number images.
---

## Code
```python
from keras.datasets import mnist 
from keras.models import Sequential 
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense 
from keras.utils import to_categorical 
import matplotlib.pyplot as plt 

(x_train, y_train), (x_test, y_test) = mnist.load_data() 
plt.imshow(x_train[2], cmap='gray') 
plt.show() 

print("original shape: ", x_train.shape) 

x_Train = x_train.astype('float32') / 255.0 
x_Test = x_test.astype('float32') / 255.0 

x_Train = x_Train.reshape(60000, 28, 28, 1) 
x_Test = x_Test.reshape(10000, 28, 28, 1) 

y_Train = to_categorical(y_train, 10) 
y_Test = to_categorical(y_test, 10) 

model = Sequential([ 
    Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(28, 28, 1)), 
    MaxPooling2D(pool_size=(2, 2)), 
    Conv2D(64, kernel_size=(3, 3), activation='relu'), 
    MaxPooling2D(pool_size=(2, 2)), 
    Flatten(), 
    Dense(128, activation='relu'), 
    Dense(10, activation='softmax') 
]) 

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy']) 

model.fit(x_Train, y_Train, validation_data=(x_Test, y_Test), epochs=5, batch_size=64) 

print(model.predict(x_test[:4])) 
print(y_test[:4]) 

plt.imshow(x_test[6], cmap='gray') 
plt.show() 

loss, accuracy = model.evaluate(x_Test, y_Test) 
print(f"Test Loss: {loss:.4f}") 
print(f"Test Accuracy: {accuracy * 100:.2f}%")