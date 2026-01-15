import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown, Award, Users, Car, Calendar } from 'lucide-react';
import { ScrollReveal, ZoomOnScroll, Parallax } from '@/components/animations/ScrollAnimations';
import WhyChooseUs from '@/components/WhyChooseUs';
import CourseCards from '@/components/CourseCards';
import InstructorCards from '@/components/InstructorCards';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import BookingModal from '@/components/BookingModal';

const stats = [
  { icon: Calendar, value: '17+', label: 'Years Experience' },
  { icon: Users, value: '1000+', label: 'Happy Students' },
  { icon: Car, value: '10+', label: 'Modern Vehicles' },
  { icon: Award, value: '4.8', label: 'Star Rating' },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
          <iframe
            src="https://www.youtube.com/embed/qF28SEcMV1Y?autoplay=1&mute=1&loop=1&playlist=qF28SEcMV1Y&controls=0&showinfo=0&modestbranding=1&playsinline=1"
            className="absolute inset-0 w-full h-full object-cover scale-150"
            style={{ pointerEvents: 'none' }}
            allow="autoplay; encrypted-media"
            title="Hero Video"
          />
          {/* Fallback gradient */}
          <div className="absolute inset-0 bg-gradient-navy opacity-50" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Jaipur's Premier Driving School Since 2009
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
          >
            Master the Road with{' '}
            <span className="text-gradient-gold">Nav Shree</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Expert Instructors • Modern Fleet (Brezza & More) • Safe, Confident Driving
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-gold w-full sm:w-auto"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-outline-gold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Intro Video
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-6 rounded-2xl glass"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-display text-gradient-gold font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <ScrollReveal direction="left">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Driving Excellence{' '}
                <span className="text-gradient-gold">Since 2009</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over 17 years, Nav Shree Motor Driving School has been Jaipur's trusted name in 
                professional driving education. What started as a small initiative has grown into the 
                city's premier driving school, known for patient instructors, well-maintained vehicles, 
                and an exceptional success rate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is simple: to create confident, safe drivers through polite, professional 
                training. Whether you're learning on our modern Brezza fleet, two-wheelers, or seeking 
                specialized women's classes, we tailor our approach to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Expert-Certified Instructors</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Modern Vehicle Fleet</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Flexible Scheduling</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Image Grid */}
            <div className="relative">
              <ZoomOnScroll>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=500&fit=crop"
                        alt="Driving lesson in progress"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop"
                        alt="Modern Maruti Brezza"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?w=400&h=300&fit=crop"
                        alt="Student learning to drive"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=500&fit=crop"
                        alt="Premium car interior"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ZoomOnScroll>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass border border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-gradient-gold">4.8★</p>
                    <p className="text-xs text-muted-foreground">Rated on Justdial</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-light relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
        <div className="container mx-auto relative">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Why Nav Shree?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              What Makes Us{' '}
              <span className="text-gradient-gold">Different</span>
            </h2>
            <p className="text-muted-foreground">
              We don't just teach driving—we build confident, safe drivers through personalized attention 
              and modern teaching methods.
            </p>
          </ScrollReveal>

          <WhyChooseUs />
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Our Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Tailored Courses for{' '}
              <span className="text-gradient-gold">Every Driver</span>
            </h2>
            <p className="text-muted-foreground">
              From complete beginners to those seeking advanced skills, we have the perfect program for you.
            </p>
          </ScrollReveal>

          <CourseCards />

          <ScrollReveal className="text-center mt-12">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="btn-gold"
            >
              View All Courses & Pricing
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <Parallax className="min-h-[60vh]" speed={0.3}>
        <section className="section-padding relative flex items-center justify-center min-h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop"
              alt="Road background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Learn Road Signs & Driving Basics
              </h2>
              <p className="text-muted-foreground mb-8">
                Watch official Maruti Suzuki tutorials to prepare for your driving journey.
              </p>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group relative w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center mx-auto animate-glow"
              >
                <Play className="w-10 h-10 text-primary-foreground ml-1" />
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              </button>
            </ScrollReveal>
          </div>
        </section>
      </Parallax>

      {/* Instructors Section */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Meet Your{' '}
              <span className="text-gradient-gold">Expert Guides</span>
            </h2>
            <p className="text-muted-foreground">
              Our certified instructors bring years of experience and a passion for teaching.
            </p>
          </ScrollReveal>

          <InstructorCards />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              What Our{' '}
              <span className="text-gradient-gold">Students Say</span>
            </h2>
          </ScrollReveal>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-light via-background to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[150px]" />
        </div>

        <div className="container mx-auto relative">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ready to Start Your{' '}
              <span className="text-gradient-gold">Driving Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join 1000+ successful drivers who learned with Nav Shree. Book your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-gold"
              >
                Book Free Consultation
              </button>
              <a href="tel:09314492544" className="btn-outline-gold">
                Call: 093144 92544
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/_2HA_-FWdF4?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Driving Introduction Video"
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Index;
