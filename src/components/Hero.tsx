import { Button } from '@/components/ui/button';
import heroImage from '@/assets/restaurant-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-restaurant-cream opacity-90">
          Where Culinary Excellence Meets Elegant Dining
        </p>
        <p className="text-lg mb-12 text-restaurant-cream/80 max-w-2xl mx-auto">
          Experience the finest flavors crafted with passion and served with sophistication in our warm, inviting atmosphere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="gold" 
            size="xl"
            onClick={() => scrollToSection('menu')}
            className="group"
          >
            View Our Menu
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
          <Button 
            variant="elegant" 
            size="xl"
            onClick={() => scrollToSection('about')}
          >
            Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;