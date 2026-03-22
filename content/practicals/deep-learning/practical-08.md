---
subject: Deep Learning
number: 8
title: Implementation of Data Augmentation Techniques
aim: Implementation of various data augmentation techniques on images.
---

## Code
```python
import cv2 
import numpy as np 
import matplotlib.pyplot as plt 

# Load and convert image 
image = cv2.imread('/content/pikacu.webp') 
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) 

# 1. Flipping 
horizontal_flip = cv2.flip(image, 1)  # 1 for horizontal flip 
vertical_flip = cv2.flip(image, 0)    # 0 for vertical flip 

# 2. Rotation 
(h, w) = image.shape[:2] 
center = (w // 2, h // 2) 
rotation_matrix = cv2.getRotationMatrix2D(center, 90, 1.0) 
rotated_image = cv2.warpAffine(image, rotation_matrix, (w, h)) 

# 3. Translation 
tx, ty = 50, 30 
translation_matrix = np.float32([[1, 0, tx], [0, 1, ty]]) 
translated_image = cv2.warpAffine(image, translation_matrix, (w, h)) 

# Helper function to display images 
def show_images(images, titles, rows, cols, figsize=(12, 8)): 
    plt.figure(figsize=figsize) 
    for i, (img, title) in enumerate(zip(images, titles)): 
        plt.subplot(rows, cols, i + 1) 
        plt.imshow(img) 
        plt.title(title) 
        plt.axis('off') 
    plt.tight_layout() 
    plt.show() 

# Display basic augmentations 
basic_images = [image, horizontal_flip, vertical_flip, rotated_image, translated_image] 
basic_titles = ['Original', 'Horizontal Flip', 'Vertical Flip', 'Rotation (90 deg)', 'Translation'] 
show_images(basic_images, basic_titles, 2, 3, figsize=(15, 10)) 

# 4. Scaling 
scaled_image = cv2.resize(image, None, fx=1.5, fy=1.5, interpolation=cv2.INTER_LINEAR) 

# 5. Salt and Pepper Noise 
def salt_and_pepper_noise(image, salt_prob, pepper_prob): 
    noisy_image = image.copy() 
    total_pixels = image.shape[0] * image.shape[1] 

    # Salt noise 
    num_salt = int(salt_prob * total_pixels) 
    coords_salt = [np.random.randint(0, i - 1, num_salt) for i in image.shape] 
    noisy_image[coords_salt[0], coords_salt[1], :] = 255 

    # Pepper noise 
    num_pepper = int(pepper_prob * total_pixels) 
    coords_pepper = [np.random.randint(0, i - 1, num_pepper) for i in image.shape] 
    noisy_image[coords_pepper[0], coords_pepper[1], :] = 0 

    return noisy_image 

noisy_image = salt_and_pepper_noise(image, 0.01, 0.01) 

# Display advanced augmentations 
def show_images_advanced(images, titles): 
    plt.figure(figsize=(14, 10)) 
    for i, (img, title) in enumerate(zip(images, titles)): 
        plt.subplot(2, 4, i + 1) 
        plt.imshow(img) 
        plt.title(title) 
        plt.axis('off') 
    plt.tight_layout() 
    plt.show() 

images = [scaled_image, noisy_image] 
titles = ["Scaled 1.5x", "Salt and Pepper Noise"] 
show_images_advanced(images, titles)