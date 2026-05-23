---
title: 命题与逻辑连接词
domain: 数学基础
route: 数学基础与证明思维
stage: 数学语言
order: 1
status: master
minutes: 7
summary: 命题是可以判断真假的陈述；逻辑连接词帮助我们把简单命题组合成复杂命题。
prerequisites: []
next: [sets-and-operations, functions-and-maps]
---

## 为什么要学

读数学定义和定理时，最先要识别的是：**条件是什么，结论是什么**。命题逻辑是理解充分条件、必要条件、反证法和归纳证明的基础。

## 直觉

把命题看成一个只能输出 `true/false` 的小程序：

- “2 是偶数”输出 `true`；
- “所有素数都是奇数”输出 `false`，因为 2 是反例；
- “如果 n 是 4 的倍数，那么 n 是偶数”是一个“输入条件推出输出结论”的规则。

## 形式定义

命题是具有确定真假值的陈述。若 $P,Q$ 是命题，则下面表达式仍然是命题：

$$
\neg P,\quad P\land Q,\quad P\lor Q,\quad P\Rightarrow Q,\quad P\Leftrightarrow Q
$$

## 关键例子

- $P\land Q$：两个条件都必须成立。
- $P\lor Q$：至少一个条件成立；数学里通常是“包含或”。
- $P\Rightarrow Q$：如果 $P$ 成立，那么 $Q$ 成立。

## 常见误区

1. $P\Rightarrow Q$ 为真，不代表 $Q\Rightarrow P$ 为真。
2. “或”通常允许两个命题同时为真。
3. 反例只需要一个，就足以推翻“所有……”形式的命题。

## 练习

1. 判断“若 $n$ 是偶数，则 $n^2$ 是偶数”的逆命题是否成立。
2. 写出“所有程序员都懂数学”的否定命题。
