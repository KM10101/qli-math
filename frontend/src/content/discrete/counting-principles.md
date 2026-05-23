---
title: 基本计数原理
domain: 离散数学
route: 离散数学与结构思维
stage: 组合计数
order: 1
status: not
minutes: 9
summary: 计数原理研究“有多少种可能”，是组合数学和概率计算的基础。
prerequisites: [sets-and-operations]
next: [relations, recurrence]
---

## 为什么要学

算法复杂度、密码空间、测试用例组合和图结构枚举都需要计数思维。

## 加法原理

如果若干种情况互斥，总数等于各情况数量相加。

## 乘法原理

如果一个任务分成连续步骤完成，总数等于每一步选择数量相乘：

$$
|A	imes B|=|A|\cdot |B|
$$

## 例子

6 位数字验证码共有 $10^6$ 种。3 种主食和 4 种饮料的组合共有 $3	imes 4=12$ 种。

## 常见误区

使用加法原理时必须确认情形互斥，否则会重复计数。
