# Qli Math 知识内容路线图

> 版本：v0.1  
> 目标：为后续补充知识点、设计学习路线、组织 Markdown 内容和交互页面提供长期参考。  
> 当前内容目录：`frontend/src/content/`  
> 当前阶段：第一阶段内容 MVP 建设中

---

## 1. 内容定位

Qli Math 的内容不应只是“数学笔记集合”，而应是一个**路线图驱动的数学知识库**。

每个知识点既是一个可独立阅读的 Markdown 文档，也是学习路线图中的一个节点。它应回答：

1. 为什么要学这个概念？
2. 它解决什么问题？
3. 直觉是什么？
4. 形式定义是什么？
5. 有哪些例子、反例和常见误区？
6. 它依赖哪些前置知识？
7. 它通向哪些后续知识？
8. 它和计算机、AI、工程、历史或现实问题有什么联系？

因此内容组织遵循：

```text
学习路线 > 阶段 > 知识点 > 文档内容 > 练习/实验/关联知识
```

而不是：

```text
文章列表 / 零散博客 / 百科词条集合
```

---

## 2. 内容设计原则

### 2.1 理解优先于覆盖

宁可先把 30～50 个核心知识点讲清楚，也不要铺 300 个空页面。

每个知识点应尽量具备：

- 一句话解释；
- 学习动机；
- 直觉解释；
- 形式定义；
- 关键公式；
- 简单例子；
- 常见误区；
- 前置和后续；
- 至少 1 个练习或思考题。

### 2.2 路线优先于检索

用户打开网站时，最需要知道的是：

- 我现在在哪条路线？
- 我当前应该学什么？
- 学完它之后去哪？
- 这个知识点为什么在这里？

检索和知识库索引很重要，但第一阶段应优先服务“持续学习”。

### 2.3 直觉先于形式

每个概念都应先解释它想解决的问题，再给定义和公式。

推荐顺序：

```text
问题/动机 → 直觉 → 定义 → 例子 → 推导/证明 → 误区 → 应用 → 练习
```

### 2.4 连接优先于孤立

每个知识点都应尽量提供：

- `prerequisites`：前置知识；
- `next`：后续知识；
- 相关路线；
- 相关应用；
- 相关历史背景。

### 2.5 Markdown 为主，交互页面为辅

普通知识点使用 Markdown。

复杂可视化或可交互内容不要直接塞进 Markdown，而是通过 frontmatter 挂载 React 组件：

```yaml
interactive: linear-combination
```

这样可以保持文档可读、GitHub 可预览，同时让网站支持更丰富的学习体验。

---

## 3. 当前内容文件规范

当前知识内容放在：

```text
frontend/src/content/
├── foundations/
├── linear-algebra/
├── calculus/
└── discrete/
```

建议后续继续按领域扩展：

```text
frontend/src/content/
├── foundations/          # 数学基础与证明
├── linear-algebra/       # 线性代数
├── calculus/             # 微积分与分析基础
├── discrete/             # 离散数学与图论
├── probability/          # 概率论与统计
├── optimization/         # 优化方法
├── information-theory/   # 信息论
├── numerical-methods/    # 数值计算
├── machine-learning/     # 机器学习数学
├── history/              # 数学史与思想
└── experiments/          # 实验说明或交互说明
```

每个 Markdown 文件应包含 frontmatter：

```yaml
---
title: 线性组合
domain: 线性代数
route: 线性代数的思想
stage: 向量与线性组合
order: 2
status: doing
minutes: 8
summary: 线性组合就是用一组向量按比例相加，生成一个新的向量。
prerequisites: [vectors]
next: [span, linear-independence]
interactive: linear-combination
---
```

字段含义：

| 字段 | 含义 |
|---|---|
| `title` | 页面标题 |
| `domain` | 知识库分类 |
| `route` | 所属学习路线 |
| `stage` | 所属路线阶段 |
| `order` | 同阶段/同路线内排序 |
| `status` | 初始学习状态：`not` / `doing` / `read` / `review` / `master` |
| `minutes` | 预计阅读时间 |
| `summary` | 一句话解释 |
| `prerequisites` | 前置知识 slug 列表 |
| `next` | 后续知识 slug 列表 |
| `interactive` | 可选，挂载交互组件 |

---

## 4. 第一阶段 MVP 路线

第一阶段重点不是“大而全”，而是建立数学学习的基本地基。

第一阶段路线确定为：

```text
0. 数学基础与证明思维
1. 线性代数的思想
2. 微积分与连续变化
3. 离散数学与结构思维
```

### 4.1 阶段目标

第一阶段完成后，用户应具备：

- 能读懂基本数学定义和定理；
- 能理解集合、函数、命题、证明方法；
- 能理解向量、线性组合、空间、矩阵和线性变换；
- 能理解极限、导数、梯度、Taylor 近似；
- 能理解计数、关系、递推、图这类离散结构；
- 能看出这些知识和编程、算法、AI、知识图谱之间的关系。

### 4.2 第一阶段内容规模建议

推荐第一阶段先做到 40～60 个高质量知识点。

当前已有 16 个左右，后续可补齐到：

```text
数学基础：12 个
线性代数：16 个
微积分：14 个
离散数学：14 个
合计：约 56 个
```

---

## 5. 路线 0：数学基础与证明思维

### 5.1 路线目标

帮助用户掌握数学语言和证明思维，为后续所有路线打基础。

### 5.2 阶段划分

```text
数学基础与证明思维
├── A. 数学语言
├── B. 集合与映射
├── C. 关系与结构
├── D. 证明方法
└── E. 阅读定理与构造反例
```

### 5.3 知识点清单

#### A. 数学语言

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `propositions-and-logic` | 命题与逻辑连接词 | 已有 |
| P0 | `quantifiers` | 量词：任意与存在 | 已有 |
| P0 | `necessary-and-sufficient` | 充分条件与必要条件 | 已有 |
| P1 | `negation-of-statements` | 如何否定数学命题 | 待补 |

#### B. 集合与映射

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `sets-and-operations` | 集合与集合运算 | 已有 |
| P0 | `functions-and-maps` | 函数、映射与复合 | 已有 |
| P1 | `injection-surjection-bijection` | 单射、满射与双射 | 待补 |
| P1 | `cartesian-product` | 笛卡尔积 | 待补 |

#### C. 关系与结构

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P1 | `relations-basic` | 二元关系 | 待补，可和离散数学交叉 |
| P1 | `equivalence-relation` | 等价关系与等价类 | 待补 |
| P2 | `partial-order` | 偏序关系 | 待补 |

#### D. 证明方法

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `proof-methods` | 常见证明方法 | 已有 |
| P0 | `direct-proof` | 直接证明 | 待补 |
| P0 | `proof-by-contradiction` | 反证法 | 待补 |
| P0 | `contrapositive-proof` | 逆否证明 | 待补 |
| P0 | `mathematical-induction` | 数学归纳法 | 已有 |
| P1 | `constructive-proof` | 构造性证明 | 待补 |
| P1 | `counterexamples` | 反例的作用 | 待补 |

### 5.4 推荐先补内容

第一批建议补：

1. `quantifiers`
2. `necessary-and-sufficient`
3. `mathematical-induction`
4. `counterexamples`

这四个会显著提升后续阅读体验。

---

## 6. 路线 1：线性代数的思想

### 6.1 路线目标

帮助用户从“矩阵计算”转向理解“向量空间与线性变换”。

线性代数是后续机器学习、优化、图算法、数值计算的核心基础。

### 6.2 阶段划分

```text
线性代数的思想
├── A. 向量与线性组合
├── B. 空间、基与维数
├── C. 矩阵与线性变换
├── D. 线性方程组与秩
├── E. 内积、正交与投影
├── F. 特征值与特征向量
└── G. SVD 与数据视角
```

### 6.3 知识点清单

#### A. 向量与线性组合

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `vectors` | 向量是什么 | 已有 |
| P0 | `linear-combination` | 线性组合 | 已有，含交互 |
| P0 | `span` | 张成空间 | 已有 |
| P0 | `linear-independence` | 线性相关与线性无关 | 已有 |

#### B. 空间、基与维数

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `basis-and-dimension` | 基与维数 | 已有 |
| P1 | `coordinate-system` | 坐标与坐标系 | 待补 |
| P1 | `subspace` | 子空间 | 待补 |

#### C. 矩阵与线性变换

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `matrix-as-linear-map` | 矩阵作为线性变换 | 已有 |
| P0 | `matrix-multiplication` | 矩阵乘法的本质 | 已有 |
| P1 | `change-of-basis` | 换基与坐标变换 | 待补 |
| P1 | `inverse-matrix` | 逆矩阵 | 待补 |

#### D. 线性方程组与秩

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `linear-systems` | 线性方程组 | 待补 |
| P0 | `gaussian-elimination` | 高斯消元 | 待补 |
| P0 | `rank` | 秩 | 待补 |
| P1 | `column-space-null-space` | 列空间与零空间 | 待补 |

#### E. 内积、正交与投影

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `inner-product` | 内积 | 待补 |
| P0 | `norm` | 范数 | 待补 |
| P0 | `orthogonal-projection` | 正交投影 | 待补 |
| P1 | `gram-schmidt` | Gram-Schmidt 正交化 | 待补 |
| P1 | `least-squares` | 最小二乘 | 待补 |

#### F. 特征值与特征向量

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `eigenvalues-eigenvectors` | 特征值与特征向量 | 待补 |
| P1 | `diagonalization` | 对角化 | 待补 |
| P1 | `spectral-decomposition` | 谱分解 | 待补 |

#### G. SVD 与数据视角

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P1 | `svd` | 奇异值分解 SVD | 待补 |
| P1 | `low-rank-approximation` | 低秩近似 | 待补 |
| P1 | `pca` | PCA 主成分分析 | 待补 |

### 6.4 推荐交互实验

| 知识点 | 交互形式 |
|---|---|
| `linear-combination` | 拖动系数，看向量线性组合 |
| `span` | 两个向量张成直线/平面 |
| `matrix-as-linear-map` | 网格被矩阵变换 |
| `orthogonal-projection` | 点到直线的投影 |
| `eigenvalues-eigenvectors` | 观察不变方向 |
| `pca` | 二维点云主方向 |

---

## 7. 路线 2：微积分与连续变化

### 7.1 路线目标

帮助用户理解连续变化、局部近似和优化思想。

微积分路线应服务后续：

- 梯度下降；
- 反向传播；
- 优化方法；
- 概率密度；
- 数值计算；
- 机器学习损失函数。

### 7.2 阶段划分

```text
微积分与连续变化
├── A. 函数与极限
├── B. 一元微分
├── C. 一元积分
├── D. 多元微积分
├── E. 近似与展开
└── F. 分析基础补充
```

### 7.3 知识点清单

#### A. 函数与极限

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `limits` | 极限 | 已有 |
| P0 | `continuity` | 连续性 | 待补 |
| P1 | `epsilon-delta` | ε-δ 语言 | 待补 |

#### B. 一元微分

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `derivative` | 导数的定义与几何意义 | 已有 |
| P0 | `chain-rule` | 链式法则 | 已有 |
| P1 | `implicit-differentiation` | 隐函数求导 | 待补 |
| P1 | `local-linear-approximation` | 局部线性近似 | 待补 |

#### C. 一元积分

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `integral` | 积分的直觉 | 已有 |
| P0 | `fundamental-theorem-of-calculus` | 微积分基本定理 | 待补 |
| P1 | `substitution-integration` | 换元积分 | 待补 |
| P1 | `integration-by-parts` | 分部积分 | 待补 |

#### D. 多元微积分

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `partial-derivative` | 偏导数 | 待补 |
| P0 | `gradient` | 梯度 | 已有 |
| P0 | `jacobian` | Jacobian 矩阵 | 待补 |
| P0 | `hessian` | Hessian 矩阵 | 待补 |
| P1 | `directional-derivative` | 方向导数 | 待补 |

#### E. 近似与展开

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `taylor-expansion` | Taylor 展开 | 已有 |
| P1 | `first-order-approximation` | 一阶近似 | 待补 |
| P1 | `second-order-approximation` | 二阶近似 | 待补 |

### 7.4 推荐交互实验

| 知识点 | 交互形式 |
|---|---|
| `limits` | 点趋近时函数值变化 |
| `derivative` | 割线到切线 |
| `chain-rule` | 复合函数变化传递 |
| `gradient` | 二维等高线上的最陡方向 |
| `taylor-expansion` | 多项式阶数增加后的拟合效果 |

---

## 8. 路线 3：离散数学与结构思维

### 8.1 路线目标

帮助用户掌握离散结构：集合、关系、计数、递推、图。

这条路线对程序员特别重要，因为它连接：

- 算法；
- 数据结构；
- 图数据库；
- 知识图谱；
- 权限系统；
- Agent 工作流；
- 安全分析中的攻击路径。

### 8.2 阶段划分

```text
离散数学与结构思维
├── A. 组合计数
├── B. 集合上的结构
├── C. 递推与归纳
├── D. 图论入门
├── E. 图算法基础
└── F. 离散结构的应用
```

### 8.3 知识点清单

#### A. 组合计数

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `counting-principles` | 基本计数原理 | 已有 |
| P0 | `permutations-combinations` | 排列与组合 | 已有 |
| P1 | `binomial-theorem` | 二项式定理 | 待补 |
| P1 | `pigeonhole-principle` | 鸽巢原理 | 待补 |

#### B. 集合上的结构

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `relations` | 关系与等价关系 | 已有 |
| P1 | `partial-order-discrete` | 偏序关系 | 待补 |
| P1 | `hasse-diagram` | Hasse 图 | 待补 |

#### C. 递推与归纳

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `recurrence` | 递推关系 | 已有 |
| P0 | `solving-recurrences` | 如何解递推式 | 待补 |
| P1 | `master-theorem` | Master Theorem | 待补 |
| P1 | `dynamic-programming-math` | 动态规划的数学语言 | 待补 |

#### D. 图论入门

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `graphs` | 图的基本概念 | 已有 |
| P0 | `paths-and-connectivity` | 路径与连通性 | 已有 |
| P0 | `trees` | 树 | 待补 |
| P1 | `directed-graphs` | 有向图 | 待补 |

#### E. 图算法基础

| 优先级 | slug | 标题 | 状态 |
|---|---|---|---|
| P0 | `bfs-dfs` | BFS 与 DFS | 待补 |
| P0 | `shortest-path` | 最短路 | 待补 |
| P1 | `topological-sort` | 拓扑排序 | 待补 |
| P1 | `pagerank` | PageRank | 待补 |

### 8.4 推荐交互实验

| 知识点 | 交互形式 |
|---|---|
| `counting-principles` | 多步骤选择树 |
| `recurrence` | 递推序列生成器 |
| `graphs` | 顶点和边构造器 |
| `bfs-dfs` | BFS/DFS 遍历动画 |
| `shortest-path` | Dijkstra 可视化 |
| `topological-sort` | 依赖图排序 |

---

## 9. 第二阶段扩展路线

第一阶段完成后，可以进入第二阶段。第二阶段开始从“数学基础能力”转向“应用和现代数学能力”。

建议路线：

```text
4. 概率论与统计
5. 优化方法
6. 信息论
7. 数值计算
8. 机器学习数学基础
```

---

## 10. 路线 4：概率论与统计

### 10.1 路线目标

理解不确定性、随机变量、分布、估计和统计推断。

### 10.2 阶段划分

```text
概率论与统计
├── A. 概率基础
├── B. 随机变量与分布
├── C. 数字特征
├── D. 常见分布
├── E. 极限定理
├── F. 统计推断
└── G. 贝叶斯思想
```

### 10.3 核心知识点

| 优先级 | slug | 标题 |
|---|---|---|
| P0 | `sample-space-and-events` | 样本空间与事件 |
| P0 | `conditional-probability` | 条件概率 |
| P0 | `bayes-theorem` | 贝叶斯公式 |
| P0 | `random-variable` | 随机变量 |
| P0 | `expectation` | 期望 |
| P0 | `variance` | 方差 |
| P0 | `covariance` | 协方差 |
| P0 | `common-distributions` | 常见分布概览 |
| P1 | `law-of-large-numbers` | 大数定律 |
| P1 | `central-limit-theorem` | 中心极限定理 |
| P1 | `maximum-likelihood-estimation` | 最大似然估计 |
| P1 | `hypothesis-testing` | 假设检验 |
| P1 | `confidence-interval` | 置信区间 |
| P1 | `bayesian-update` | 贝叶斯更新 |

### 10.4 推荐专题

- 垃圾邮件分类中的贝叶斯公式；
- A/B 测试；
- 异常检测；
- MLE 与交叉熵；
- p-value 的常见误解。

---

## 11. 路线 5：优化方法

### 11.1 路线目标

理解如何把“求最好”变成数学问题，并掌握机器学习训练背后的优化思想。

### 11.2 阶段划分

```text
优化方法
├── A. 优化问题的形式
├── B. 无约束优化
├── C. 梯度下降族方法
├── D. 凸优化基础
├── E. 约束优化
└── F. 机器学习中的优化
```

### 11.3 核心知识点

| 优先级 | slug | 标题 |
|---|---|---|
| P0 | `optimization-problem` | 优化问题的形式 |
| P0 | `local-global-minimum` | 局部最优与全局最优 |
| P0 | `gradient-descent` | 梯度下降 |
| P0 | `learning-rate` | 学习率 |
| P1 | `newton-method` | Newton 方法 |
| P1 | `convex-set` | 凸集 |
| P1 | `convex-function` | 凸函数 |
| P1 | `jensen-inequality` | Jensen 不等式 |
| P1 | `lagrange-multiplier` | 拉格朗日乘子 |
| P1 | `kkt-conditions` | KKT 条件 |
| P1 | `sgd` | 随机梯度下降 |
| P1 | `adam` | Adam 优化器 |

### 11.4 推荐交互实验

- 梯度下降在不同学习率下的轨迹；
- 凸函数和非凸函数对比；
- Newton 方法和梯度下降对比；
- 鞍点附近的优化行为。

---

## 12. 路线 6：信息论

### 12.1 路线目标

理解信息量、不确定性、熵、KL 散度和交叉熵，为机器学习和语言模型打基础。

### 12.2 核心知识点

| 优先级 | slug | 标题 |
|---|---|---|
| P0 | `information-content` | 信息量 |
| P0 | `entropy` | 熵 |
| P0 | `conditional-entropy` | 条件熵 |
| P0 | `mutual-information` | 互信息 |
| P0 | `kl-divergence` | KL 散度 |
| P0 | `cross-entropy` | 交叉熵 |
| P1 | `maximum-entropy-principle` | 最大熵原理 |
| P1 | `perplexity` | 困惑度 Perplexity |

### 12.3 推荐专题

- 交叉熵为什么是分类损失；
- KL 散度和分布距离的区别；
- 语言模型中的 perplexity；
- RLHF / DPO 中的 KL 惩罚直觉。

---

## 13. 路线 7：数值计算

### 13.1 路线目标

理解计算机中数学计算的误差、稳定性和近似方法。

### 13.2 核心知识点

| 优先级 | slug | 标题 |
|---|---|---|
| P0 | `floating-point` | 浮点数 |
| P0 | `numerical-error` | 数值误差 |
| P0 | `numerical-stability` | 数值稳定性 |
| P1 | `condition-number` | 条件数 |
| P1 | `numerical-linear-systems` | 线性方程组数值解法 |
| P1 | `interpolation` | 插值 |
| P1 | `numerical-integration` | 数值积分 |
| P1 | `numerical-differentiation` | 数值微分 |
| P1 | `automatic-differentiation` | 自动微分 |

### 13.3 推荐实验

- `0.1 + 0.2` 为什么不等于 `0.3`；
- 病态矩阵对解的影响；
- softmax 溢出与 log-sum-exp trick；
- 有限差分近似导数。

---

## 14. 路线 8：机器学习数学基础

### 14.1 路线目标

把线性代数、微积分、概率、优化、信息论连接到机器学习模型。

### 14.2 核心知识点

| 优先级 | slug | 标题 |
|---|---|---|
| P0 | `ml-problem-formulation` | 机器学习问题的数学形式 |
| P0 | `linear-regression` | 线性回归 |
| P0 | `logistic-regression` | 逻辑回归 |
| P0 | `loss-function` | 损失函数 |
| P0 | `regularization` | 正则化 |
| P1 | `backpropagation` | 反向传播 |
| P1 | `softmax` | Softmax |
| P1 | `cross-entropy-loss` | 交叉熵损失 |
| P1 | `pca-ml` | PCA 在机器学习中的应用 |
| P1 | `svm-intuition` | SVM 初步 |
| P2 | `attention-math` | Attention 数学基础 |
| P2 | `transformer-math` | Transformer 数学基础 |

### 14.3 知识依赖示例

```text
逻辑回归
├── 向量内积
├── Sigmoid 函数
├── Bernoulli 分布
├── 最大似然估计
├── 交叉熵
└── 梯度下降
```

这类依赖链非常适合后续做成知识图谱。

---

## 15. 数学史与思想路线

数学史不应只是人物故事，而应帮助用户理解概念为何出现。

### 15.1 内容目标

每篇数学史文章应回答：

- 当时的问题是什么？
- 为什么原有数学不够用了？
- 新概念如何出现？
- 它改变了什么？
- 今天它和哪些知识点相关？

### 15.2 推荐主题

| 优先级 | slug | 标题 | 关联路线 |
|---|---|---|---|
| P1 | `euclid-elements` | 欧几里得与公理化方法 | 数学基础 |
| P1 | `birth-of-calculus` | 微积分的诞生 | 微积分 |
| P1 | `seven-bridges` | 七桥问题与图论起源 | 离散数学 |
| P1 | `linear-algebra-history` | 线性代数从方程组到空间 | 线性代数 |
| P2 | `set-theory-crisis` | 集合论危机 | 数学基础 |
| P2 | `probability-origins` | 概率论从赌博问题开始 | 概率统计 |
| P2 | `fourier-history` | Fourier 分析的物理动机 | 微积分/分析 |
| P2 | `information-theory-shannon` | Shannon 与信息论 | 信息论 |

---

## 16. 专题路线设计

专题路线不完全按数学分支组织，而是围绕一个应用问题组织。

推荐专题：

```text
专题
├── 梯度下降为什么有效
├── PCA 的完整数学链路
├── 最大似然估计与交叉熵
├── PageRank 从线性代数到图论
├── BFS/DFS 与图搜索
├── 反向传播的数学本质
├── Transformer 中的线性代数
├── softmax 与数值稳定性
└── 知识图谱中的图论基础
```

### 16.1 专题页面模板

```text
专题问题
├── 背景问题
├── 所需前置知识
├── 核心推导
├── 代码/交互实验
├── 常见误区
├── 相关知识点链接
└── 后续学习建议
```

专题适合在基础知识点完成后逐步增加。

---

## 17. 交互实验路线图

交互实验是 Qli Math 区别于普通 Markdown 笔记的重要特征，但不应一开始过度开发。

### 17.1 第一阶段交互 MVP

| 优先级 | interactive key | 对应知识点 | 形式 |
|---|---|---|---|
| P0 | `linear-combination` | 线性组合 | 拖动系数，看结果向量 |
| P1 | `span-2d` | 张成空间 | 两个向量张成直线/平面 |
| P1 | `matrix-transform` | 矩阵作为线性变换 | 网格变换 |
| P1 | `derivative-tangent` | 导数 | 割线逼近切线 |
| P1 | `gradient-field` | 梯度 | 等高线与梯度方向 |
| P1 | `graph-traversal` | BFS/DFS | 图遍历动画 |

### 17.2 交互组件约定

- Markdown 中只写 `interactive: xxx`；
- React 侧根据 key 挂载组件；
- 交互组件说明文案仍写在 Markdown 中；
- 交互组件不负责解释全部概念，只辅助理解关键动作。

---

## 18. 知识点文档模板

后续新建知识点时建议使用：

```md
---
title: 知识点名称
domain: 所属领域
route: 所属路线
stage: 所属阶段
order: 1
status: not
minutes: 8
summary: 一句话解释这个知识点。
prerequisites: []
next: []
---

## 为什么要学

说明这个概念解决什么问题，为什么值得学。

## 直觉

用图像、类比、简单例子解释。

## 定义

给出形式化定义。

$$
公式写在这里
$$

## 例子

至少一个简单例子。

## 常见误区

列出容易误解的地方。

## 应用

说明它在后续数学、计算机、AI、工程中的作用。

## 练习

1. 基础题。
2. 思考题。
```

---

## 19. 内容优先级规则

后续不知道该补什么时，按下面规则判断。

### P0：必须优先补

满足任一条件即可：

- 是多条路线的前置知识；
- 当前页面 `next` 指向它但文档不存在；
- 后续专题必须依赖它；
- 用户正在学习时会明显卡住；
- 能帮助路线闭环。

### P1：重要但可稍后

- 是 P0 的自然延伸；
- 有明显应用价值；
- 适合做交互或实验；
- 能增强理解深度。

### P2：长期补充

- 更高级；
- 更偏专题；
- 更偏数学史或拓展阅读；
- 对第一阶段学习不构成阻塞。

---

## 20. 推荐补充顺序

### 20.1 最近 10 个最该补的知识点

建议下一批直接补这 10 个：

1. `quantifiers`：量词：任意与存在
2. `necessary-and-sufficient`：充分条件与必要条件
3. `mathematical-induction`：数学归纳法
4. `linear-independence`：线性相关与线性无关
5. `basis-and-dimension`：基与维数
6. `matrix-multiplication`：矩阵乘法的本质
7. `chain-rule`：链式法则
8. `integral`：积分的直觉
9. `permutations-combinations`：排列与组合
10. `paths-and-connectivity`：路径与连通性

原因：这些知识点能把第一阶段四条路线串起来。

### 20.2 第一阶段补齐顺序

```text
第 1 批：数学语言和证明
第 2 批：线性代数前半段
第 3 批：微积分基本链路
第 4 批：离散数学图论链路
第 5 批：线代后半段和交互实验
第 6 批：第一阶段综合专题
```

### 20.3 第二阶段启动条件

建议满足以下条件后再大规模写概率、优化、信息论：

- 数学基础至少 10 篇；
- 线性代数至少 12 篇；
- 微积分至少 10 篇；
- 离散数学至少 10 篇；
- 至少 3 个交互实验；
- 每条第一阶段路线都有完整的“前置 → 当前 → 后续”链路。

---

## 21. 内容质量检查清单

新知识点合入前检查：

- [ ] frontmatter 字段齐全；
- [ ] `slug` 由文件名确定，命名清晰；
- [ ] `route` 和现有路线一致；
- [ ] `stage` 合理；
- [ ] `prerequisites` 指向真实或计划中的 slug；
- [ ] `next` 指向真实或计划中的 slug；
- [ ] 至少有“为什么要学”；
- [ ] 至少有“直觉”；
- [ ] 至少有“定义”；
- [ ] 至少有一个例子；
- [ ] 公式能被 KaTeX 渲染；
- [ ] GitHub 预览不报明显数学宏错误；
- [ ] 没有把私有部署信息写进公开文档。

---

## 22. 长期愿景

长期来看，Qli Math 的知识内容可以形成三层结构：

```text
第一层：学习路线
解决“我应该按什么顺序学”。

第二层：知识库
解决“某个概念到底是什么”。

第三层：专题与实验
解决“这些数学如何连接到真实问题”。
```

再往后，可以加入：

- 知识依赖图；
- 个人学习状态；
- 错题/练习系统；
- AI 页面问答；
- 基于当前路线的 AI 学习建议；
- 数学史时间线；
- Python/TypeScript 数值实验；
- 与 Obsidian 或本地笔记同步。

但无论功能怎么扩展，内容建设都应保持这个核心：

> 让学习者知道为什么学、学什么、怎么学、学完连接到哪里。
