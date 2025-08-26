import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'videos', label: 'Videos' },
    { id: 'shorts', label: 'Shorts' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'posts', label: 'Posts' }
  ];

  const handleSearchToggle = () => {
    setSearchExpanded(!searchExpanded);
    if (searchExpanded) {
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-link text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'text-foreground active' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center">
          {searchExpanded ? (
            <div className="flex items-center gap-2 bg-input rounded-full px-4 py-2 animate-slide-in-left">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-foreground placeholder-muted-foreground w-64"
                autoFocus
              />
              <button
                onClick={handleSearchToggle}
                className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSearchToggle}
              className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 glow-hover"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;