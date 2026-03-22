---
subject: Deep Learning
number: 6
title: Edge Detection using CNN with Simple Filters
aim: Detect the edge of grayscale image using CNN with simple filters.
---

## Code
```python
import numpy as np 
import matplotlib.pyplot as plt 
from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Conv2D 
import cv2 

# Load and preprocess the grayscale image 
def preprocess_image(image_path): 
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE) 
    img = cv2.resize(img, (128, 128)) 
    img = img.astype('float32') / 255.0 
    img = np.expand_dims(img, axis=(0, -1))  # (1, 128, 128, 1) 
    return img 

# Define edge-detection filter (Laplacian) 
edge_filter = np.array( 
    [[-1, -1, -1], 
     [-1,  8, -1], 
     [-1, -1, -1]], 
    dtype='float32' 
).reshape((3, 3, 1, 1)) 

# Build CNN model 
model = Sequential([ 
    Conv2D( 
        filters=1, 
        kernel_size=(3, 3), 
        padding='same', 
        use_bias=False, 
        input_shape=(128, 128, 1) 
    ) 
]) 

# Set filter weights 
model.layers[0].set_weights([edge_filter]) 
model.layers[0].trainable = False 

# Load image 
image_path = "/content/pikacu.webp" 
input_image = preprocess_image(image_path) 

# Apply filter 
output_image = model.predict(input_image) 

# Display images 
plt.figure(figsize=(10, 5)) 

plt.subplot(1, 2, 1) 
plt.imshow(input_image[0, :, :, 0], cmap='gray') 
plt.title("Original Image") 
plt.axis("off") 

plt.subplot(1, 2, 2) 
plt.imshow(output_image[0, :, :, 0], cmap='gray') 
plt.title("Edge Detected Image") 
plt.axis("off") 

plt.show()