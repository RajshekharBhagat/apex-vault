---
subject: Deep Learning
number: 1
title: Loading and pre-processing data.
aim: Write a program to read and preprocess data.
---

## Code
```python

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

file_path = '/content/Iris.csv'
data = pd.read_csv(file_path)
line = "-------"

print("Dataset Shape (rows, columns):", data.shape)
print(line)
print("\nData types of Each Column:")
print(data.dtypes)
print(line)
print("\nNull Vlaues in Each Column:")
print(data.isnull().sum())
print(line)

data_cleaned = data.drop_duplicates()
print("\nShapes After Removing Duplicates(rows, columns):", data_cleaned.shape)
print(line)


#Bar plot
plt.figure(figsize=(8, 5))
sns.countplot(data=data_cleaned, x='Species', hue='Species', palette='coolwarm')
plt.title('Distribution of Species')
plt.xlabel('Species')
plt.ylabel('Count')
plt.show()


#Scatterplot
plt.figure(figsize=(8, 5))
sns.scatterplot(data=data_cleaned, x='SepalLengthCm', y='SepalWidthCm', hue='Species', palette='coolwarm')
plt.title('Scatter Plot of Sepal Dimensions')
plt.xlabel('Sepal Length(cm)')
plt.ylabel('Sepal Width(cm)')
plt.show()


#lineplot 
plt.figure(figsize=(8, 5))
sns.lineplot(data=data_cleaned[['SepalLengthCm', 'SepalWidthCm']], palette='coolwarm')
plt.title("line Plot of Sepal Dimensions")
plt.xlabel('Index')
plt.ylabel('Length/Width(cm)')
plt.show()

```