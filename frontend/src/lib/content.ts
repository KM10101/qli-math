import katex from 'katex';
import type { Status } from './data';

export type ConceptDoc = {
  slug: string;
  path: string;
  title: string;
  domain: string;
  route: string;
  stage: string;
  order: number;
  status: Status;
  minutes: number;
  summary: string;
  prerequisites: string[];
  next: string[];
  interactive?: string;
  body: string;
};

export type RouteDoc = {
  title: string;
  desc: string;
  audience: string;
  difficulty: string;
  stages: string[];
  nodes: number;
  done: number;
  status: Status;
  featured: boolean;
  docs: ConceptDoc[];
};

const rawModules = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function parseList(value: string | undefined): string[] {
  if (!value) return [];
  const trimmed = value.trim();
  if (!trimmed || trimmed === '[]') return [];
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed.slice(1, -1).split(',').map(x => x.trim()).filter(Boolean);
  }
  return trimmed.split(',').map(x => x.trim()).filter(Boolean);
}

function slugFromPath(path: string) {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

function parseDoc(path: string, raw: string): ConceptDoc {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter: ${path}`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return {
    slug: slugFromPath(path),
    path,
    title: meta.title,
    domain: meta.domain,
    route: meta.route,
    stage: meta.stage,
    order: Number(meta.order || 0),
    status: (meta.status || 'not') as Status,
    minutes: Number(meta.minutes || 8),
    summary: meta.summary || '',
    prerequisites: parseList(meta.prerequisites),
    next: parseList(meta.next),
    interactive: meta.interactive,
    body: match[2].trim(),
  };
}

export const conceptDocs = Object.entries(rawModules)
  .map(([path, raw]) => parseDoc(path, raw))
  .sort((a, b) => a.route.localeCompare(b.route, 'zh-CN') || a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'));

export const conceptBySlug = Object.fromEntries(conceptDocs.map(doc => [doc.slug, doc])) as Record<string, ConceptDoc>;
export const slugByTitle = Object.fromEntries(conceptDocs.map(doc => [doc.title, doc.slug])) as Record<string, string>;

const routeMeta: Record<string, Pick<RouteDoc, 'desc' | 'audience' | 'difficulty' | 'featured'>> = {
  '数学基础与证明思维': {
    desc: '先掌握数学语言：命题、集合、函数和证明方法，让后续每条路线都有共同地基。',
    audience: '所有初学者',
    difficulty: '入门',
    featured: false,
  },
  '线性代数的思想': {
    desc: '从向量、空间和线性变换出发，理解现代数学、图算法和机器学习中的线性结构。',
    audience: '程序员、AI 学习者',
    difficulty: '入门 → 中级',
    featured: false,
  },
  '微积分与连续变化': {
    desc: '理解变化、极限、导数和近似——连续世界背后的数学语言。',
    audience: '理工背景学习者',
    difficulty: '入门 → 中级',
    featured: false,
  },
  '离散数学与结构思维': {
    desc: '用集合、关系、计数、递推和图论描述离散结构，连接算法、知识图谱和 Agent 系统。',
    audience: '程序员、算法学习者',
    difficulty: '入门 → 中级',
    featured: true,
  },
};

export const routeDocs: RouteDoc[] = Object.entries(
  conceptDocs.reduce<Record<string, ConceptDoc[]>>((acc, doc) => {
    (acc[doc.route] ||= []).push(doc);
    return acc;
  }, {})
).map(([title, docs]) => {
  const sorted = docs.sort((a, b) => a.order - b.order);
  const stages = [...new Set(sorted.map(d => d.stage))];
  const done = sorted.filter(d => ['master', 'read', 'review', 'doing'].includes(d.status)).length;
  return {
    title,
    desc: routeMeta[title]?.desc || sorted[0]?.summary || '',
    audience: routeMeta[title]?.audience || '数学学习者',
    difficulty: routeMeta[title]?.difficulty || '入门',
    featured: routeMeta[title]?.featured || false,
    stages,
    nodes: sorted.length,
    done,
    status: done > 0 ? 'doing' : 'not',
    docs: sorted,
  } as RouteDoc;
}).sort((a, b) => ['数学基础与证明思维','线性代数的思想','微积分与连续变化','离散数学与结构思维'].indexOf(a.title) - ['数学基础与证明思维','线性代数的思想','微积分与连续变化','离散数学与结构思维'].indexOf(b.title));

export const libraryDomains = Object.entries(
  conceptDocs.reduce<Record<string, ConceptDoc[]>>((acc, doc) => {
    (acc[doc.domain] ||= []).push(doc);
    return acc;
  }, {})
).map(([name, docs]) => ({ name, docs: docs.sort((a, b) => a.order - b.order), count: docs.length }));

export function getConceptSlugByTitle(title: string) {
  return slugByTitle[title] || title;
}

export function getConceptBySlug(slug: string | null | undefined) {
  return conceptBySlug[slug || 'linear-combination'] || conceptDocs[0];
}

export function getRouteByTitle(title: string | null | undefined) {
  return routeDocs.find(r => r.title === title) || routeDocs[0];
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderMath(source: string, displayMode = false) {
  try {
    return katex.renderToString(source, {
      displayMode,
      throwOnError: false,
      strict: 'ignore',
      trust: false,
    });
  } catch {
    return `<code>${escapeHtml(source)}</code>`;
  }
}

function inlineMarkdown(text: string) {
  const placeholders: string[] = [];
  let out = text.replace(/\$([^$]+)\$/g, (_, expr) => {
    const token = `@@MATH${placeholders.length}@@`;
    placeholders.push(`<span class="math-inline">${renderMath(expr, false)}</span>`);
    return token;
  });
  out = escapeHtml(out)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  placeholders.forEach((html, i) => { out = out.replace(`@@MATH${i}@@`, html); });
  return out;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;
  let inOl = false;
  let inMath = false;
  let math = '';
  const closeLists = () => {
    if (inList) { html += '</ul>'; inList = false; }
    if (inOl) { html += '</ol>'; inOl = false; }
  };
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '$$') {
      closeLists();
      if (inMath) { html += `<div class="formula">${renderMath(math.trim(), true)}</div>`; math = ''; inMath = false; }
      else inMath = true;
      continue;
    }
    if (inMath) { math += line + '\n'; continue; }
    if (!trimmed) { closeLists(); continue; }
    if (trimmed.startsWith('<')) { closeLists(); html += trimmed; continue; }
    const h = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (h) { closeLists(); const level = h[1].length; html += `<h${level}>${inlineMarkdown(h[2])}</h${level}>`; continue; }
    const ol = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ol) { if (!inOl) { closeLists(); html += '<ol>'; inOl = true; } html += `<li>${inlineMarkdown(ol[1])}</li>`; continue; }
    if (trimmed.startsWith('- ')) { if (!inList) { closeLists(); html += '<ul>'; inList = true; } html += `<li>${inlineMarkdown(trimmed.slice(2))}</li>`; continue; }
    closeLists();
    html += `<p>${inlineMarkdown(trimmed)}</p>`;
  }
  closeLists();
  return html;
}
