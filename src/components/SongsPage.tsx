import React, { useState } from 'react';
import { Upload, Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const SongsPage: React.FC = () => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Peaceful Background Music",
      artist: "Studio Artist",
      duration: "3:24",
      url: "https://www.soundjay.com/misc/sounds-1023.mp3"
    },
    {
      id: 2,
      title: "Wedding Celebration",
      artist: "Studio Artist",
      duration: "4:12",
      url: "/audio/wedding-celebration.mp3"
    }
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('audio/')) {
      const newSong = {
        id: songs.length + 1,
        title: file.name.replace(/\.[^/.]+$/, ""),
        artist: "Uploaded",
        duration: "Unknown",
        url: URL.createObjectURL(file)
      };
      setSongs([...songs, newSong]);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Songs Library</h2>
          <p className="text-muted-foreground">Manage your music collection</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
            id="audio-upload"
          />
          <Button asChild className="flex items-center gap-2">
            <label htmlFor="audio-upload" className="cursor-pointer">
              <Upload className="w-4 h-4" />
              Upload Song
            </label>
          </Button>
        </div>
      </div>

      {/* Current Playing Section */}
      <Card className="bg-card border border-border">
        <CardHeader>
          <CardTitle className="text-lg">Now Playing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">
                {songs[currentSong]?.title || "No song selected"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {songs[currentSong]?.artist || "Unknown artist"}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={prevSong}>
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button onClick={togglePlay} size="sm">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button variant="outline" size="sm" onClick={nextSong}>
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Volume2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Songs List */}
      <div className="grid gap-4">
        <h3 className="text-xl font-semibold text-foreground">All Songs</h3>
        {songs.map((song, index) => (
          <Card 
            key={song.id} 
            className={`bg-card border border-border cursor-pointer hover:bg-accent transition-colors ${
              currentSong === index ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setCurrentSong(index)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{song.title}</h4>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {song.duration}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SongsPage;