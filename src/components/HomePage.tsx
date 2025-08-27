import React from 'react';
import VideoCard from './VideoCard';

const HomePage: React.FC = () => {
  // Generate 60 videos for the main grid
  const generateVideos = (count: number, startIndex: number = 0) => {
    const videoTitles = [
      "Amazing After Effects Tutorial",
      "Professional Color Grading",
      "Smooth Transitions Pack",
      "Cinematic Text Effects",
      "Motion Graphics Masterclass",
      "VFX Breakdown Tutorial",
      "Creative Video Editing",
      "Sound Design Tips",
      "Animation Techniques",
      "Green Screen Effects",
      "Time Lapse Creation",
      "Storytelling Through Editing",
      "Advanced Compositing",
      "Visual Effects Magic",
      "Creative Transitions",
      "Film Look Tutorial",
      "Dynamic Text Animation",
      "Particle Effects Guide",
      "3D Motion Graphics",
      "Speed Ramping Techniques"
    ];

    return Array.from({ length: count }, (_, i) => {
      const index = startIndex + i;
      const titleIndex = index % videoTitles.length;
      return {
        id: index,
        title: `${videoTitles[titleIndex]} - Part ${Math.floor(index / videoTitles.length) + 1}`,
        views: `${Math.floor(Math.random() * 500 + 10)}K`,
        uploadTime: `${Math.floor(Math.random() * 30 + 1)} days ago`,
        likes: `${Math.floor(Math.random() * 50 + 5)}K`,
        comments: `${Math.floor(Math.random() * 200 + 10)}`,
        shares: `${Math.floor(Math.random() * 10 + 1)}K`,
        videoUrl: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=${Math.floor(Math.random() * 180)}s`
      };
    });
  };

  const firstBatchVideos = generateVideos(60, 0);
  const secondBatchVideos = generateVideos(60, 60);

  return (
    <div className="p-6 space-y-12">
      {/* First batch of 60 videos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
          Latest Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {firstBatchVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              index={index}
              title={video.title}
              views={video.views}
              uploadTime={video.uploadTime}
              likes={video.likes}
              comments={video.comments}
              shares={video.shares}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>
      </section>

      {/* Infinite horizontal scrolling shorts */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
          Trending Shorts
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of shorts */}
            {Array.from({ length: 20 }, (_, i) => (
              <div 
                key={`short-1-${i}`}
                className="flex-shrink-0 w-48 h-80 bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-xl border border-border flex items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(`https://youtube.com/shorts/dQw4w9WgXcQ?t=${i}`, '_blank')}
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                  <p className="text-sm text-foreground font-medium px-2">Short #{i + 1}</p>
                  <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 500 + 50)}K views</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {Array.from({ length: 20 }, (_, i) => (
              <div 
                key={`short-2-${i}`}
                className="flex-shrink-0 w-48 h-80 bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-xl border border-border flex items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(`https://youtube.com/shorts/dQw4w9WgXcQ?t=${i + 20}`, '_blank')}
              >
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5"></div>
                  </div>
                  <p className="text-sm text-foreground font-medium px-2">Short #{i + 21}</p>
                  <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 500 + 50)}K views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second batch of 60 videos */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
          Popular Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {secondBatchVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              index={index}
              title={video.title}
              views={video.views}
              uploadTime={video.uploadTime}
              likes={video.likes}
              comments={video.comments}
              shares={video.shares}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;