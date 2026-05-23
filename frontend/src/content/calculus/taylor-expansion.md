---
title: Taylor 展开
domain: 微积分
route: 微积分与连续变化
stage: 近似与展开
order: 4
status: not
minutes: 11
summary: Taylor 展开用多项式在某一点附近近似一个复杂函数。
prerequisites: [derivative]
next: [matrix-as-linear-map]
---

## 直觉

如果只知道函数在一点的值、斜率、弯曲程度，就能在附近搭一个越来越准确的多项式模型。

## 公式

$$
f(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
$$

## 例子

指数函数在 0 附近：

$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
$$

## 应用

一阶和二阶优化方法来自对目标函数的局部近似。
