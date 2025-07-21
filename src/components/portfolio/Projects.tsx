import { useState } from 'react';
import { ExternalLink, Code, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Oraculum',
      role: 'Frontend Developer',
      description: 'A modern web application with intuitive user interface and responsive design.',
      longDescription: 'Oraculum is a comprehensive web application that I developed as a frontend developer. The project focuses on creating an intuitive and responsive user interface that provides excellent user experience across all devices. Built with modern web technologies, it features smooth animations, interactive components, and a clean design system.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      image: '/lovable-uploads/a549ce8e-d3e5-4d3d-bb4e-e83f9f2267f4.png',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Hostel Management System',
      role: 'Software Developer',
      description: 'A comprehensive system for managing hostel operations and student accommodations.',
      longDescription: 'The Hostel Management System is a full-stack application designed to streamline hostel operations. As a software developer on this project, I implemented features for room allocation, student registration, fee management, and administrative controls. The system includes user authentication, real-time updates, and comprehensive reporting capabilities.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Socket.io'],
      image: '/lovable-uploads/6df7a180-8d5d-4d0c-a12f-53e950909748.png',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      role: 'Software Developer',
      description: 'A real-time messaging application with modern chat features and notifications.',
      longDescription: 'This real-time chat application demonstrates my ability to work with real-time technologies and create engaging user experiences. Built with modern web technologies, it features instant messaging, user presence indicators, message history, and push notifications. The application supports multiple chat rooms and private messaging.',
      technologies: ['Socket.io', 'React', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/lovable-uploads/cdf39fc0-0424-4b5b-bf48-cd07e86510ad.png',
      category: 'Real-time Application'
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and the technologies I've been working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-spring hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button
                    onClick={() => openModal(project.id)}
                    className="bg-accent hover:bg-sky-blue text-accent-foreground shadow-elegant"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-accent font-medium mb-3">
                  {project.role}
                </p>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <Button
                  onClick={() => openModal(project.id)}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-foreground">
                {selectedProjectData.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="mb-4">
                <span className="text-sm text-accent font-medium">
                  Role: {selectedProjectData.role}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProjectData.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-sky-blue text-accent-foreground shadow-elegant">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Code className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;