import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Resume from '@/components/portfolio/Resume';
import Projects from '@/components/portfolio/Projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
    </div>
  );
};

export default Index;
