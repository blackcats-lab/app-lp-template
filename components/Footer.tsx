import Link from 'next/link';
import { siteConfig } from '@/site.config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold tracking-tight">
              {siteConfig.app.name}
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-muted)] max-w-xs">
              {siteConfig.footer.description}
            </p>
            {siteConfig.footer.social.length > 0 && (
              <div className="mt-6 flex gap-4">
                {siteConfig.footer.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Columns */}
          {siteConfig.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-widest text-[color:var(--color-muted)] uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-border)] flex flex-col md:flex-row justify-between gap-4 text-xs text-[color:var(--color-muted)]">
          <div>
            © {year} {siteConfig.legal.operatorName}. All rights reserved.
          </div>
          <div className="font-display italic">
            Made with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
