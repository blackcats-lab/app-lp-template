import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { siteConfig } from '@/site.config';

const contentDir = path.join(process.cwd(), 'content');

/**
 * content/ 以下の .md ファイルを HTML に変換して返す。
 * 本文中で {operatorName}, {appName}, {lastUpdated} などの
 * プレースホルダを siteConfig の値で置換する。
 */
export async function getMarkdownContent(slug: string): Promise<{
  title: string;
  contentHtml: string;
}> {
  const fullPath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // プレースホルダ置換
  const replaced = content
    .replace(/\{appName\}/g, siteConfig.app.name)
    .replace(/\{operatorName\}/g, siteConfig.legal.operatorName)
    .replace(/\{operatorType\}/g, siteConfig.legal.operatorType)
    .replace(/\{address\}/g, siteConfig.legal.address || '（非公開）')
    .replace(/\{establishedDate\}/g, siteConfig.legal.establishedDate)
    .replace(/\{lastUpdated\}/g, siteConfig.legal.lastUpdated)
    .replace(/\{governingLaw\}/g, siteConfig.legal.governingLaw)
    .replace(/\{jurisdiction\}/g, siteConfig.legal.jurisdiction)
    .replace(/\{contactEmail\}/g, siteConfig.contact.email)
    .replace(/\{privacyEmail\}/g, siteConfig.contact.privacyEmail || siteConfig.contact.email)
    .replace(/\{appUrl\}/g, siteConfig.app.url);

  const processed = await remark().use(html).process(replaced);

  return {
    title: data.title || slug,
    contentHtml: processed.toString(),
  };
}
