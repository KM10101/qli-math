export type Status = 'not' | 'doing' | 'read' | 'review' | 'master';

export const statusMap: Record<Status, { label: string; symbol: string; cls: string }> = {
  not: { label: '未开始', symbol: '○', cls: 'not' },
  doing: { label: '学习中', symbol: '◐', cls: 'doing' },
  read: { label: '已读', symbol: '●', cls: 'read' },
  review: { label: '需复习', symbol: '!', cls: 'review' },
  master: { label: '已掌握', symbol: '✓', cls: 'master' },
};

export const routes = [
  { title: '线性代数的思想', desc: '从向量、空间和线性变换出发，理解现代数学和机器学习中的线性结构。', audience: '程序员、AI 学习者', difficulty: '入门 → 中级', stages: 5, nodes: 24, done: 7, status: 'doing' as Status, featured: false },
  { title: '数学基础与证明思维', desc: '建立学习高等数学所需的基础语言和证明意识：命题、集合、函数与证明方法。', audience: '所有初学者', difficulty: '入门', stages: 3, nodes: 16, done: 10, status: 'doing' as Status, featured: false },
  { title: '微积分与连续变化', desc: '理解变化、极限、导数、积分和优化——连续世界背后的数学语言。', audience: '理工背景学习者', difficulty: '入门 → 中级', stages: 5, nodes: 22, done: 0, status: 'not' as Status, featured: false },
  { title: '概率统计与不确定性', desc: '理解随机性、概率模型和统计推断，从直觉走向贝叶斯与极限定理。', audience: '数据 / AI 学习者', difficulty: '中级', stages: 5, nodes: 20, done: 0, status: 'not' as Status, featured: false },
  { title: '数学史与数学思想漫游', desc: '理解数学如何发展、数学思想如何演化——从古希腊几何到哥德尔与图灵。', audience: '所有数学爱好者', difficulty: '轻松', stages: 6, nodes: 19, done: 0, status: 'not' as Status, featured: true },
];

export const linearStages = [
  { title: '向量与线性组合', state: 'done', items: [
    { name: '向量是什么', status: 'master' as Status },
    { name: '向量加法与数乘', status: 'review' as Status },
    { name: '线性组合', status: 'doing' as Status, current: true },
    { name: '张成空间', status: 'not' as Status },
    { name: '线性相关与线性无关', status: 'not' as Status },
  ]},
  { title: '空间、基与维数', state: 'active', items: ['向量空间','子空间','基','维数','坐标'].map(name=>({name,status:'not' as Status}))},
  { title: '矩阵与线性变换', state: '', items: ['矩阵是什么','矩阵乘法','线性变换','矩阵表示','逆矩阵'].map(name=>({name,status:'not' as Status}))},
  { title: '特征值与结构', state: '', items: ['特征值与特征向量','对角化','正交性','谱分解','SVD'].map(name=>({name,status:'not' as Status}))},
  { title: '应用与延伸', state: '', items: ['PCA','马尔可夫链','图算法中的线性代数','线性代数与机器学习'].map(name=>({name,status:'not' as Status}))},
];

export const libraryDomains = [
  { name: '数学基础', count: 6, items: [['命题','master'],['逻辑连接词','review'],['量词','not'],['集合','master'],['函数','master'],['关系','not']] },
  { name: '线性代数', count: 24, items: [['向量是什么','master'],['向量加法与数乘','review'],['线性组合','doing'],['张成空间','not'],['基','not'],['维数','not'],['矩阵乘法','not'],['特征值','not']] },
  { name: '微积分', count: 22, items: [['极限','not'],['连续性','not'],['导数','not'],['积分','not'],['梯度','not'],['泰勒展开','not']] },
  { name: '概率统计', count: 20, items: [['样本空间','not'],['条件概率','not'],['随机变量','not'],['期望与方差','not'],['贝叶斯公式','not'],['中心极限定理','not']] },
] as const;
