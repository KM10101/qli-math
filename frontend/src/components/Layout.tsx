import { ReactNode } from 'react';
import { LogOut, Search, Settings } from 'lucide-react';
import { pathFor } from '../main';

const nav = [
  ['dashboard','首页'], ['routes','学习路线'], ['library','知识库'], ['history','数学史'], ['my-learning','我的学习']
];

export function Layout({ children, active, wide=false }: { children: ReactNode; active?: string; wide?: boolean }) {
  return <>
    <input type="checkbox" id="nav-drawer" className="drawer-toggle" hidden />
    <nav className="nav">
      <a className="brand" href={pathFor('dashboard')}><span className="mark">Q</span> Qli&nbsp;Math</a>
      <div className="nav-links">{nav.map(([k,label]) => <a key={k} href={pathFor(k)} className={active===k?'active':''}>{label}</a>)}</div>
      <div className="nav-right">
        <div className="search"><Search size={15}/> 搜索知识点、路线、人物… <kbd>⌘K</kbd></div>
        <a className="icon-link" href={pathFor('settings')} title="个人设置" aria-label="个人设置"><Settings size={16}/></a>
        <button className="icon-link" title="退出登录" aria-label="退出登录" onClick={() => { localStorage.removeItem('qli:auth:token'); window.location.href = pathFor('login'); }}><LogOut size={16}/></button>
        <div className="avatar">Li</div>
        <label htmlFor="nav-drawer" className="nav-burger" aria-label="菜单">☰</label>
      </div>
    </nav>
    <aside className="drawer">{nav.map(([k,label]) => <a key={k} href={pathFor(k)}>{label}</a>)}<a href={pathFor('settings')}>个人设置</a><a href={pathFor('login')} onClick={() => localStorage.removeItem('qli:auth:token')}>退出登录</a></aside>
    <main className={wide ? '' : 'page'}>{children}</main>
    <footer className="foot">Qli Math · 路线图驱动的个人数学学习知识库</footer>
  </>;
}

export function StatusDot({ status, size='m' }: { status: import('../lib/data').Status; size?: 's'|'m'|'l' }) {
  const m = ({
    not: ['○','not'], doing: ['◐','doing'], read: ['●','read'], review: ['!','review'], master: ['✓','master']
  } as const)[status];
  return <span className={`st ${m[1]} sz-${size}`}>{m[0]}</span>;
}

export function Progress({ pct, green=false, lg=false }: { pct: number; green?: boolean; lg?: boolean }) {
  return <div className={`progress ${green?'green':''} ${lg?'lg':''}`}><i style={{width: `${pct}%`}} /></div>;
}

export function RouteViz() { return <div className="viz" aria-label="线性组合示意图"><svg viewBox="0 0 360 320" preserveAspectRatio="xMidYMid meet">
  <defs><marker id="a1" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto"><path d="M1 1 L8 4.5 L1 8 Z" fill="var(--accent)"/></marker><marker id="a2" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto"><path d="M1 1 L8 4.5 L1 8 Z" fill="var(--s-master)"/></marker><marker id="a3" markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto"><path d="M1 1 L8 4.5 L1 8 Z" fill="var(--fg)"/></marker></defs>
  <g stroke="var(--border)" strokeWidth="1"><line x1="40" y1="280" x2="320" y2="280"/><line x1="40" y1="40" x2="40" y2="280"/><line x1="110" y1="40" x2="110" y2="280" opacity=".5"/><line x1="180" y1="40" x2="180" y2="280" opacity=".5"/><line x1="250" y1="40" x2="250" y2="280" opacity=".5"/><line x1="40" y1="210" x2="320" y2="210" opacity=".5"/><line x1="40" y1="140" x2="320" y2="140" opacity=".5"/></g>
  <line x1="40" y1="280" x2="180" y2="210" stroke="var(--accent)" strokeWidth="2.6" markerEnd="url(#a1)"/><line x1="40" y1="280" x2="110" y2="140" stroke="var(--s-master)" strokeWidth="2.6" markerEnd="url(#a2)"/><line x1="40" y1="280" x2="250" y2="140" stroke="var(--fg)" strokeWidth="3" markerEnd="url(#a3)"/><circle cx="250" cy="140" r="4.5" fill="var(--accent)" stroke="#fff" strokeWidth="2"/><text x="150" y="232" fontFamily="var(--font-math)" fontStyle="italic" fontSize="15" fill="var(--accent)">v₁</text><text x="78" y="200" fontFamily="var(--font-math)" fontStyle="italic" fontSize="15" fill="var(--s-master)">v₂</text><text x="258" y="135" fontFamily="var(--font-math)" fontStyle="italic" fontSize="14" fill="var(--fg)">a·v₁+b·v₂</text>
</svg></div> }
