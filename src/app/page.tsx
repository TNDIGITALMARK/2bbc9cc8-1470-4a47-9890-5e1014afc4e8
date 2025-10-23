import Header from '@/components/prime-legacy/Header';
import HeroSection from '@/components/prime-legacy/HeroSection';
import EbookSection from '@/components/prime-legacy/EbookSection';
import TestimonialsSection from '@/components/prime-legacy/TestimonialsSection';
import CTASection from '@/components/prime-legacy/CTASection';
import Footer from '@/components/prime-legacy/Footer';

export const dynamic = 'force-dynamic';

export default function PrimeLegacyPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <HeroSection />
      <EbookSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
