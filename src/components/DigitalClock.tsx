import React, { useState, useEffect } from 'react';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Hide typing animation after 5 seconds
    const typingTimer = setTimeout(() => {
      setShowTyping(false);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(typingTimer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  const timeString = formatTime(time);
  const prevTimeRef = React.useRef(timeString);
  const [flipDigits, setFlipDigits] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    const newFlipDigits = timeString.split('').map((char, index) => 
      char !== prevTimeRef.current[index]
    );
    setFlipDigits(newFlipDigits);
    prevTimeRef.current = timeString;

    // Reset flip animation after 300ms
    const timer = setTimeout(() => {
      setFlipDigits([]);
    }, 300);

    return () => clearTimeout(timer);
  }, [timeString]);

  return (
    <div className="text-center space-y-4 animate-fade-in">
      {/* Digital Clock */}
      <div className="relative">
        <div className="text-4xl lg:text-5xl font-mono font-bold text-foreground bg-card/50 px-6 py-4 rounded-lg backdrop-blur-sm border border-border">
          {timeString.split('').map((char, index) => (
            <span 
              key={index}
              className={`flip-digit inline-block ${flipDigits[index] ? 'animate-bounce-in' : ''}`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Tagline with typing effect */}
      <div className="text-lg text-muted-foreground h-8">
        {showTyping ? (
          <div className="typing-text inline-block">
            your good time starts now
          </div>
        ) : (
          <div className="animate-fade-in">
            your good time starts now
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalClock;