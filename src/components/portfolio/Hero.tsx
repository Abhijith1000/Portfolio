import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-sky-blue rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-soft-cyan rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-accent rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Abhijth
            <span className="block text-accent">Gangadharan</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Aspiring Software Engineer
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className="h-px w-12 bg-accent"></div>
          <span className="text-accent font-medium">Welcome to my portfolio</span>
          <div className="h-px w-12 bg-accent"></div>
        </div>

        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions and bringing ideas to life through code. 
          Currently pursuing BTech in Computer Science Engineering.
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-sky-blue transition-spring hover:scale-105 shadow-elegant"
        >
          Explore My Work
          <ChevronDown className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;