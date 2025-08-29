import React from 'react';
import VideoCard from './VideoCard';
import TripleParallaxMarquee from './TripleParallaxMarquee';
import HomeVideoGrid from './HomeVideoGrid';
import TrendingShorts from './TrendingShorts';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 p-6">
      {/* 3-layer scrolling images */}
      <TripleParallaxMarquee />

      {/* 30 videos grid */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground mb-2">Featured Videos</h2>
        <HomeVideoGrid />
      </section>

      {/* 20 shorts scroll */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground mb-2">Trending Shorts</h2>
        <TrendingShorts />
      </section>
    </div>
  );
};

export default HomePage;
