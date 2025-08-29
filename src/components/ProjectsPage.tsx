import React from 'react';
import { Folder, Calendar, User, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Sharma Wedding Collection",
      description: "Complete wedding photography and videography package",
      date: "December 2024",
      client: "Mr. & Mrs. Sharma",
      status: "Completed",
      thumbnail: "/images/layer1/01.jpg"
    },
    {
      id: 2,
      title: "Corporate Event - Tech Conference",
      description: "Multi-day corporate event coverage with live streaming",
      date: "November 2024", 
      client: "TechCorp Ltd.",
      status: "In Progress",
      thumbnail: "/images/layer2/05.jpg"
    },
    {
      id: 3,
      title: "Birthday Celebration Package",
      description: "Custom birthday party documentation and highlights",
      date: "October 2024",
      client: "The Johnson Family",
      status: "Completed",
      thumbnail: "/images/layer3/10.jpg"
    },
    {
      id: 4,
      title: "Music Video Production",
      description: "Professional music video creation for local artist",
      date: "September 2024",
      client: "Rising Star Records",
      status: "Completed",
      thumbnail: "/images/layer1/15.jpg"
    },
    {
      id: 5,
      title: "Anniversary Documentary",
      description: "50th anniversary celebration documentary",
      date: "August 2024",
      client: "The Anderson Family",
      status: "Delivered",
      thumbnail: "/images/layer2/12.jpg"
    },
    {
      id: 6,
      title: "Fashion Shoot Portfolio",
      description: "Professional fashion photography session",
      date: "July 2024",
      client: "Elite Models Agency",
      status: "Completed",
      thumbnail: "/images/layer3/08.jpg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500';
      case 'In Progress': return 'text-yellow-500';
      case 'Delivered': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
          Our Projects
        </h2>
        <p className="text-muted-foreground animate-slide-up">
          Explore our portfolio of creative projects and client collaborations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className="bg-card border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                {project.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Folder className="w-4 h-4" />
                    <span>Project Files</span>
                  </div>
                  <FileText className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;