import React from 'react';
import { Globe, Twitter, Instagram, Youtube } from 'lucide-react';
import DigitalClock from './DigitalClock';

const ChannelInfo: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 bg-card">
      {/* Left side - Profile & Channel Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Profile Photo with glowing ring */}
        <div className="relative">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 glow-ring">
            <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-white">
              YT
            </div>
          </div>
        </div>

        {/* Channel Details */}
        <div className="space-y-3">
          {/* Channel Name */}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in">
            YourTube Channel
          </h1>
          
          {/* Handle & Subscriber Count */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
            <span>@yourchannel</span>
            <span className="hidden sm:inline">•</span>
            <span>1.2M subscribers</span>
          </div>

          {/* Channel Bio */}
          <p className="text-foreground/80 max-w-md animate-slide-up">
            Welcome to my channel! Creating amazing content for you every day. 
            Join our community of creators and tech enthusiasts.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Globe, label: 'Website' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Youtube, label: 'YouTube' }
            ].map(({ icon: Icon, label }) => (
              <button 
                key={label}
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary glow-hover transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* Subscribe Button */}
          <button className="px-8 py-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold rounded-full ripple glow-hover transition-all duration-300 transform hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right side - Digital Clock & Tagline */}
      <DigitalClock />
    </div>
  );
};

export default ChannelInfo;