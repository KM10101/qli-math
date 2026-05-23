---
title: 线性组合
domain: 线性代数
route: 线性代数的思想
stage: 向量与线性组合
order: 2
status: doing
minutes: 8
summary: 线性组合就是用一组向量按比例相加，生成一个新的向量。
prerequisites: [vectors]
next: [span, linear-independence]
interactive: linear-combination
---

## 为什么要学

它是理解**张成空间**、**线性相关**、**基**和**维数**的起点。几乎所有线性代数的核心概念，都建立在“把向量按比例加起来”这一个动作之上。

## 形式定义

给定向量 $v_1,\dots,v_n$ 与标量 $a_1,\dots,a_n$，表达式

$$
a_1v_1+a_2v_2+\cdots+a_nv_n
$$

称为这些向量的一个线性组合。

## 例子

若 $v_1=(2,1)$，$v_2=(-1,2)$，则：

$$
2v_1-v_2=2(2,1)-(-1,2)=(5,0)
$$

## 应用

神经网络中常见的 $w_1x_1+w_2x_2+\cdots+w_nx_n$ 本质上就是输入特征的线性组合。

## 常见误区

- 系数可以是 0 或负数，不只是“权重平均”。
- 线性组合是一个动作；线性相关描述向量组之间的关系。
