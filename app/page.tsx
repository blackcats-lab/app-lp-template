import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Steps } from '@/components/Steps';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { DownloadCTA } from '@/components/DownloadCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <FAQ preview />
      <DownloadCTA />
    </>
  );
}
