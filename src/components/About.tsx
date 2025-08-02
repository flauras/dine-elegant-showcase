import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Master Chefs",
      description: "Our culinary team brings decades of experience from world-renowned kitchens."
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Every dish is crafted with love using only the finest, locally-sourced ingredients."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in fine dining and exceptional customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-warm-brown mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 1985, Bella Vista has been a cornerstone of fine dining, where traditional recipes 
              meet innovative culinary techniques. Our commitment to excellence has made us a beloved 
              destination for those seeking an extraordinary dining experience.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-restaurant-warm-brown mb-4">
                A Legacy of Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded by Chef Marco Benedetti, Bella Vista began as a small family restaurant 
                with a simple mission: to share the authentic flavors of Italy with our community. 
                Over the years, we've evolved while staying true to our roots.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, under the guidance of Executive Chef Isabella Romano, we continue to push 
                culinary boundaries while honoring the timeless techniques that have made Italian 
                cuisine beloved worldwide.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-restaurant-warm-brown mb-4">
                Our Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe that dining is more than just eating—it's about creating memories, 
                celebrating life's special moments, and bringing people together around exceptional food.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every ingredient is carefully selected, every dish thoughtfully prepared, and every 
                guest treated like family. This is the Bella Vista way.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-restaurant-gold-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-restaurant-warm-brown mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;