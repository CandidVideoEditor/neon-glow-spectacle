import React from 'react';
import { TRENDING_SHORTS } from './mediaData';

const TrendingShorts: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-scroll hover:pause">
        {[...Array(40)].map((_, i) => {
          const shortIndex = (i % 20) + 1;
          const layerIndex = ((i % 3) + 1);
          return (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-56 bg-muted rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://youtube.com/shorts', '_blank')}
            >
              <img
                src={`/images/layer${layerIndex}/${String(shortIndex).padStart(2, '0')}.jpg`}
                alt={`Short ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingShorts;