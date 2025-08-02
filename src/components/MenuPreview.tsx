import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import signatureDish1 from '@/assets/signature-dish-1.jpg';
import signatureDish2 from '@/assets/signature-dish-2.jpg';
import signatureDish3 from '@/assets/signature-dish-3.jpg';

const MenuPreview = () => {
  const signatureDishes = [
    {
      id: 1,
      name: "Osso Buco Milanese",
      description: "Slow-braised veal shanks with saffron risotto and gremolata",
      price: "$42",
      image: signatureDish1
    },
    {
      id: 2,
      name: "Truffle Linguine",
      description: "House-made pasta with black truffle, pecorino, and fresh herbs",
      price: "$38",
      image: signatureDish2
    },
    {
      id: 3,
      name: "Bistecca Fiorentina",
      description: "Dry-aged T-bone steak with rosemary potatoes and seasonal vegetables",
      price: "$55",
      image: signatureDish3
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-warm-brown mb-6">
              Signature Dishes
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our most beloved creations, each dish telling a story of tradition, 
              innovation, and the finest ingredients sourced from trusted suppliers.
            </p>
          </div>

          {/* Signature Dishes */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {signatureDishes.map((dish) => (
              <Card key={dish.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 border-border/50">
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-restaurant-warm-brown group-hover:text-restaurant-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <span className="text-lg font-bold text-restaurant-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {dish.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Explore our complete menu featuring appetizers, mains, desserts, and our curated wine selection.
            </p>
            <Link to="/menu">
              <Button variant="gold" size="xl" className="group">
                View Full Menu
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;