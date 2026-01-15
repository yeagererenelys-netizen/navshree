import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Car, Bike, UserRound, Truck, FileCheck, Check, ArrowRight } from 'lucide-react';
import BookingModal from '@/components/BookingModal';

const courses = [
  {
    id: 'manual',
    icon: Car,
    title: 'Manual Car Driving',
    tagline: 'Master the Art of Driving',
    description: 'Complete training on gear shifting, clutch control, steering, and all fundamentals. Learn on our well-maintained Maruti Suzuki Brezza vehicles with dual controls for your safety.',
    duration: '10-15 Days',
    sessions: '10-15 Sessions',
    price: '₹5,000',
    features: [
      'Basic to advanced vehicle controls',
      'Traffic rules and road signs',
      'Parking techniques (parallel, perpendicular)',
      'Highway and city driving',
      'Night driving basics',
      'Test preparation',
    ],
    popular: true,
  },
  {
    id: 'automatic',
    icon: Car,
    title: 'Automatic Car Driving',
    tagline: 'The Easy Way to Learn',
    description: 'Perfect for those who want a simpler learning experience. Focus on road awareness and confidence building without the complexity of manual transmission.',
    duration: '7-10 Days',
    sessions: '7-10 Sessions',
    price: '₹6,000',
    features: [
      'No clutch, no gear shifting hassles',
      'Focus on road rules and safety',
      'Confidence building exercises',
      'City traffic navigation',
      'Parking and maneuvering',
      'License test preparation',
    ],
    popular: false,
  },
  {
    id: 'two-wheeler',
    icon: Bike,
    title: 'Two-Wheeler Training',
    tagline: 'Ride with Confidence',
    description: 'Comprehensive scooter and motorcycle training covering balance, safety, and traffic awareness. Ideal for beginners and those looking to improve their riding skills.',
    duration: '5-7 Days',
    sessions: '5-7 Sessions',
    price: '₹2,500',
    features: [
      'Balance and control basics',
      'Starting and stopping techniques',
      'Traffic navigation',
      'Safety gear and practices',
      'Emergency handling',
      'License preparation',
    ],
    popular: false,
  },
  {
    id: 'women',
    icon: UserRound,
    title: "Women's Special Classes",
    tagline: 'Learn in a Safe Environment',
    description: 'Comfortable, private sessions designed specifically for women. Our patient, female-friendly instructors ensure a supportive and stress-free learning environment.',
    duration: '10-15 Days',
    sessions: '10-15 Sessions',
    price: '₹5,500',
    features: [
      'Private, one-on-one sessions',
      'Patient, supportive instructors',
      'Flexible timing options',
      'Safe and comfortable environment',
      'Complete driving curriculum',
      'Confidence building focus',
    ],
    popular: false,
  },
  {
    id: 'heavy',
    icon: Truck,
    title: 'Heavy Vehicle Training',
    tagline: 'For Professional Drivers',
    description: 'Advanced training for those looking to drive commercial vehicles, trucks, and buses. Includes special maneuvering techniques and commercial license preparation.',
    duration: '15-20 Days',
    sessions: '15-20 Sessions',
    price: '₹8,000',
    features: [
      'Large vehicle handling',
      'Advanced maneuvering',
      'Loading and safety protocols',
      'Commercial traffic rules',
      'Long-distance driving',
      'Commercial license prep',
    ],
    popular: false,
  },
  {
    id: 'license',
    icon: FileCheck,
    title: 'License Assistance',
    tagline: 'Hassle-Free Documentation',
    description: 'Complete RTO support including documentation, learning license, permanent license processing, and international license assistance.',
    duration: 'As Needed',
    sessions: 'Flexible',
    price: '₹1,500+',
    features: [
      'Learning license application',
      'Permanent license processing',
      'International license support',
      'RTO documentation help',
      'Test scheduling assistance',
      'Renewal services',
    ],
    popular: false,
  },
];

const Courses = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleBookNow = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsBookingOpen(true);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light relative overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Our Courses
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Tailored Courses for{' '}
              <span className="text-gradient-gold">Every Driver</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From complete beginners to professionals, we have the perfect program designed for your needs and goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <StaggerItem key={course.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`card-premium relative overflow-hidden h-full ${
                    course.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {course.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <course.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground">{course.title}</h3>
                      <p className="text-primary text-sm">{course.tagline}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{course.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="px-3 py-1 rounded-full bg-muted">
                      <span className="text-muted-foreground">Duration: </span>
                      <span className="text-foreground">{course.duration}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-muted">
                      <span className="text-muted-foreground">Sessions: </span>
                      <span className="text-foreground">{course.sessions}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <p className="text-3xl font-display text-gradient-gold font-semibold">{course.price}</p>
                    </div>
                    <button
                      onClick={() => handleBookNow(course.title)}
                      className="btn-gold py-3 px-6 flex items-center gap-2"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Learn the <span className="text-gradient-gold">Basics</span>
            </h2>
            <p className="text-muted-foreground">
              Watch official tutorials to get started on your driving journey
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YLmUxj-hvps"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Road Signs Tutorial"
                />
              </div>
              <h3 className="font-display text-xl text-foreground mt-4">Road Signs for Driving Test</h3>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/_2HA_-FWdF4"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Getting Started with Driving"
                />
              </div>
              <h3 className="font-display text-xl text-foreground mt-4">Getting Started with Driving</h3>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Not Sure Which Course?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation and our team will help you choose the perfect program.
            </p>
            <button onClick={() => setIsBookingOpen(true)} className="btn-gold">
              Get Free Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
};

export default Courses;
