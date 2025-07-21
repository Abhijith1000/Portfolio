import { Code, Palette, Users, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Problem Solving', icon: Target },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, passions, and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant bg-card">
                <img
                  src="/lovable-uploads/52bbde1e-4f0e-42cc-b480-92ccbd414257.png"
                  alt="Abhijth Gangadharan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-blue rounded-full animate-float"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Hello! I'm Abhijth Gangadharan
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate Computer Science Engineering student at Government Model Engineering College, 
                driven by the endless possibilities of technology and innovation. I believe in creating 
                meaningful solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in software development has been fueled by curiosity and a desire to learn. 
                I enjoy working on diverse projects that challenge me to grow and expand my skill set. 
                From frontend development to full-stack applications, I'm always eager to tackle new challenges.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">My Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To leverage technology in creating innovative solutions that solve real-world problems 
                and enhance user experiences. I'm committed to continuous learning and contributing 
                to the tech community.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-smooth"
                >
                  <skill.icon className="h-6 w-6 text-accent" />
                  <span className="text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;