import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Bike, UserRound, Truck, ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './animations/ScrollAnimations';

const courses = [
  {
    icon: Car,
    title: "Manual Car Driving",
    description: "Master gear shifting, clutch control, and all fundamentals on our Brezza fleet. Perfect for beginners.",
    duration: "10-15 Days",
    price: "₹5,000",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Car,
    title: "Automatic Car Driving",
    description: "Learn the easy way with automatic transmission. Focus on road rules and confidence building.",
    duration: "7-10 Days",
    price: "₹6,000",
    color: "from-primary/20 to-gold-light/20",
  },
  {
    icon: Bike,
    title: "Two-Wheeler Training",
    description: "Comprehensive scooter and motorcycle training with focus on balance, safety, and traffic awareness.",
    duration: "5-7 Days",
    price: "₹2,500",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: UserRound,
    title: "Women's Special Classes",
    description: "Comfortable, private sessions with patient female-friendly instructors. Safe and supportive environment.",
    duration: "10-15 Days",
    price: "₹5,500",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const CourseCards = () => {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <StaggerItem key={course.title}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <course.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">Starting from</span>
                  <p className="text-2xl font-display text-gradient-gold font-semibold">{course.price}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Duration: <span className="text-foreground">{course.duration}</span>
                </span>
                <Link
                  to="/courses"
                  className="flex items-center gap-2 text-sm text-primary font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-gold-light/30 to-primary/50 blur-sm" />
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default CourseCards;
