import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1; // Very low volume for peaceful background music
      audio.play().catch(e => {
        // Handle autoplay restrictions
        console.log('Autoplay prevented:', e);
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      {/* Using a royalty-free peaceful background music */}
      <source src="https://www.soundjay.com/misc/sounds-1023.mp3" type="audio/mpeg" />
      {/* Fallback for browsers that don't support the audio element */}
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;