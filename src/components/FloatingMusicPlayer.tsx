import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Move, Music } from 'lucide-react';

const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 16 });
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentSong, setCurrentSong] = useState({ title: 'Chill Beats', artist: 'Lo-fi Hip Hop', language: 'English' });
  const [isSpotifyMode, setIsSpotifyMode] = useState(false);
  const [spotifyTrackId, setSpotifyTrackId] = useState('4iV5W9uYEdYUVa79Axb7Rh'); // Default track
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const songs = {
    Kannada: [
      { title: 'Yaare Koogadali', artist: 'Sanjith Hegde' },
      { title: 'Ondu Malebillu', artist: 'Armaan Malik' }
    ],
    Hindi: [
      { title: 'Tum Hi Ho', artist: 'Arijit Singh' },
      { title: 'Kesariya', artist: 'Pritam' }
    ],
    Telugu: [
      { title: 'Buttabomma', artist: 'Armaan Malik' },
      { title: 'Ramuloo Ramulaa', artist: 'Anurag Kulkarni' }
    ],
    Tamil: [
      { title: 'Vaathi Coming', artist: 'Anirudh' },
      { title: 'Ennodu Nee Irundhaal', artist: 'Sid Sriram' }
    ],
    Marathi: [
      { title: 'Zingaat', artist: 'Ajay Gogavale' },
      { title: 'Bappa Morya', artist: 'Shankar Mahadevan' }
    ],
    Malayalam: [
      { title: 'Paattu Paadava', artist: 'K.J. Yesudas' },
      { title: 'Malyalam Melody', artist: 'Vineeth Sreenivasan' }
    ],
    English: [
      { title: 'Chill Beats', artist: 'Lo-fi Hip Hop' },
      { title: 'Summer Vibes', artist: 'Indie Pop' }
    ],
    Spotify: [
      { title: 'Spotify Tracks', artist: 'Stream Free', spotifyId: '4iV5W9uYEdYUVa79Axb7Rh' },
      { title: 'Popular Hits', artist: 'Spotify', spotifyId: '0VjIjW4GlUZAMYd2vXMi3b' }
    ]
  };

  const spotifyTracks = [
    { id: '4iV5W9uYEdYUVa79Axb7Rh', title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: '0VjIjW4GlUZAMYd2vXMi3b', title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: '3n3Ppam7vgaVa1iaRUc9Lp', title: 'Mr. Brightside', artist: 'The Killers' },
    { id: '7qiZfU4dY1lWllzX7mPBI3', title: 'Someone Like You', artist: 'Adele' },
    { id: '4VqPOruhp5EdPBeR92t6lQ', title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
    { id: '1Je1IMUlBXcx1Fz0WE7oPT', title: 'Bad Guy', artist: 'Billie Eilish' },
    { id: '11dFghVXANMlKmJXsNCbNl', title: 'Someone You Loved', artist: 'Lewis Capaldi' },
    { id: '0sf0Es2FDLt3Zb5aSzIVQF', title: 'Watermelon Sugar', artist: 'Harry Styles' },
    { id: '6f70bfcWU0aPCnQSAOBBnqX', title: 'Levitating', artist: 'Dua Lipa' },
    { id: '2plbrEY59IikOBgBGLjaoe', title: 'drivers license', artist: 'Olivia Rodrigo' }
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const selectSong = (language: string, song: { title: string; artist: string; spotifyId?: string }) => {
    if (language === 'Spotify' && song.spotifyId) {
      setIsSpotifyMode(true);
      setSpotifyTrackId(song.spotifyId);
      setCurrentSong({ title: 'Spotify Track', artist: 'Loading...', language: 'Spotify' });
    } else {
      setIsSpotifyMode(false);
      setCurrentSong({ ...song, language });
    }
    setShowPlaylist(false);
    setIsPlaying(true);
  };

  const selectSpotifyTrack = (track: { id: string; title: string; artist: string }) => {
    setIsSpotifyMode(true);
    setSpotifyTrackId(track.id);
    setCurrentSong({ title: track.title, artist: track.artist, language: 'Spotify' });
    setShowPlaylist(false);
    setIsPlaying(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      
      // Constrain to viewport
      const maxX = window.innerWidth - 250; // player width
      const maxY = window.innerHeight - 120; // player height
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div 
      ref={dragRef}
      className="fixed z-50 glass rounded-xl p-3 w-64 shadow-lg cursor-move"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        backgroundColor: 'hsl(var(--glass-bg))'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Drag Handle */}
      <div className="flex items-center justify-between mb-2">
        <Move className="w-3 h-3 text-muted-foreground" />
        <div className="text-xs text-muted-foreground">Now Playing</div>
      </div>

      {/* Song Info - Compact */}
      <div className="flex items-center gap-2 mb-2">
        <button 
          onClick={() => setShowPlaylist(!showPlaylist)}
          className="w-8 h-8 bg-muted rounded flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <Music className="w-3 h-3 text-foreground" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-foreground truncate">
            {currentSong.title}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {currentSong.artist} • {currentSong.language}
          </div>
        </div>
      </div>

      {/* Playlist Dropdown */}
      {showPlaylist && (
        <div className="absolute top-full left-0 w-64 max-h-60 overflow-y-auto bg-card border border-white/10 rounded-lg mt-1 z-50">
          {/* Spotify Tracks Section */}
          <div className="p-2 border-b border-white/10">
            <div className="text-xs font-semibold text-green-400 mb-1 flex items-center gap-1">
              🎵 Spotify Free
            </div>
            {spotifyTracks.map((track, index) => (
              <button
                key={`spotify-${index}`}
                onClick={() => selectSpotifyTrack(track)}
                className="w-full text-left p-1 hover:bg-white/5 rounded text-xs text-foreground/80 hover:text-foreground transition-colors"
              >
                <div className="truncate">{track.title}</div>
                <div className="text-xs text-muted-foreground truncate">{track.artist}</div>
              </button>
            ))}
          </div>
          
          {/* Local Songs */}
          {Object.entries(songs).filter(([language]) => language !== 'Spotify').map(([language, songList]) => (
            <div key={language} className="p-2">
              <div className="text-xs font-semibold text-muted-foreground mb-1">{language}</div>
              {songList.map((song, index) => (
                <button
                  key={index}
                  onClick={() => selectSong(language, song)}
                  className="w-full text-left p-1 hover:bg-white/5 rounded text-xs text-foreground/80 hover:text-foreground transition-colors"
                >
                  <div className="truncate">{song.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{song.artist}</div>
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Spotify Embed Player */}
      {isSpotifyMode && isPlaying && (
        <div className="absolute top-full left-0 w-64 mt-1 rounded-lg overflow-hidden z-40">
          <iframe
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Waveform Animation - Red */}
      <div className="flex items-center justify-center gap-0.5 h-4 mb-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`waveform-bar bg-destructive w-0.5 rounded-full ${
              isPlaying ? 'waveform-bar' : 'h-0.5'
            }`}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationPlayState: isPlaying ? 'running' : 'paused'
            }}
          />
        ))}
      </div>

      {/* Controls - Compact */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <button className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200">
          <SkipBack className="w-3 h-3 text-foreground" />
        </button>
        
        <button 
          onClick={togglePlayPause}
          className="p-2 bg-destructive hover:bg-destructive/80 rounded-full transition-all duration-200"
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 text-destructive-foreground" />
          ) : (
            <Play className="w-3 h-3 text-destructive-foreground ml-0.5" />
          )}
        </button>
        
        <button className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200">
          <SkipForward className="w-3 h-3 text-foreground" />
        </button>
      </div>

      {/* Volume Control - Compact */}
      <div className="flex items-center gap-1">
        <Volume2 className="w-3 h-3 text-muted-foreground" />
        <div className="flex-1 relative">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full h-0.5 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, hsl(var(--destructive)) 0%, hsl(var(--destructive)) ${volume}%, rgba(255,255,255,0.2) ${volume}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMusicPlayer;