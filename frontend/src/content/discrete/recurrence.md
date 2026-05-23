---
title: 递推关系
domain: 离散数学
route: 离散数学与结构思维
stage: 递推与归纳
order: 3
status: not
minutes: 10
summary: 递推关系用前面的项定义后面的项，是描述离散过程演化的常见方式。
prerequisites: [proof-methods]
next: [graphs]
---

## 直觉

递推像状态更新规则：知道初始状态和更新方式，就能一步步生成整个序列。

## 定义

若序列 $a_n$ 由若干前项和 $n$ 的函数确定，则称其满足递推关系。

## 例子

斐波那契数列：

$$
F_0=0,\quad F_1=1,\quad F_n=F_{n-1}+F_{n-2}
$$

归并排序复杂度：

$$
T(n)=2T(n/2)+O(n)
$$

## 应用

递推是分析递归算法复杂度和动态规划状态转移的标准语言。
