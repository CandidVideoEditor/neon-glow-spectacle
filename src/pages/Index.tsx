import React, { useState } from 'react';
import AnimatedBanner from '../components/AnimatedBanner';
import ChannelInfo from '../components/ChannelInfo';
import Navigation from '../components/Navigation';
import FloatingMusicPlayer from '../components/FloatingMusicPlayer';
import HomePage from '../components/HomePage';
import VideosPage from '../components/VideosPage';
import ShortsPage from '../components/ShortsPage';
import PlaylistsPage from '../components/PlaylistsPage';
import PostsPage from '../components/PostsPage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'videos':
        return <VideosPage />;
      case 'shorts':
        return <ShortsPage />;
      case 'playlists':
        return <PlaylistsPage />;
      case 'posts':
        return <PostsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Music Player */}
      <FloatingMusicPlayer />
      
      {/* Animated Banner */}
      <AnimatedBanner />
      
      {/* Channel Info Section */}
      <ChannelInfo />
      
      {/* Navigation Menu */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content Area with Page Transitions */}
      <main className="relative">
        <div 
          key={activeTab} 
          className="animate-fade-in"
        >
          {renderActiveTab()}
        </div>
      </main>
    </div>
  );
};

export default Index;
