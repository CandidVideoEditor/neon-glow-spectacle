import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 left-4 z-50 glass rounded-xl p-4 w-80 shadow-lg">
      {/* Song Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">♪</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground truncate">
            Chill Beats
          </div>
          <div className="text-xs text-muted-foreground truncate">
            Lo-fi Hip Hop
          </div>
        </div>
      </div>

      {/* Waveform Animation */}
      <div className="flex items-center justify-center gap-1 h-8 mb-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`waveform-bar bg-gradient-to-t from-purple-500 to-blue-500 w-1 rounded-full ${
              isPlaying ? 'waveform-bar' : 'h-1'
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationPlayState: isPlaying ? 'running' : 'paused'
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
          <SkipBack className="w-4 h-4" />
        </button>
        
        <button 
          onClick={togglePlayPause}
          className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>
        
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2">
        <Volume2 className="w-4 h-4 text-muted-foreground" />
        <div className="flex-1 relative">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, hsl(var(--neon-purple)) 0%, hsl(var(--neon-blue)) ${volume}%, rgba(255,255,255,0.2) ${volume}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMusicPlayer;