import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Award, Target, Eye, Users, Clock, Shield, Heart, Zap } from 'lucide-react';

const timeline = [
  { year: '2009', title: 'Founded', description: 'Nav Shree Motor Driving School established in Jaipur' },
  { year: '2012', title: 'Expansion', description: 'Added two-wheeler training program' },
  { year: '2015', title: "Women's Classes", description: 'Launched specialized women-only driving courses' },
  { year: '2018', title: 'Fleet Upgrade', description: 'Introduced modern Maruti Suzuki Brezza fleet' },
  { year: '2020', title: 'Automatic Focus', description: 'Expanded automatic transmission training' },
  { year: '2024', title: '1000+ Students', description: 'Milestone of training 1000+ successful drivers' },
];

const values = [
  { icon: Heart, title: 'Patient Teaching', description: 'We understand learning takes time and patience' },
  { icon: Shield, title: 'Safety First', description: 'Your safety is our top priority in every lesson' },
  { icon: Target, title: 'Goal-Oriented', description: 'Focused on getting you confident and licensed' },
  { icon: Zap, title: 'Modern Methods', description: 'Using latest teaching techniques and vehicles' },
];

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=800&fit=crop"
            alt="Driving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto relative">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Driving Excellence{' '}
              <span className="text-gradient-gold">Since 2009</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              For over 17 years, Nav Shree Motor Driving School has been transforming nervous beginners 
              into confident, safe drivers on Jaipur's roads.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nav Shree Motor Driving School was founded in 2009 with a simple vision: to make quality 
                  driving education accessible to everyone in Jaipur. What began as a small operation with 
                  just one instructor and one vehicle has grown into the city's most trusted driving school.
                </p>
                <p>
                  Our founder recognized that many people, especially women and first-time learners, felt 
                  intimidated by the prospect of learning to drive. We set out to change that by creating 
                  a supportive, patient, and professional learning environment.
                </p>
                <p>
                  Today, we operate a fleet of modern Maruti Suzuki Brezza vehicles, employ a team of 
                  certified instructors, and have successfully trained over 1,000 drivers. Our commitment 
                  to excellence has earned us a stellar 4.8-star rating on Justdial.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?w=600&h=400&fit=crop"
                  alt="Driving school"
                  className="rounded-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass border border-primary/20">
                  <p className="text-4xl font-display font-bold text-gradient-gold">17+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              From humble beginnings to Jaipur's premier driving school
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <StaggerContainer className="space-y-12">
              {timeline.map((item, i) => (
                <StaggerItem key={item.year}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card-premium inline-block">
                        <p className="text-2xl font-display text-gradient-gold mb-2">{item.year}</p>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary hidden md:block relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide professional, patient, and personalized driving education that transforms 
                  nervous beginners into confident, safe drivers. We believe everyone deserves the 
                  freedom and independence that comes with knowing how to drive.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-premium h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as India's most trusted driving school, setting the standard for 
                  quality instruction, safety, and student success. We envision a future where every 
                  driver on the road is a safe, confident driver.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium text-center h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Join Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Become part of the Nav Shree family and start your driving journey today.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Get Started
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
