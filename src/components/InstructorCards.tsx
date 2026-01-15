import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './animations/ScrollAnimations';

interface Instructor {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  image: string;
}

const instructors: Instructor[] = [
  {
    name: "Dinesh Saini",
    role: "Senior Instructor",
    experience: "15+ Years",
    specialization: "Manual & Automatic",
    bio: "Known for his patient and professional teaching style, Dinesh has helped over 500 students achieve their driving goals. Specializes in building confidence in nervous learners.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Tarun Saini",
    role: "Lead Instructor",
    experience: "12+ Years",
    specialization: "Brezza Expert",
    bio: "Calm, humble, and incredibly skilled, Tarun is praised by students for making complex maneuvers easy to understand. Expert in highway and city driving techniques.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Kavita Sharma",
    role: "Women's Coach",
    experience: "8+ Years",
    specialization: "Women's Classes",
    bio: "Dedicated to empowering women drivers, Kavita creates a comfortable and supportive learning environment. Certified in defensive driving techniques.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
];

const InstructorCards = () => {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {instructors.map((instructor, index) => (
        <StaggerItem key={instructor.name}>
          <div className="flip-card h-[420px]">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front card-premium flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">{instructor.name}</h3>
                <p className="text-primary text-sm mb-4">{instructor.role}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{instructor.experience}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{instructor.specialization}</span>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">Hover to read bio</p>
              </div>

              {/* Back */}
              <div className="flip-card-back card-premium flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-display text-xl text-gradient-gold mb-4">{instructor.name}</h3>
                <p className="text-foreground/90 leading-relaxed mb-6">{instructor.bio}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Experience: <span className="text-primary">{instructor.experience}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Specialization: <span className="text-primary">{instructor.specialization}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default InstructorCards;
