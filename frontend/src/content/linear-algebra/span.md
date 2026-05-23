---
title: 张成空间
domain: 线性代数
route: 线性代数的思想
stage: 向量与线性组合
order: 3
status: not
minutes: 9
summary: 一组向量所有线性组合能到达的地方，叫做它们张成的空间。
prerequisites: [linear-combination]
next: [linear-independence, matrix-as-linear-map]
---

## 直觉

给你几支方向箭头，如果只允许缩放和相加，你能走到的所有位置就是这些向量张成的空间。

## 定义

向量组 $S=\{v_1,\dots,v_k\}$ 的张成空间是：

$$
\operatorname{span}(S)=\left\{\sum_{i=1}^k a_i v_i\mid a_i\in\mathbb{R}\right\}
$$

## 例子

- 平面中一个非零向量张成一条过原点的直线。
- 平面中两个不共线向量张成整个二维平面。

## 和方程组的关系

$Ax=b$ 是否有解，等价于 $b$ 是否在 $A$ 的列向量张成空间中。
