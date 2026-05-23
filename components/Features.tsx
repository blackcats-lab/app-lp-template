import { siteConfig } from '@/site.config';

export function Features() {
  const { features } = siteConfig;

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {features.title}
          </h2>
          <p className="mt-6 text-lg text-[color:var(--color-muted)] leading-relaxed">
            {features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)]">
          {features.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[color:var(--color-surface)] p-8 lg:p-10 hover:bg-[color:var(--color-surface-alt)] transition-colors group"
            >
              <div className="text-5xl text-[color:var(--color-accent)] mb-6 font-display group-hover:scale-110 transition-transform inline-block origin-left">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl font-medium mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[color:var(--color-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
