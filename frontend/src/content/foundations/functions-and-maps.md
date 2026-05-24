---
title: 函数、映射与复合
domain: 数学基础
route: 数学基础与证明思维
stage: 集合与映射
order: 3
status: read
minutes: 9
summary: 函数是从一个集合到另一个集合的确定性对应：每个输入都有唯一输出。
prerequisites: [sets-and-operations]
next: [vectors, limits]
---

## 为什么要学

微积分研究函数的变化，线性代数研究特殊函数“线性映射”，离散数学研究集合之间的结构关系。

## 直觉

函数像一个黑盒：输入来自定义域，输出落在陪域。复合函数就是把一个黑盒的输出接到另一个黑盒的输入。

## 定义

映射 $f:A\to B$ 指每个 $a\in A$ 都唯一对应一个 $f(a)\in B$。若 $g:B\to C$，则复合 $g\circ f:A\to C$ 定义为：

$$
(g\circ f)(a)=g(f(a))
$$

## 例子

令 $f(x)=x^2$，$g(x)=x+1$，则：

$$
(g\circ f)(x)=x^2+1,\qquad (f\circ g)(x)=(x+1)^2
$$

所以函数复合通常不满足交换律。

## 工程类比

`parse(text) -> AST`，`compile(AST) -> bytecode`，那么 `compile ∘ parse` 就是完整编译流程。
