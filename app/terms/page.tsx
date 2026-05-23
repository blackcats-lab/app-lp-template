import type { Metadata } from 'next';
import { getMarkdownContent } from '@/lib/markdown';
import { siteConfig } from '@/site.config';

export const metadata: Metadata = {
  title: '利用規約',
  description: `${siteConfig.app.name}の利用規約です。`,
};

export default async function TermsPage() {
  const { title, contentHtml } = await getMarkdownContent('terms');

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
