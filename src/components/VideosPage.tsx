import React from 'react';
import VideoCard from './VideoCard';

const VideosPage: React.FC = () => {
  const videos = [
    {
      title: "Ultimate Guide to Web Development in 2024",
      views: "125K",
      uploadTime: "2 days ago",
      likes: "3.2K",
      shares: "245"
    },
    {
      title: "React Advanced Patterns and Best Practices",
      views: "89K",
      uploadTime: "1 week ago", 
      likes: "2.8K",
      shares: "187"
    },
    {
      title: "Building Scalable Applications with TypeScript",
      views: "156K",
      uploadTime: "2 weeks ago",
      likes: "4.1K", 
      shares: "312"
    },
    {
      title: "CSS Animations That Will Blow Your Mind",
      views: "203K",
      uploadTime: "3 weeks ago",
      likes: "5.7K",
      shares: "445"
    },
    {
      title: "The Future of JavaScript: What's Coming Next",
      views: "312K",
      uploadTime: "1 month ago",
      likes: "8.9K",
      shares: "672"
    },
    {
      title: "Database Design Principles for Modern Apps",
      views: "178K",
      uploadTime: "1 month ago",
      likes: "4.3K",
      shares: "298"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
          Latest Videos
        </h2>
        <p className="text-muted-foreground animate-slide-up">
          Discover our newest content and stay up to date with the latest trends
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            index={index}
            title={video.title}
            views={video.views}
            uploadTime={video.uploadTime}
            likes={video.likes}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;