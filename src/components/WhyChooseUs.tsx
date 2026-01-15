import { motion } from 'framer-motion';
import { Car, Users, Award, Clock, Shield, FileCheck } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './animations/ScrollAnimations';

const features = [
  {
    icon: Users,
    title: "Experienced Instructors",
    description: "Learn from Dinesh & Tarun, praised by hundreds of students for patience and professionalism."
  },
  {
    icon: Car,
    title: "Modern Brezza Fleet",
    description: "Train on well-maintained Maruti Suzuki Brezza vehicles for a premium learning experience."
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "Join 1000+ happy students who've achieved their driving goals with our proven methods."
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    description: "Choose timings that work for you. Open 7 days a week with early morning to evening slots."
  },
  {
    icon: Shield,
    title: "Safe Training",
    description: "Priority on safety with dual-control vehicles and comprehensive insurance coverage."
  },
  {
    icon: FileCheck,
    title: "License Assistance",
    description: "Complete RTO support including documentation, test preparation, and license processing."
  },
];

const WhyChooseUs = () => {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <StaggerItem key={feature.title}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card-premium group cursor-pointer h-full"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>

            {/* Content */}
            <h3 className="font-display text-xl text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: 'var(--shadow-gold)' }} />
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default WhyChooseUs;
