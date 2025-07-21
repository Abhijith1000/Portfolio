import { useState } from 'react';
import { GraduationCap, School, Download, Upload, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [isAdmin, setIsAdmin] = useState(false); // This would be managed by authentication system
  const [resumeFile, setResumeFile] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      // In a real app, you would upload to a server
      const fileUrl = URL.createObjectURL(file);
      setResumeFile(fileUrl);
    }
  };

  const handleDownload = () => {
    if (resumeFile) {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'Abhijth_Gangadharan_Resume.pdf';
      link.click();
    }
  };

  const education = [
    {
      degree: 'BTech in Computer Science Engineering',
      institution: 'Government Model Engineering College',
      period: '2022 - 2026',
      icon: GraduationCap,
      description: 'Currently pursuing Bachelor of Technology with focus on software development and computer systems.'
    },
    {
      degree: '12th Grade - Science Stream',
      institution: 'NAM Higher Secondary School',
      period: '2019 - 2021',
      icon: School,
      description: 'Completed higher secondary education with science subjects, building foundation for engineering studies.'
    }
  ];

  const skills = [
    { category: 'Programming Languages', skills: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'] },
    { category: 'Web Technologies', skills: ['React', 'HTML5', 'CSS3', 'Node.js', 'Express.js'] },
    { category: 'Database', skills: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Technologies', skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'] },
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and technical skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Award className="h-6 w-6 text-accent mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-smooth">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <edu.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {edu.period}
                      </p>
                      <p className="text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-soft">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download/Upload Section */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-card rounded-lg shadow-elegant max-w-md mx-auto">
            <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Resume Document
            </h3>
            
            {/* Admin Upload Section */}
            {isAdmin && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Upload Resume (PDF only)
                </label>
                <div className="flex items-center justify-center">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-smooth">
                      <Upload className="h-4 w-4" />
                      <span>Upload PDF</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Download Section */}
            {resumeFile ? (
              <Button
                onClick={handleDownload}
                className="bg-accent hover:bg-sky-blue text-accent-foreground shadow-elegant hover:shadow-glow transition-spring"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            ) : (
              <div className="text-muted-foreground">
                <p className="mb-2">Resume will be available soon</p>
                <p className="text-sm">Check back later for the download link</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;