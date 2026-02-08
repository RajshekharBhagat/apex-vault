---
subject: Deep Learning
number: 3
title: Metrix - More Metrix Operations.
aim: Perform the following :-
---

# A. Find Eigen values and Eigen vectors.

## Code
```python
import numpy as np

matrix = np.array(([1, 2, 3],
                   [0, -2, 6],
                   [0, 00, -3]))

eigenvlauess, eigenvectors = np.linalg.eig(matrix)

print(matrix)

print("_Eigen vlaues:_")
print(eigenvlauess)

print("_Eigen vectors:_")
print(eigenvectors)


```

# B. Check for linear dependent and independent variables.
## Code
```python

import numpy as np

Vector_matrix = np.array([[1,2,3],[3,-2,1],[4,-6,5]])
rank = np.linalg.matrix_rank(Vector_matrix)

if rank == Vector_matrix.shape[0]:
  print("vector are linearly independent")
else:
  print("vector are linerly dependent")

```
# C. Matrix Transpose
## Code
```python

import numpy as np

mat = np.array(([1, 2, 3], [4, 5, 6]))
t_mat = np.transpose(mat)

print("_original matrix:_")
print(mat)

print("_transpose matrix:_")
print(t_mat)


```
# D. Find Diagonal Matrix
## Code
```python

import numpy as np

mat2 = np.array([[1,2,3],[4,5,6],[7,8,9]])
d_mat = np.diag(mat2)

print("___matrix:___")
print(mat2)

print("___diagonal of matrix:___")
print(d_mat)


```

# E. Find triangular matrix
## Code
```python

import numpy as np

mat3 = np.array([[1,2,3],[4,5,6],[7,8,9]])
upper_tri_mat = np.triu(mat3)
lower_tri_mat = np.tril(mat3)

print("___Upper Triangular Matrix:___")
print(upper_tri_mat)

print("___Lower Triangular Matrix:___")
print(lower_tri_mat)


```

# F. Perform orthogonal matrix
## Code
```python

import numpy as np

matrix = np.array([[1, 0], [0, -1]])
q,r = np.linalg.qr(matrix)
is_orthogonal = np.allclose(np.dot(q, q.T), np.eye(matrix.shape[0]))

print("_orginal matrix:_")
print(matrix)

print("_orthogonal matrix(Q from QR decomposition):_")
print(q)

print("_is Q orthogonal?_")
print(is_orthogonal)


```

