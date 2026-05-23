import type { Metadata } from 'next';
import { Pricing } from '@/components/Pricing';
import { DownloadCTA } from '@/components/DownloadCTA';

export const metadata: Metadata = {
  title: '料金プラン',
  description: 'シンプルでわかりやすい料金プラン。無料から始められます。',
};

export default function PricingPage() {
  return (
    <>
      <Pricing detailed />
      <DownloadCTA />
    </>
  );
}
