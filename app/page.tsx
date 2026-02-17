import { HeroSection } from '@/components/home/hero-section';
import { FeaturedCategories } from '@/components/home/featured-categories';
import { FeaturedProducts } from '@/components/home/featured-products';
import { USPSection } from '@/components/home/usp-section';
import { PremiumCTASection } from '@/components/home/premium-cta';
import { TestimonialsSection, NewsletterSection } from '@/components/home/social-proof';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <PremiumCTASection />
      <USPSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
