---
title: 梯度
domain: 微积分
route: 微积分与连续变化
stage: 多元微积分
order: 3
status: not
minutes: 10
summary: 梯度是由各个偏导数组成的向量，指向函数增长最快的方向。
prerequisites: [derivative, vectors]
next: [taylor-expansion]
---

## 直觉

在山坡上，梯度箭头像“最陡上坡方向”；负梯度就是最陡下降方向。

## 定义

对 $f(x_1,\dots,x_n)$，梯度定义为：

$$
\nabla f=\left(\frac{\partial f}{\partial x_1},\dots,\frac{\partial f}{\partial x_n}\right)
$$

## 例子

若 $f(x,y)=x^2+y^2$，则：

$$
\nabla f=(2x,2y)
$$

离原点越远，梯度越大。

## 应用

梯度下降沿 $-\nabla f$ 方向更新参数，用来降低目标函数。
