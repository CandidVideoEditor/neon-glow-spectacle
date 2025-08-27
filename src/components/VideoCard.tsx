import React, { useState } from 'react';
import { Heart, Share, Eye, Clock, MessageCircle, Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  views: string;
  uploadTime: string;
  likes: string;
  shares: string;
  comments: string;
  thumbnail?: string;
  videoUrl?: string;
  index?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  views,
  uploadTime,
  likes,
  shares,
  comments,
  thumbnail,
  videoUrl,
  index = 0
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleVideoClick = () => {
    if (videoUrl) {
      setIsPlaying(true);
      // Open video in modal or redirect
      window.open(videoUrl, '_blank');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div 
      className="video-card bg-card rounded-xl overflow-hidden border border-border group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video cursor-pointer" onClick={handleVideoClick}>
        <div className="video-thumbnail w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center transition-transform duration-300">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-6xl text-white/50">▶</div>
          )}
        </div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
            <Play className="w-6 h-6 text-white fill-white" />
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
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1 transition-colors duration-200 group/like ${
                isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-red-400'
              }`}
            >
              <Heart className={`w-4 h-4 group-hover/like:scale-110 transition-transform duration-200 ${
                isLiked ? 'fill-red-500' : ''
              }`} />
              <span className="text-sm">{likes}</span>
            </button>
            
            <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-400 transition-colors duration-200 group/comment">
              <MessageCircle className="w-4 h-4 group-hover/comment:scale-110 transition-transform duration-200" />
              <span className="text-sm">{comments}</span>
            </button>
            
            <button className="flex items-center gap-1 text-muted-foreground hover:text-green-400 transition-colors duration-200 group/share">
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