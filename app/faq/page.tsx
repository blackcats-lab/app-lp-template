import type { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'よくある質問',
  description: 'よくある質問にお答えします。解決しない場合はお気軽にお問い合わせください。',
};

export default function FAQPage() {
  return <FAQ />;
}
