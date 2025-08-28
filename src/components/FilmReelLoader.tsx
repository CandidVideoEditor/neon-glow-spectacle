import React from 'react';
import { Film } from 'lucide-react';

interface FilmReelLoaderProps {
  onComplete: () => void;
}

const FilmReelLoader: React.FC<FilmReelLoaderProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Film strip background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent">
          <div className="h-full flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-gray-600 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Central film reel */}
      <div className="relative z-10">
        <div className="animate-spin-slow">
          <div className="w-32 h-32 rounded-full border-8 border-gray-300 relative">
            {/* Film reel spokes */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-12 bg-gray-300 left-1/2 top-1/2 origin-bottom transform -translate-x-1/2 -translate-y-full"
                style={{ transform: `translate(-50%, -100%) rotate(${i * 45}deg)` }}
              />
            ))}
            {/* Center hub */}
            <div className="absolute inset-4 rounded-full bg-gray-400 flex items-center justify-center">
              <Film className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center mt-8">
          <h2 className="text-white text-2xl font-bold animate-pulse">Loading...</h2>
          <div className="flex justify-center mt-4 space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Film frames rolling */}
      <div className="absolute top-1/2 left-0 w-full h-20 transform -translate-y-1/2 overflow-hidden">
        <div className="animate-scroll-left flex h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="min-w-16 h-full bg-gray-800 border-r border-gray-600 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-600 opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmReelLoader;