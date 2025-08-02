import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuSections = [
    {
      title: "Antipasti",
      description: "Traditional Italian starters to awaken your palate",
      items: [
        {
          name: "Antipasto della Casa",
          description: "Chef's selection of cured meats, artisanal cheeses, and marinated vegetables",
          price: "$24"
        },
        {
          name: "Burrata con Prosciutto",
          description: "Creamy burrata with San Daniele prosciutto, arugula, and balsamic glaze",
          price: "$18"
        },
        {
          name: "Crudo di Tonno",
          description: "Yellowfin tuna carpaccio with citrus, capers, and extra virgin olive oil",
          price: "$22"
        },
        {
          name: "Bruschetta Trio",
          description: "Three varieties: classic tomato basil, mushroom truffle, and ricotta fig",
          price: "$16"
        }
      ]
    },
    {
      title: "Primi Piatti",
      description: "House-made pasta and risotto dishes",
      items: [
        {
          name: "Truffle Linguine",
          description: "Fresh linguine with black truffle, pecorino Romano, and butter sauce",
          price: "$38"
        },
        {
          name: "Lobster Ravioli",
          description: "Handmade ravioli filled with Maine lobster in saffron cream sauce",
          price: "$42"
        },
        {
          name: "Risotto ai Porcini",
          description: "Carnaroli rice with porcini mushrooms, Parmigiano-Reggiano, and herbs",
          price: "$28"
        },
        {
          name: "Pappardelle Bolognese",
          description: "Wide ribbon pasta with traditional meat sauce, slow-cooked for 6 hours",
          price: "$32"
        }
      ]
    },
    {
      title: "Secondi Piatti",
      description: "Main courses featuring the finest meats and seafood",
      items: [
        {
          name: "Bistecca Fiorentina",
          description: "Dry-aged T-bone steak with rosemary roasted potatoes and seasonal vegetables",
          price: "$55"
        },
        {
          name: "Osso Buco Milanese",
          description: "Slow-braised veal shanks with saffron risotto and gremolata",
          price: "$42"
        },
        {
          name: "Branzino in Crosta",
          description: "Mediterranean sea bass baked in sea salt crust with lemon and herbs",
          price: "$36"
        },
        {
          name: "Agnello alle Erbe",
          description: "Herb-crusted rack of lamb with roasted vegetables and red wine jus",
          price: "$48"
        }
      ]
    },
    {
      title: "Dolci",
      description: "Traditional and contemporary Italian desserts",
      items: [
        {
          name: "Tiramisu della Casa",
          description: "Classic tiramisu made with mascarpone, espresso, and cocoa",
          price: "$12"
        },
        {
          name: "Panna Cotta ai Frutti di Bosco",
          description: "Vanilla panna cotta with mixed berry compote and mint",
          price: "$11"
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy shells filled with sweet ricotta, candied fruits, and pistachios",
          price: "$10"
        },
        {
          name: "Gelato Selection",
          description: "Three scoops of artisanal gelato: pistachio, stracciatella, and amaretto",
          price: "$9"
        }
      ]
    }
  ];

  const wines = [
    {
      category: "Champagne & Sparkling",
      items: [
        { name: "Dom Pérignon 2012", price: "$320" },
        { name: "Franciacorta DOCG", price: "$85" },
        { name: "Prosecco di Valdobbiadene", price: "$48" }
      ]
    },
    {
      category: "Italian Reds",
      items: [
        { name: "Barolo Brunate 2018", price: "$180" },
        { name: "Chianti Classico Riserva", price: "$75" },
        { name: "Amarone della Valpolicella", price: "$95" }
      ]
    },
    {
      category: "Italian Whites",
      items: [
        { name: "Vermentino di Sardegna", price: "$55" },
        { name: "Gavi di Gavi", price: "$65" },
        { name: "Soave Classico", price: "$45" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center text-restaurant-cream hover:text-restaurant-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl text-restaurant-cream/90 max-w-2xl mx-auto">
              A carefully curated selection of authentic Italian dishes prepared with passion and the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Food Menu */}
            <div className="space-y-16 mb-20">
              {menuSections.map((section, index) => (
                <div key={index}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-restaurant-warm-brown mb-4">
                      {section.title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-gold mx-auto mb-6"></div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {section.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="group hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-restaurant-warm-brown group-hover:text-restaurant-gold transition-colors duration-300 mb-2">
                                {item.name}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="ml-6 text-right">
                              <span className="text-2xl font-bold text-restaurant-gold">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Wine Selection */}
            <div className="border-t border-border pt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-restaurant-warm-brown mb-4">
                  Wine Selection
                </h2>
                <div className="w-16 h-1 bg-gradient-gold mx-auto mb-6"></div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Carefully selected wines to complement your dining experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {wines.map((category, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-restaurant-warm-brown text-center">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((wine, wineIndex) => (
                        <div key={wineIndex} className="flex justify-between items-center">
                          <span className="text-foreground">{wine.name}</span>
                          <span className="text-restaurant-gold font-semibold">{wine.price}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
              <p className="text-muted-foreground italic mb-4">
                "Prices are subject to change based on seasonal availability. Please inform us of any dietary restrictions or allergies."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <a href="tel:+1234567890">Make a Reservation</a>
                </Button>
                <Link to="/">
                  <Button variant="elegant" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;