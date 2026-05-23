import { siteConfig } from '@/site.config';

export function DownloadCTA() {
  const { store, app } = siteConfig;

  const hasAnyLink = store.appStore || store.googlePlay || store.web;

  return (
    <section id="download" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] p-10 md:p-16 text-center">
          {/* Decoration */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[color:var(--color-accent)] opacity-20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[color:var(--color-accent)] opacity-20 blur-3xl"
          />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight">
              さあ、はじめよう。
            </h2>
            <p className="mt-6 text-lg opacity-80 max-w-xl mx-auto">
              {app.name} は無料でダウンロードできます。アカウント作成も不要。インストールしたその瞬間から、新しい毎日が始まります。
            </p>

            {hasAnyLink ? (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {store.appStore && (
                  <a
                    href={store.appStore}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[color:var(--color-brand-fg)] text-[color:var(--color-brand)] hover:scale-[1.03] transition-transform"
                  >
                    <span className="text-2xl"></span>
                    <span className="text-left">
                      <span className="block text-xs opacity-60">Download on the</span>
                      <span className="block font-semibold">App Store</span>
                    </span>
                  </a>
                )}
                {store.googlePlay && (
                  <a
                    href={store.googlePlay}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[color:var(--color-brand-fg)] text-[color:var(--color-brand)] hover:scale-[1.03] transition-transform"
                  >
                    <span className="text-2xl">▶</span>
                    <span className="text-left">
                      <span className="block text-xs opacity-60">GET IT ON</span>
                      <span className="block font-semibold">Google Play</span>
                    </span>
                  </a>
                )}
                {store.web && (
                  <a
                    href={store.web}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[color:var(--color-accent)] text-white hover:scale-[1.03] transition-transform"
                  >
                    <span className="text-2xl">⌘</span>
                    <span className="text-left">
                      <span className="block text-xs opacity-80">Webで開く</span>
                      <span className="block font-semibold">ブラウザで使う</span>
                    </span>
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-10 text-sm opacity-60">
                ※ site.config.ts の store にストアURLを設定してください
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
