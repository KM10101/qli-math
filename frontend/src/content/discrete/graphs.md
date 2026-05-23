---
title: 图的基本概念
domain: 离散数学
route: 离散数学与结构思维
stage: 图论入门
order: 4
status: not
minutes: 10
summary: 图由顶点和边组成，用来描述对象及其连接关系。
prerequisites: [sets-and-operations, relations]
next: [counting-principles]
---

## 为什么要学

网络、依赖关系、知识图谱、权限传播和 Agent 工作流都可以抽象成图。

## 定义

图通常记作：

$$
G=(V,E)
$$

其中 $V$ 是顶点集合，$E$ 是边集合。无向边是无序顶点对，有向边是有序顶点对。

## 例子

- 知识依赖图：知识点是顶点，“A 是 B 的前置知识”是有向边。
- 社交网络：用户是顶点，关注或好友关系是边。
- 安全场景：资产、账号、权限和攻击路径可以组成图。

<div class="callout warn"><span class="ic">!</span><div class="bd">注意：图论中的“图”不是函数图像，而是网络结构。</div></div>

## 后续

学习路径与连通性、BFS/DFS、最短路之后，就可以把本站知识点组织成真正的依赖图。
