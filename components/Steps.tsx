import { siteConfig } from '@/site.config';

export function Steps() {
  const { steps } = siteConfig;

  return (
    <section className="py-24 lg:py-32 bg-[color:var(--color-surface-alt)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">{steps.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {steps.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.items.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Step number */}
              <div className="font-display text-7xl md:text-8xl font-light text-[color:var(--color-accent)] leading-none italic">
                {item.step}
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[color:var(--color-muted)] leading-relaxed">
                {item.description}
              </p>

              {/* Connector arrow on desktop, except last */}
              {idx < steps.items.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-12 -right-4 text-2xl text-[color:var(--color-muted)]"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
