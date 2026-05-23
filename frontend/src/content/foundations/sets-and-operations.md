---
title: 集合与集合运算
domain: 数学基础
route: 数学基础与证明思维
stage: 集合与映射
order: 2
status: master
minutes: 8
summary: 集合是一批对象的整体；并、交、差、补是描述对象范围的基本语言。
prerequisites: [propositions-and-logic]
next: [functions-and-maps, relations]
---

## 为什么要学

函数、关系、概率样本空间、向量空间、图的顶点集都依赖集合语言。没有集合，就很难严谨地说清楚“对象范围”。

## 直觉

集合像一次筛选结果：满足某个条件的对象被放进同一个容器。集合运算就是对筛选结果做组合。

## 形式定义

若 $x$ 是集合 $A$ 的元素，记作 $x\in A$。常见集合运算包括：

$$
A\cup B,\quad A\cap B,\quad A\setminus B,\quad A^c
$$

## 例子

设 $A$ 是所有偶数，$B$ 是所有 3 的倍数，则：

- $A\cap B$ 是所有 6 的倍数；
- $A\cup B$ 是所有“偶数或 3 的倍数”；
- $A\setminus B$ 是所有“偶数但不是 3 的倍数”。

## 和网站知识库的关系

在这个项目里，“线性代数”领域是一组知识点，“已掌握”状态也是一组知识点。它们的交集就是“已掌握的线性代数知识点”。

## 常见误区

- $\in$ 表示“元素属于集合”，$\subseteq$ 表示“集合包含于集合”。
- 空集 $\varnothing$ 不是错误对象，它是非常重要的边界情况。
