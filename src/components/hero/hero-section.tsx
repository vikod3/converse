import { HeroContent } from "./hero-content";
import { InfiniteMarquee } from "./infinite-marquee";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:pt-32">
        <div className="flex flex-col items-center gap-16 lg:gap-24">
          <HeroContent />
          <InfiniteMarquee />
        </div>
      </div>
    </section>;
};