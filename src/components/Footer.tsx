import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={logo} alt="Max Mood Barbershop" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-secondary-foreground/70">
              Premium grooming experience for the modern gentleman.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/70">931 W 75th St suite 111, Naperville, IL 60540</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-secondary-foreground/70">(929) 900-0355</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-secondary-foreground/70">info@maxmood.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/70">
                  <p>Open Every Day: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-secondary-foreground/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/booking" className="text-secondary-foreground/70 hover:text-accent transition-colors">Book Now</a></li>
              <li><a href="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Max Mood Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
