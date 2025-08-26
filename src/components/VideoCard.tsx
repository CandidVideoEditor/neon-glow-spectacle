import React from 'react';
import { Heart, Share, Eye, Clock } from 'lucide-react';

interface VideoCardProps {
  title: string;
  views: string;
  uploadTime: string;
  likes: string;
  shares: string;
  thumbnail?: string;
  index?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  views,
  uploadTime,
  likes,
  shares,
  thumbnail,
  index = 0
}) => {
  return (
    <div 
      className="video-card bg-card rounded-xl overflow-hidden border border-border group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <div className="video-thumbnail w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center transition-transform duration-300">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl text-white/50">▶</div>
          )}
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
            <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="video-title text-lg font-semibold text-foreground line-clamp-2 transition-transform duration-300">
          {title}
        </h3>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{uploadTime}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-red-400 transition-colors duration-200 group/like">
              <Heart className="w-4 h-4 group-hover/like:scale-110 transition-transform duration-200" />
              <span className="text-sm">{likes}</span>
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-400 transition-colors duration-200 group/share">
              <Share className="w-4 h-4 group-hover/share:scale-110 transition-transform duration-200" />
              <span className="text-sm">{shares}</span>
            </button>
          </div>
          
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;