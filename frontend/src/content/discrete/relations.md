---
title: 关系与等价关系
domain: 离散数学
route: 离散数学与结构思维
stage: 集合上的结构
order: 2
status: not
minutes: 10
summary: 关系描述集合元素之间是否有关联；等价关系把对象划分为若干等价类。
prerequisites: [sets-and-operations]
next: [graphs]
---

## 直觉

关系像一张表，记录哪些对象对满足某种规则。等价关系像“分组规则”，把可互相替代的对象放到同一组。

## 定义

集合 $A$ 上的二元关系是 $A	imes A$ 的子集：

$$
R\subseteq A	imes A
$$

若关系满足自反、对称、传递，则为等价关系。

## 例子

整数上的模同余 $a\equiv b\pmod n$ 是等价关系，会把整数分成 $n$ 个余数类。

## 应用

数据库关系、权限关系、图的边、类型系统和知识图谱都依赖关系语言。
