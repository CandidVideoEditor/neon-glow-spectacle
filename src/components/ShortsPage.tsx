import React from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

const ShortsPage: React.FC = () => {
  const shorts = [
    {
      title: "Quick CSS Tip: Perfect Centering",
      views: "45K",
      likes: "1.2K"
    },
    {
      title: "JavaScript in 60 Seconds",
      views: "78K", 
      likes: "2.1K"
    },
    {
      title: "React Hook You've Never Seen",
      views: "92K",
      likes: "3.4K"
    },
    {
      title: "UI Design Trend Alert",
      views: "67K",
      likes: "1.8K"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
          Shorts
        </h2>
        <p className="text-muted-foreground animate-slide-up">
          Quick, engaging content that packs a punch
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {shorts.map((short, index) => (
          <div 
            key={index}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-purple-500/50 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Vertical thumbnail */}
            <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-4xl text-white/50">▶</div>
              </div>
              
              {/* Hover overlay with play button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                  <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-0.5"></div>
                </div>
              </div>

              {/* Actions overlay */}
              <div className="absolute right-2 bottom-16 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:scale-110 transition-transform duration-200">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:scale-110 transition-transform duration-200">
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:scale-110 transition-transform duration-200">
                  <Share className="w-4 h-4" />
                </button>
                <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:scale-110 transition-transform duration-200">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {short.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{short.views} views</span>
                <span>{short.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPage;