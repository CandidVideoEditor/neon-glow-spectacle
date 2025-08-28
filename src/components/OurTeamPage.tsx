import React from 'react';
import { Camera, Film, Palette, Video, Layout } from 'lucide-react';

const OurTeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sagar',
      role: 'Video Editor, Film Maker, Content Creator',
      icon: <Film className="w-8 h-8" />,
      bio: 'Master storyteller with 8+ years of experience in video editing and filmmaking. Sagar transforms raw footage into cinematic masterpieces, specializing in wedding films and creative content that captures emotions perfectly.',
      skills: ['Video Editing', 'Color Grading', 'Motion Graphics', 'Storytelling'],
      collageImages: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300'
      ]
    },
    {
      id: 2,
      name: 'Sandeep',
      role: 'Digital Management Head',
      icon: <Layout className="w-8 h-8" />,
      bio: 'Strategic digital marketing expert with exceptional project management skills. Sandeep orchestrates seamless client experiences and ensures every project meets the highest standards from conception to delivery.',
      skills: ['Project Management', 'Digital Strategy', 'Client Relations', 'Team Leadership'],
      collageImages: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
      ]
    },
    {
      id: 3,
      name: 'Preeti',
      role: 'Animator and VFX Artist',
      icon: <Palette className="w-8 h-8" />,
      bio: 'Creative powerhouse specializing in animation and visual effects. Preeti brings magical elements to life, creating stunning visual narratives that enhance every frame with artistic excellence.',
      skills: ['2D/3D Animation', 'Visual Effects', 'Motion Design', 'Creative Direction'],
      collageImages: [
        'https://images.unsplash.com/photo-1494790108755-2616c862750e?w=300',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'
      ]
    },
    {
      id: 4,
      name: 'Ghanshyam',
      role: 'Cinematographer',
      icon: <Camera className="w-8 h-8" />,
      bio: 'Visionary cinematographer with an eye for breathtaking compositions. Ghanshyam captures life\'s most precious moments with technical precision and artistic flair, creating timeless visual poetry.',
      skills: ['Cinematography', 'Lighting Design', 'Camera Operations', 'Visual Composition'],
      collageImages: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
      ]
    },
    {
      id: 5,
      name: 'Mahesh',
      role: 'Album Designer',
      icon: <Video className="w-8 h-8" />,
      bio: 'Meticulous album designer who transforms memories into beautiful keepsakes. Mahesh crafts elegant photo albums and digital presentations that preserve your special moments in stunning layouts.',
      skills: ['Album Design', 'Layout Design', 'Photo Editing', 'Print Production'],
      collageImages: [
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Meet Our Creative Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate professionals dedicated to capturing and creating your most precious memories with artistic excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="group animate-fade-in bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Header */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  {/* Main Profile Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={member.collageImages[0]} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Unique Collage Design */}
              <div className="mb-6 relative h-32 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <div className="absolute inset-0 grid grid-cols-4 gap-1 p-2">
                  {member.collageImages.map((image, idx) => (
                    <div 
                      key={idx}
                      className={`rounded-lg overflow-hidden ${
                        idx === 0 ? 'col-span-2 row-span-2' : 
                        idx === 1 ? 'col-span-2' : 
                        idx === 2 ? 'col-span-1' : 'col-span-1'
                      }`}
                      style={{
                        transform: `rotate(${idx % 2 === 0 ? '2deg' : '-2deg'})`,
                        zIndex: 4 - idx
                      }}
                    >
                      <img 
                        src={image}
                        alt={`${member.name} work ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ filter: `hue-rotate(${idx * 30}deg)` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our creative professionals bring your vision to life with exceptional quality and artistic excellence.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 hover:scale-105 transform">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;