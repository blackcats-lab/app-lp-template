import Link from 'next/link';
import { siteConfig } from '@/site.config';

interface FAQProps {
  /** トップページ抜粋なら true (n件のみ表示してFAQページへ誘導) */
  preview?: boolean;
}

export function FAQ({ preview = false }: FAQProps) {
  const { faq } = siteConfig;

  // 全カテゴリを単一配列に
  const allItems = faq.categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.name }))
  );

  const displayItems = preview
    ? allItems.slice(0, faq.topPreviewCount)
    : allItems;

  return (
    <section className="py-24 lg:py-32 bg-[color:var(--color-surface-alt)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {faq.title}
          </h2>
        </div>

        {preview ? (
          <div className="space-y-3">
            {displayItems.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] open:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4">
                  <span className="font-medium">{item.q}</span>
                  <span className="text-2xl text-[color:var(--color-accent)] group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-[color:var(--color-muted)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        ) : (
          // FAQページ用: カテゴリ別表示
          <div className="space-y-12">
            {faq.categories.map((cat, cIdx) => (
              <div key={cIdx}>
                <h3 className="font-display text-2xl font-medium mb-6 tracking-tight">
                  {cat.name}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] open:shadow-md transition-shadow"
                    >
                      <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4">
                        <span className="font-medium">{item.q}</span>
                        <span className="text-2xl text-[color:var(--color-accent)] group-open:rotate-45 transition-transform duration-300">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-5 text-[color:var(--color-muted)] leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {preview && (
          <p className="mt-10 text-center text-sm text-[color:var(--color-muted)]">
            <Link href="/faq" className="underline underline-offset-4 hover:text-[color:var(--color-ink)]">
              すべての質問を見る →
            </Link>
          </p>
        )}

        {!preview && (
          <div className="mt-16 p-8 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] text-center">
            <p className="text-[color:var(--color-muted)]">
              解決しない場合は、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center px-6 py-3 text-sm font-medium rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] hover:scale-[1.02] transition-transform"
            >
              お問い合わせ →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
