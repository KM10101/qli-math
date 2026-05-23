---
title: 矩阵作为线性变换
domain: 线性代数
route: 线性代数的思想
stage: 矩阵与线性变换
order: 4
status: not
minutes: 10
summary: 矩阵不是一张数字表，而是把向量映射到向量的线性函数。
prerequisites: [linear-combination, functions-and-maps]
next: [derivative]
---

## 直觉

矩阵像一个空间变形器：它可以旋转、缩放、剪切，把整个空间按线性规则搬到新位置。

## 定义

矩阵 $A$ 定义映射：

$$
x\mapsto Ax
$$

若 $T(u+v)=T(u)+T(v)$ 且 $T(cv)=cT(v)$，则 $T$ 是线性变换。

## 例子

$$
\begin{pmatrix}2&0\\0&3\end{pmatrix}
$$

会把 $x$ 方向放大 2 倍，把 $y$ 方向放大 3 倍。

## 常见误区

矩阵乘法顺序代表变换复合顺序，通常不能交换。
