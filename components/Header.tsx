import Link from 'next/link';
import { siteConfig } from '@/site.config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--color-surface)]/80 border-b border-[color:var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight"
        >
          {siteConfig.app.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#download"
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] hover:opacity-90 transition-opacity"
        >
          無料で始める
        </Link>

        {/* モバイル用シンプルメニュー (折りたたみは省略してMVP重視) */}
        <Link
          href="#download"
          className="md:hidden inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)]"
        >
          開始
        </Link>
      </div>
    </header>
  );
}
