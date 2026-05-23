import Link from 'next/link';
import { siteConfig } from '@/site.config';

export function Hero() {
  const { hero, brand } = siteConfig;

  const heroBgClass =
    brand.heroStyle === 'aurora' ? 'hero-aurora' :
    brand.heroStyle === 'grid'   ? 'hero-grid'   :
    brand.heroStyle === 'mesh'   ? 'hero-mesh'   :
    '';

  return (
    <section className={`relative ${heroBgClass}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center animate-enter">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            {hero.eyebrow && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] border border-[color:var(--color-accent)]/20">
                {hero.eyebrow}
              </span>
            )}

            <h1 className="mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight">
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {i === hero.headline.length - 1 ? (
                    <span className="italic font-light">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-8 text-lg text-[color:var(--color-muted)] leading-relaxed max-w-xl whitespace-pre-line">
              {hero.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] hover:scale-[1.02] transition-transform"
              >
                {hero.primaryCta.label}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full border border-[color:var(--color-border)] hover:bg-[color:var(--color-surface-alt)] transition-colors"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            {hero.socialProof.enabled && (
              <div className="mt-10 flex items-center gap-4">
                <div className="flex" aria-label={`${hero.socialProof.stars} 星`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={
                        i <= Math.round(hero.socialProof.stars)
                          ? 'text-[color:var(--color-accent)]'
                          : 'text-[color:var(--color-border)]'
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[color:var(--color-muted)]">
                  <strong className="text-[color:var(--color-ink)]">{hero.socialProof.reviews}</strong>
                  {' '}{hero.socialProof.text}
                </p>
              </div>
            )}
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto animate-float">
              {/* シンプルなSVGモックアップ。/public/hero-mockup.svg を後で差し替え可能 */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[color:var(--color-brand)] shadow-2xl rotate-3 opacity-90" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--color-surface)] to-[color:var(--color-surface-alt)] border border-[color:var(--color-border)] -rotate-2 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl font-display mb-4">✦</div>
                  <div className="text-2xl font-display font-medium">{siteConfig.app.name}</div>
                  <div className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {siteConfig.app.tagline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
