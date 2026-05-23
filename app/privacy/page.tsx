import type { Metadata } from 'next';
import { getMarkdownContent } from '@/lib/markdown';
import { siteConfig } from '@/site.config';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: `${siteConfig.app.name}のプライバシーポリシーです。`,
};

export default async function PrivacyPage() {
  const { title, contentHtml } = await getMarkdownContent('privacy');

  return (
    <article className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div
          className="legal-prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </article>
  );
}
