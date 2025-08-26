import React from 'react';
import { Play, Lock, Globe } from 'lucide-react';

const PlaylistsPage: React.FC = () => {
  const playlists = [
    {
      title: "Web Development Masterclass",
      videoCount: 24,
      totalDuration: "8h 32m",
      privacy: "public",
      lastUpdated: "2 days ago"
    },
    {
      title: "React Advanced Concepts",
      videoCount: 18,
      totalDuration: "6h 15m", 
      privacy: "public",
      lastUpdated: "1 week ago"
    },
    {
      title: "CSS Animations & Effects",
      videoCount: 15,
      totalDuration: "4h 45m",
      privacy: "public", 
      lastUpdated: "2 weeks ago"
    },
    {
      title: "JavaScript Deep Dive",
      videoCount: 32,
      totalDuration: "12h 18m",
      privacy: "private",
      lastUpdated: "3 weeks ago"
    },
    {
      title: "UI/UX Design Principles", 
      videoCount: 12,
      totalDuration: "3h 28m",
      privacy: "public",
      lastUpdated: "1 month ago"
    },
    {
      title: "Backend Development",
      videoCount: 28,
      totalDuration: "9h 55m",
      privacy: "public",
      lastUpdated: "1 month ago"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
          Playlists
        </h2>
        <p className="text-muted-foreground animate-slide-up">
          Curated collections of videos organized by topic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist, index) => (
          <div 
            key={index}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-purple-500/50 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Playlist Cover */}
            <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl text-white/30">📝</div>
              </div>
              
              {/* 3D Tilt Effect on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 group-hover:transform group-hover:perspective-1000 group-hover:rotateY-2 group-hover:rotateX-1"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 glow-hover">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              {/* Video Count Badge */}
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white font-medium">
                {playlist.videoCount} videos
              </div>

              {/* Privacy Icon */}
              <div className="absolute top-3 left-3">
                {playlist.privacy === 'private' ? (
                  <Lock className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Globe className="w-4 h-4 text-green-400" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                {playlist.title}
              </h3>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>{playlist.totalDuration}</span>
                  <span className="capitalize">{playlist.privacy}</span>
                </div>
                <div className="text-xs">
                  Updated {playlist.lastUpdated}
                </div>
              </div>

              <button className="w-full mt-3 px-4 py-2 bg-secondary/50 hover:bg-secondary text-foreground rounded-lg transition-all duration-300 hover:scale-105 group/btn">
                <span className="group-hover/btn:text-purple-300 transition-colors duration-300">
                  Play All
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistsPage;