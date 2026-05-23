---
title: 导数的定义与几何意义
domain: 微积分
route: 微积分与连续变化
stage: 一元微分
order: 2
status: not
minutes: 10
summary: 导数是函数在某一点的瞬时变化率，也是一阶局部线性近似的斜率。
prerequisites: [limits]
next: [gradient, taylor-expansion]
---

## 直觉

先用割线估计平均变化率，再让两个点无限靠近，割线就变成切线。

## 定义

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
$$

## 例子

$f(x)=x^2$ 的导数是 $2x$。当 $x$ 越大时，函数局部变化越快。

## 应用

- 位置函数的导数是速度；
- 损失函数的导数用于参数更新；
- 局部线性近似是很多数值算法的起点。
