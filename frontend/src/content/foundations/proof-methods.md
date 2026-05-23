---
title: 常见证明方法
domain: 数学基础
route: 数学基础与证明思维
stage: 证明训练
order: 4
status: review
minutes: 10
summary: 证明方法是一套把假设可靠地变成结论的套路。
prerequisites: [propositions-and-logic]
next: [linear-independence, recurrence]
---

## 为什么要学

学习数学不能只记结论。你需要知道结论为什么成立，以及条件缺失时为什么可能失败。

## 主要方法

### 直接证明

从假设出发，通过定义、已知定理和代数变形推出结论。

### 逆否证明

证明 $P\Rightarrow Q$ 时，可以改证：

$$
\neg Q\Rightarrow \neg P
$$

二者逻辑等价。

### 反证法

假设结论不成立，然后推出矛盾。

### 数学归纳法

证明关于自然数的命题时：

1. 证明基础情形；
2. 假设 $P(k)$ 成立；
3. 推出 $P(k+1)$ 成立。

## 常见误区

- 反证法不是随便假设一个相反命题，而是假设“结论的否定”。
- 归纳步骤必须真正用到归纳假设。
