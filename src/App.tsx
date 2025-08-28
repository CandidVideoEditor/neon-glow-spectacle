import TripleParallaxMarquee from "@/components/TripleParallaxMarquee";
import HomeVideoGrid from "@/components/HomeVideoGrid";
import TrendingShorts from "@/components/TrendingShorts";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white space-y-12 p-6">
      {/* 3-layer scrolling images */}
      <TripleParallaxMarquee />

      {/* 30 videos grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Videos</h2>
        <HomeVideoGrid />
      </section>

      {/* 20 shorts scroll */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Trending Shorts</h2>
        <TrendingShorts />
      </section>
    </main>
  );
}
