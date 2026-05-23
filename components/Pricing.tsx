import Link from 'next/link';
import { siteConfig } from '@/site.config';

interface PricingProps {
  /** /pricing ページから呼ぶときは true。見出しなどを詳細表示する */
  detailed?: boolean;
}

export function Pricing({ detailed = false }: PricingProps) {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {pricing.title}
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-muted)]">
            {pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricing.plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] shadow-2xl scale-[1.02]'
                  : 'bg-[color:var(--color-surface-alt)] border border-[color:var(--color-border)]'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[color:var(--color-accent)] text-white text-xs font-medium">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-display text-2xl font-medium">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted
                    ? 'opacity-70'
                    : 'text-[color:var(--color-muted)]'
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-medium">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted
                      ? 'opacity-70'
                      : 'text-[color:var(--color-muted)]'
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <span
                      className={
                        plan.highlighted
                          ? 'text-[color:var(--color-accent)]'
                          : 'text-[color:var(--color-accent)]'
                      }
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`mt-8 inline-flex justify-center items-center px-6 py-3 text-sm font-medium rounded-full transition-all ${
                  plan.highlighted
                    ? 'bg-[color:var(--color-brand-fg)] text-[color:var(--color-brand)] hover:scale-[1.02]'
                    : 'bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] hover:scale-[1.02]'
                }`}
              >
                {plan.cta.label}
              </Link>
            </div>
          ))}
        </div>

        {!detailed && (
          <p className="mt-12 text-center text-sm text-[color:var(--color-muted)]">
            <Link href="/pricing" className="underline underline-offset-4 hover:text-[color:var(--color-ink)]">
              料金プランの詳細を見る →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
