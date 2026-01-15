import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1, name: 'Ajay Keswani', rating: 5, course: 'Automatic Car Driving',
    text: 'Absolutely amazing experience! Learned on the Brezza and felt confident within just 10 days. The instructors are incredibly patient and professional. Highly recommend Nav Shree to anyone looking for quality driving lessons in Jaipur!',
  },
  {
    id: 2, name: 'Sakshi Sharma', rating: 5, course: 'Manual Car Driving',
    text: "Dinesh Sir is the best instructor I've ever had. His calm demeanor and clear explanations made learning to drive stress-free. The well-maintained vehicles and flexible timings are a huge plus!",
  },
  {
    id: 3, name: 'Zian Ahmed', rating: 5, course: 'Automatic Car Driving',
    text: "Tarun Sir's humble and patient teaching style is commendable. I went from being terrified of driving to passing my test with flying colors. The modern Brezza fleet makes learning comfortable and enjoyable.",
  },
  {
    id: 4, name: 'Rujhan Singh', rating: 5, course: 'Manual Car Driving',
    text: "Gained complete confidence in just 5 days! The systematic approach to teaching road rules and practical skills is exceptional. Nav Shree truly lives up to its reputation as Jaipur's premier driving school.",
  },
  {
    id: 5, name: 'Priya Meena', rating: 5, course: "Women's Special Classes",
    text: 'As a woman, I was initially nervous about learning to drive. The women\'s special classes at Nav Shree made all the difference. Patient instructors, safe environment, and excellent teaching methodology.',
  },
  {
    id: 6, name: 'Rahul Verma', rating: 5, course: 'Manual Car Driving',
    text: '17+ years of experience really shows in their teaching quality. From basics to advanced maneuvers, everything was covered comprehensively. Worth every rupee spent!',
  },
  {
    id: 7, name: 'Anita Joshi', rating: 5, course: 'License Assistance',
    text: 'The license assistance service saved me so much time and hassle. Professional guidance throughout the RTO process. Nav Shree is truly a one-stop solution for all driving needs.',
  },
  {
    id: 8, name: 'Vikram Patel', rating: 5, course: 'Two-Wheeler Training',
    text: 'Learned to ride a motorcycle in just one week! Ravi sir is an excellent teacher who focuses on safety while making the learning process fun. Highly recommend their two-wheeler program.',
  },
  {
    id: 9, name: 'Sunita Agarwal', rating: 5, course: "Women's Special Classes",
    text: "At 45, I thought it was too late to learn driving. Kavita ma'am proved me wrong. Her patience and encouragement helped me overcome all my fears. Now I drive confidently every day!",
  },
  {
    id: 10, name: 'Mohit Sharma', rating: 5, course: 'Automatic Car Driving',
    text: 'The Brezza is such a comfortable car to learn in. The automatic transmission course is perfect for city driving. Passed my test on the first attempt thanks to Nav Shree!',
  },
  {
    id: 11, name: 'Deepika Rathore', rating: 4, course: 'Manual Car Driving',
    text: 'Good experience overall. The instructors are skilled and the vehicles are well-maintained. Would have appreciated more flexible evening timings, but still recommend it.',
  },
  {
    id: 12, name: 'Arjun Mehra', rating: 5, course: 'Heavy Vehicle Training',
    text: 'Professional training for commercial license. The heavy vehicle program is comprehensive and prepares you for real-world driving. Excellent value for money.',
  },
  {
    id: 13, name: 'Kavita Singh', rating: 5, course: 'Manual Car Driving',
    text: 'From zero knowledge to confident driver in 15 days! The structured curriculum and patient teaching made all the difference. Thank you Nav Shree!',
  },
  {
    id: 14, name: 'Rajesh Kumar', rating: 5, course: 'Automatic Car Driving',
    text: 'Best driving school in Jaipur without a doubt. Modern cars, professional instructors, and excellent support staff. The whole experience was top-notch.',
  },
  {
    id: 15, name: 'Neha Gupta', rating: 5, course: "Women's Special Classes",
    text: 'The women-only batches are such a thoughtful initiative. Felt completely comfortable and safe throughout my training. Kavita ma\'am is the best!',
  },
];

const Testimonials = () => {
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              What Our{' '}
              <span className="text-gradient-gold">Students Say</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real reviews from real students who learned to drive with Nav Shree.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass border border-primary/20">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-display font-bold text-gradient-gold">{averageRating}</span>
              <span className="text-muted-foreground">from {testimonials.length}+ reviews</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-premium h-full flex flex-col"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-primary">{testimonial.course}</p>
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
              Ready to Join Our{' '}
              <span className="text-gradient-gold">Success Stories?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your driving journey today and become our next happy student!
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

export default Testimonials;
