import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, HeartPulse, Building2, UserCheck } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: '+',
    label: 'People Benefited',
    color: 'from-[#2E67B2] to-[#28A34A]',
  },
  {
    icon: BookOpen,
    value: 500,
    suffix: '+',
    label: 'Educational Programs',
    color: 'from-[#F59A34] to-[#F2C533]',
  },
  {
    icon: HeartPulse,
    value: 300,
    suffix: '+',
    label: 'Healthcare Initiatives',
    color: 'from-[#E34298] to-[#F59A34]',
  },
  {
    icon: Building2,
    value: 150,
    suffix: '+',
    label: 'Community Projects',
    color: 'from-[#28A34A] to-[#2E67B2]',
  },
  {
    icon: UserCheck,
    value: 1000,
    suffix: '+',
    label: 'Volunteer Network',
    color: 'from-[#2E67B2] to-[#E34298]',
  },
];

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return <div ref={ref}>{count.toLocaleString()}</div>;
}

export default function ImpactStats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#2E67B2] via-[#E34298] to-[#F59A34] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Making a difference in thousands of lives across communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Counter */}
                  <div className="text-5xl font-bold text-white mb-2">
                    <Counter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <div className="text-white/90 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
