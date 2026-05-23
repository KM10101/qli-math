export type Status = 'not' | 'doing' | 'read' | 'review' | 'master';

export const statusMap: Record<Status, { label: string; symbol: string; cls: string }> = {
  not: { label: '未开始', symbol: '○', cls: 'not' },
  doing: { label: '学习中', symbol: '◐', cls: 'doing' },
  read: { label: '已读', symbol: '●', cls: 'read' },
  review: { label: '需复习', symbol: '!', cls: 'review' },
  master: { label: '已掌握', symbol: '✓', cls: 'master' },
};
