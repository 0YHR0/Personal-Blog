---
title: Ch00 Practice2
date: 2022-06-14
tags:
 - DL
categories:
 - DL

---

# Ch00 Practice2

定义sigmoid函数和他的导数

```py
import numpy as np


def sigmoid(x: np.array):
    return 1 / (1 + np.exp(-x))


def derivative_sigmoid(x: np.array):
    return np.exp(-x) * np.power((1 + np.exp(-x)), -2)


if __name__ == '__main__':
    print(1)
    test = np.ones([2, 2])
    print(derivative_sigmoid(test))
```



绘制图像：

```py
plt.figure(figsize=(5, 5))
plt.title("function")
x = np.linspace(-30, 30, 500)
y1 = sigmoid(x)
y2 = derivative_sigmoid(x)
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--', label='sigmoid')
plt.plot(x, y2, color='blue', linewidth=1.0, linestyle='--', label='derivative_sigmoid')
plt.legend()
plt.show()
```

