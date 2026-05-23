import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { siteConfig } from '@/site.config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

// Display: Fraunces (エディトリアルなセリフ)
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Sans: 本文用。Inter を fallback として使うが、CSS変数経由で
// globals.css の --font-sans に任意のフォントを差し替え可能。
// (利用者が「Geist にしたい」場合は geist パッケージを追加してここを差し替え)
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.app.name} — ${siteConfig.app.tagline}`,
    template: `%s | ${siteConfig.app.name}`,
  },
  description: siteConfig.app.seoDescription,
  metadataBase: new URL(siteConfig.app.url),
  openGraph: {
    type: 'website',
    locale: siteConfig.app.locale,
    url: siteConfig.app.url,
    siteName: siteConfig.app.name,
    title: `${siteConfig.app.name} — ${siteConfig.app.tagline}`,
    description: siteConfig.app.seoDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.app.name} — ${siteConfig.app.tagline}`,
    description: siteConfig.app.seoDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${fraunces.variable} ${sans.variable}`}
    >
      <body className={siteConfig.brand.mode === 'dark' ? 'theme-dark' : ''}>
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
