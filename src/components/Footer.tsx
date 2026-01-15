import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowUp, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Instructors', path: '/instructors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-light border-t border-border relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg animate-glow"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <div>
                <span className="font-display text-xl text-gradient-gold font-semibold">Nav Shree</span>
                <p className="text-xs text-muted-foreground">Motor Driving School</p>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>Plot No B, 247, Acharya Kriplani Marg, Anand Puri, Adarsh Nagar, Jaipur, Rajasthan 302004</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p>Mon - Sun: Open · Closes 9 PM</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:09314492544" className="hover:text-primary transition-colors">093144 92544</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@navshree.com" className="hover:text-primary transition-colors">info@navshree.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <nav className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/navshree_motor_driving_school/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@marutisuzukiindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest news and driving tips.</p>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Find Us</h4>
            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.80153894091896!2d75.82476249999999!3d26.9062043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7ac615209f5%3A0x7e7a539e60283a78!2sNav%20Shree%20Motor%20Driving%20School%20and%20Automatic%20school!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nav Shree Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Nav Shree Motor Driving School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
