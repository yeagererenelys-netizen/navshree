import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Award, Star, Calendar, Users } from 'lucide-react';

const instructors = [
  {
    name: 'Dinesh Saini',
    role: 'Senior Instructor & Founder',
    experience: '15+ Years',
    students: '500+',
    rating: 4.9,
    specializations: ['Manual Driving', 'Automatic Driving', 'Highway Training'],
    bio: 'Dinesh is the heart and soul of Nav Shree. His patient and professional teaching style has earned him countless positive reviews. Known for his ability to calm nervous learners and build their confidence systematically. He specializes in highway driving and complex traffic situations.',
    certifications: ['RTO Certified Instructor', 'Defensive Driving Specialist', 'First Aid Trained'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Tarun Saini',
    role: 'Lead Instructor',
    experience: '12+ Years',
    students: '400+',
    rating: 4.9,
    specializations: ['Brezza Expert', 'City Driving', 'Parking Techniques'],
    bio: 'Tarun is praised by students for his calm, humble demeanor and crystal-clear explanations. He has a gift for making complex maneuvers easy to understand. His expertise with the Brezza fleet makes him the go-to instructor for automatic car training.',
    certifications: ['RTO Certified Instructor', 'Advanced Parking Specialist'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Kavita Sharma',
    role: "Women's Driving Coach",
    experience: '8+ Years',
    students: '300+',
    rating: 4.8,
    specializations: ["Women's Classes", 'Confidence Building', 'Defensive Driving'],
    bio: 'Kavita is dedicated to empowering women drivers. She creates a comfortable, judgment-free learning environment that has helped hundreds of women overcome their driving anxieties. Her patient approach and supportive nature make her students feel at ease.',
    certifications: ['RTO Certified Instructor', 'Certified Driving Coach', 'Women Safety Trainer'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Ravi Kumar',
    role: 'Two-Wheeler Specialist',
    experience: '10+ Years',
    students: '350+',
    rating: 4.7,
    specializations: ['Motorcycle Training', 'Scooter Training', 'Balance Techniques'],
    bio: 'Ravi brings a decade of experience in two-wheeler training. His systematic approach to teaching balance and control has made him a favorite among motorcycle and scooter learners. He emphasizes safety while making the learning process enjoyable.',
    certifications: ['RTO Certified', 'Road Safety Ambassador'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
];

const Instructors = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Meet Your{' '}
              <span className="text-gradient-gold">Expert Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our certified instructors bring years of experience, patience, and passion for teaching to every lesson.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Instructors */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <StaggerContainer className="space-y-16">
            {instructors.map((instructor, index) => (
              <StaggerItem key={instructor.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Stats overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-display text-gradient-gold font-bold">{instructor.experience}</p>
                            <p className="text-xs text-muted-foreground">Experience</p>
                          </div>
                          <div>
                            <p className="text-2xl font-display text-gradient-gold font-bold">{instructor.students}</p>
                            <p className="text-xs text-muted-foreground">Students</p>
                          </div>
                          <div>
                            <p className="text-2xl font-display text-gradient-gold font-bold">{instructor.rating}★</p>
                            <p className="text-xs text-muted-foreground">Rating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="max-w-lg">
                      <span className="text-primary text-sm font-medium">{instructor.role}</span>
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">{instructor.name}</h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">{instructor.bio}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Specializations</h4>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specializations.map((spec) => (
                            <span key={spec} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Certifications</h4>
                        <div className="space-y-2">
                          {instructor.certifications.map((cert) => (
                            <div key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Award className="w-4 h-4 text-primary" />
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Learn from the <span className="text-gradient-gold">Best?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Book your first lesson and experience the Nav Shree difference.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Book Your Lesson
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Instructors;
