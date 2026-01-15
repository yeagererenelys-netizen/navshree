import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Pause, Play } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  course?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ajay Keswani",
    text: "Absolutely amazing experience! Learned on the Brezza and felt confident within just 10 days. The instructors are incredibly patient and professional. Highly recommend Nav Shree to anyone looking for quality driving lessons in Jaipur!",
    rating: 5,
    course: "Automatic Car Driving"
  },
  {
    id: 2,
    name: "Sakshi Sharma",
    text: "Dinesh Sir is the best instructor I've ever had. His calm demeanor and clear explanations made learning to drive stress-free. The well-maintained vehicles and flexible timings are a huge plus!",
    rating: 5,
    course: "Manual Car Driving"
  },
  {
    id: 3,
    name: "Zian Ahmed",
    text: "Tarun Sir's humble and patient teaching style is commendable. I went from being terrified of driving to passing my test with flying colors. The modern Brezza fleet makes learning comfortable and enjoyable.",
    rating: 5,
    course: "Automatic Car Driving"
  },
  {
    id: 4,
    name: "Rujhan Singh",
    text: "Gained complete confidence in just 5 days! The systematic approach to teaching road rules and practical skills is exceptional. Nav Shree truly lives up to its reputation as Jaipur's premier driving school.",
    rating: 5,
    course: "Manual Car Driving"
  },
  {
    id: 5,
    name: "Priya Meena",
    text: "As a woman, I was initially nervous about learning to drive. The women's special classes at Nav Shree made all the difference. Patient instructors, safe environment, and excellent teaching methodology.",
    rating: 5,
    course: "Women's Special Classes"
  },
  {
    id: 6,
    name: "Rahul Verma",
    text: "17+ years of experience really shows in their teaching quality. From basics to advanced maneuvers, everything was covered comprehensively. Worth every rupee spent!",
    rating: 5,
    course: "Manual Car Driving"
  },
  {
    id: 7,
    name: "Anita Joshi",
    text: "The license assistance service saved me so much time and hassle. Professional guidance throughout the RTO process. Nav Shree is truly a one-stop solution for all driving needs.",
    rating: 5,
    course: "License Assistance"
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Quote Icon */}
      <Quote className="absolute top-0 left-0 w-24 h-24 text-primary/10 -translate-x-4 -translate-y-4" />

      {/* Main Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-8 md:px-16"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed mb-8">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{currentTestimonial.name}</h4>
              {currentTestimonial.course && (
                <p className="text-sm text-primary">{currentTestimonial.course}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-primary rounded-full'
                    : 'w-2 h-2 bg-border rounded-full hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pause/Play Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPaused ? 1 : 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur flex items-center justify-center">
            <Pause className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
