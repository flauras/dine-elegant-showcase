import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-restaurant-dark-brown text-restaurant-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Restaurant Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-restaurant-gold-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold">Bella Vista</span>
              </div>
              <p className="text-restaurant-cream/80 leading-relaxed">
                Where culinary excellence meets elegant dining. Experience the finest flavors 
                in our warm and inviting atmosphere.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-restaurant-cream hover:text-restaurant-gold hover:bg-restaurant-cream/10"
                  asChild
                >
                  <a 
                    href="https://instagram.com/bellavista" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-restaurant-gold">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-restaurant-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-restaurant-cream/90">
                      123 Gourmet Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                    <Button
                      variant="link"
                      className="text-restaurant-gold hover:text-restaurant-cream p-0 h-auto mt-2"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=123+Gourmet+Street,+New+York,+NY+10001" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View on Google Maps →
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-restaurant-gold flex-shrink-0" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-restaurant-cream/90 hover:text-restaurant-gold transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-restaurant-gold flex-shrink-0" />
                  <a 
                    href="mailto:info@bellavista.com" 
                    className="text-restaurant-cream/90 hover:text-restaurant-gold transition-colors"
                  >
                    info@bellavista.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-restaurant-gold">Hours</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-restaurant-gold mt-1 flex-shrink-0" />
                  <div className="space-y-2 text-restaurant-cream/90">
                    <div className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>4:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-restaurant-cream/20">
                <p className="text-restaurant-cream/70 text-sm">
                  Reservations recommended<br />
                  Call ahead for large parties
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-restaurant-cream/20 pt-8 text-center">
            <p className="text-restaurant-cream/60 text-sm">
              © 2024 Bella Vista Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;