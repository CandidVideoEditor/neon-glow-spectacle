
import React from 'react';
import { HOME_VIDEOS } from './mediaData';

const HomeVideoGrid: React.FC = () => {
  const generateVideos = (count: number) => {
    const titles = [
      "Beautiful Wedding Ceremony at Sunset",
      "Traditional Indian Wedding Highlights",
      "Romantic Pre-Wedding Photoshoot",
      "Grand Reception Dance Performance",
      "Intimate Engagement Ceremony",
      "Destination Wedding in Goa",
      "Hindu Wedding Rituals & Traditions",
      "Christian Wedding Celebration",
      "Sikh Wedding Ceremony",
      "Punjabi Wedding Dance",
      "South Indian Wedding Traditions",
      "Bengali Wedding Ceremonies",
      "Gujarati Wedding Celebrations",
      "Marathi Wedding Rituals",
      "Rajasthani Royal Wedding",
      "Beach Wedding Ceremony",
      "Palace Wedding Celebration",
      "Garden Wedding Party",
      "Winter Wedding Magic",
      "Monsoon Wedding Romance",
      "Couple Portrait Session",
      "Bridal Photoshoot",
      "Groom Preparation",
      "Wedding Decoration Ideas",
      "Mehendi Ceremony Highlights",
      "Sangeet Night Performance",
      "Haldi Ceremony Joy",
      "Ring Ceremony Moments",
      "Wedding Reception Party",
      "Anniversary Celebration"
    ];

    const youtubeLinks = [
      "https://youtu.be/RpxAKrwL9XI?si=xxqOKcTJn0hzNA4e",
      "https://youtu.be/Dv22ntR71V8?si=ZH6uSb429x8xRbIN",
      "https://youtu.be/0uZh6J9iWoU?si=qtLsw131uABVI4Kz",
      "https://youtu.be/xrCaVrxKXGY?si=9cyu2WKOygeFx6je",
      "https://youtu.be/ivSPikCv7q4?si=Ye6X8TklfRTeA0-h",
      "https://youtu.be/YUdAeTEGoOs?si=2iqPikK_mjmGu4ua",
      "https://youtu.be/pZNKiM35A54?si=1747mlQ4W5vXMoAE",
      "https://youtu.be/cvcdy_nDiss?si=tqubidRRJutT-w6_",
      "https://youtu.be/YUkIclpM_XM?si=NF3dRduCg3QL0qq8"
    ];

    return Array.from({length: count}, (_, i) => ({
      id: i + 1,
      title: titles[i] || `Wedding Video ${i + 1}`,
      views: `${Math.floor(Math.random() * 500 + 50)}K`,
      uploadTime: `${Math.floor(Math.random() * 30 + 1)} days ago`,
      likes: `${(Math.random() * 10 + 1).toFixed(1)}K`,
      comments: `${Math.floor(Math.random() * 200 + 10)}`,
      shares: `${Math.floor(Math.random() * 100 + 5)}`,
      videoUrl: i < 9 ? youtubeLinks[i] : (HOME_VIDEOS[i] || HOME_VIDEOS[0])
    }));
  };

  const videos = generateVideos(30);

  const handleVideoClick = (videoUrl: string) => {
    // For YouTube links, ensure they open in new tab
    if (videoUrl.includes('youtu')) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <div key={video.id} className="group cursor-pointer" onClick={() => handleVideoClick(video.videoUrl)}>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-3">
            <video
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              poster={`/images/layer${((video.id - 1) % 3) + 1}/${String(((video.id - 1) % 20) + 1).padStart(2, '0')}.jpg`}
              preload="metadata"
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.uploadTime}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{video.likes} likes</span>
              <span>{video.comments} comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeVideoGrid;
