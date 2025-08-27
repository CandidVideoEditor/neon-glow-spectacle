import React from 'react';
import VideoCard from './VideoCard';

const HomePage: React.FC = () => {
  // Wedding events data for the scrolling showcase
  const weddingEvents = {
    layer1: [
      { name: 'Wedding Ceremony', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
      { name: 'Haldi Ceremony', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400' },
      { name: 'Reception Party', image: 'https://images.unsplash.com/photo-1537907690979-ce391e6d6088?w=400' },
      { name: 'Muhurtham', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400' },
      { name: 'Ring Ceremony', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400' },
      { name: 'Maternity Shoot', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400' },
    ],
    layer2: [
      { name: 'Matured Function', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400' },
      { name: 'House Warming', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400' },
      { name: 'Pre Wedding', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400' },
      { name: 'Engagement', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400' },
      { name: 'Mehendi Ceremony', image: 'https://images.unsplash.com/photo-1595341595000-b494a2db4e47?w=400' },
      { name: 'Sangeet Night', image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c43a?w=400' },
    ],
    layer3: [
      { name: 'Baby Shower', image: 'https://images.unsplash.com/photo-1555384103-f721f1d01428?w=400' },
      { name: 'Anniversary', image: 'https://images.unsplash.com/photo-1529103456853-18d2d723cea6?w=400' },
      { name: 'Birthday Party', image: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?w=400' },
      { name: 'Corporate Event', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400' },
      { name: 'Family Portrait', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400' },
      { name: 'Cultural Function', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
    ]
  };

  // Generate 30 videos for the main grid
  const generateVideos = (count: number) => {
    const videoTitles = [
      "Amazing Wedding Color Grading",
      "Professional Event Editing",
      "Cinematic Wedding Film",
      "Haldi Ceremony Highlights",
      "Reception Dance Floor",
      "Maternity Shoot Magic",
      "House Warming Memories",
      "Pre Wedding Romance",
      "Ring Ceremony Elegance",
      "Muhurtham Sacred Moments",
      "Mehendi Art Timelapse",
      "Sangeet Night Energy",
      "Baby Shower Joy",
      "Anniversary Celebration",
      "Birthday Party Fun"
    ];

    return Array.from({ length: count }, (_, i) => {
      const titleIndex = i % videoTitles.length;
      return {
        id: i,
        title: `${videoTitles[titleIndex]} - Episode ${Math.floor(i / videoTitles.length) + 1}`,
        views: `${Math.floor(Math.random() * 500 + 10)}K`,
        uploadTime: `${Math.floor(Math.random() * 30 + 1)} days ago`,
        likes: `${Math.floor(Math.random() * 50 + 5)}K`,
        comments: `${Math.floor(Math.random() * 200 + 10)}`,
        shares: `${Math.floor(Math.random() * 10 + 1)}K`,
        videoUrl: `https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=${Math.floor(Math.random() * 180)}s`
      };
    });
  };

  const videos = generateVideos(30);

  return (
    <div className="space-y-8">
      {/* Wedding Events Showcase - 3 Layer Infinite Scroll */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-blue-900/20 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
            AESTHETIC GALLERY
          </h2>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            OUR ART TELLS YOUR STORY
          </p>
        </div>

        {/* Layer 1 - Moving Right */}
        <div className="relative mb-4 overflow-hidden">
          <div className="flex gap-4 animate-[scrollRight_25s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Original set */}
            {weddingEvents.layer1.map((event, i) => (
              <div key={`layer1-orig-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Professional Edit</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  4K Quality
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {weddingEvents.layer1.map((event, i) => (
              <div key={`layer1-dup-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Professional Edit</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  4K Quality
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2 - Moving Left */}
        <div className="relative mb-4 overflow-hidden">
          <div className="flex gap-4 animate-[scrollLeft_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Original set */}
            {weddingEvents.layer2.map((event, i) => (
              <div key={`layer2-orig-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Expert Color Grading</p>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  HDR
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {weddingEvents.layer2.map((event, i) => (
              <div key={`layer2-dup-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Expert Color Grading</p>
                </div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  HDR
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 3 - Moving Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-[scrollRight_35s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Original set */}
            {weddingEvents.layer3.map((event, i) => (
              <div key={`layer3-orig-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Cinematic Excellence</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Premium
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {weddingEvents.layer3.map((event, i) => (
              <div key={`layer3-dup-${i}`} className="flex-shrink-0 w-72 h-48 relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{event.name}</h3>
                  <p className="text-sm text-white/80">Cinematic Excellence</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Premium
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="p-6 space-y-12">
        {/* Latest Videos - 30 videos */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">
            Latest Wedding & Event Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {videos.map((video, index) => (
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
                    <p className="text-sm text-foreground font-medium px-2">Wedding Short #{i + 1}</p>
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
                    <p className="text-sm text-foreground font-medium px-2">Event Short #{i + 21}</p>
                    <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 500 + 50)}K views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
