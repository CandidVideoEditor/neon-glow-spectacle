import React from 'react';
import { Globe, Twitter, Instagram, Youtube, Eye, Video, TrendingUp } from 'lucide-react';
import DigitalClock from './DigitalClock';
import profilePhoto from '../assets/profile-photo.png';

const ChannelInfo: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 bg-card">
      {/* Left side - Profile & Channel Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Profile Photo */}
        <div className="relative">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white/10">
            <img 
              src={profilePhoto} 
              alt="AESTHETIC EDITORS Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Channel Details */}
        <div className="space-y-3">
          {/* Channel Name */}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in">
            AESTHETIC EDITORS
          </h1>
          
          {/* Handle & Subscriber Count */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
            <span>@aesthetic.editors</span>
            <span className="hidden sm:inline">•</span>
            <span>1.43K subscribers</span>
          </div>

          {/* Channel Stats */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>90 videos</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>20K views</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>+12K this month</span>
            </div>
          </div>

          {/* Channel Bio */}
          <p className="text-foreground/80 max-w-md animate-slide-up">
            🎬 Professional Video Editing & Visual Effects ✨
            Creating cinematic masterpieces daily! Join our creative community.
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
          <a 
            href="https://www.youtube.com/@aesthetic.editors?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold rounded-full ripple glow-hover transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Right side - Digital Clock & Tagline */}
      <DigitalClock />
    </div>
  );
};

export default ChannelInfo;