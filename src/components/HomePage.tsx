import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-96 flex items-center justify-center">
      {/* Floating background dots */}
      <div className="floating-dots">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Welcome content */}
      <div className="text-center space-y-6 z-10 animate-fade-in">
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-up">
          Welcome to the Channel
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Discover amazing content, join our community, and embark on an incredible journey of learning and entertainment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-full glow-hover transition-all duration-300">
            Latest Videos
          </button>
          <button className="px-8 py-3 border border-border hover:bg-secondary text-foreground font-semibold rounded-full transition-all duration-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;