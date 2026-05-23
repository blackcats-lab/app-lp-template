import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/site.config';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'ご質問・ご意見・不具合のご報告など、お気軽にお寄せください。',
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            {contact.title}
          </h1>
          <p className="mt-6 text-lg text-[color:var(--color-muted)] leading-relaxed whitespace-pre-line">
            {contact.subtitle}
          </p>
        </div>

        <div className="mb-12 p-6 rounded-xl bg-[color:var(--color-surface-alt)] border border-[color:var(--color-border)]">
          <p className="text-sm text-[color:var(--color-muted)]">
            お問い合わせの前に、
            <Link href="/faq" className="underline text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]">
              よくある質問
            </Link>
            もご確認ください。多くの場合、こちらで解決できます。
          </p>
        </div>

        <ContactForm />

        <p className="mt-12 text-center text-sm text-[color:var(--color-muted)]">
          直接のメールは{' '}
          <a href={`mailto:${contact.email}`} className="underline text-[color:var(--color-ink)]">
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
