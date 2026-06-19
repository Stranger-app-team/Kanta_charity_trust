import { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Heart,
  Sparkles,
  Sprout,
  Briefcase,
  Users,
  ChevronRight,
} from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export default function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      icon: GraduationCap,
      title: t('programs.p1_title'),
      description: t('programs.p1_desc'),
      details: [
        'Scholarship programs for underprivileged students',
        'Distribution of school supplies and books',
        'Digital learning initiatives',
        'After-school tutoring and mentorship',
      ],
      gradient: 'from-[#2E67B2] to-[#28A34A]',
    },
    {
      icon: Heart,
      title: t('programs.p2_title'),
      description: t('programs.p2_desc'),
      details: [
        'Free medical camps in rural areas',
        'Medicine distribution programs',
        'Health awareness workshops',
        'Emergency medical assistance',
      ],
      gradient: 'from-[#E34298] to-[#F59A34]',
    },
    {
      icon: Sparkles,
      title: t('programs.p3_title'),
      description: t('programs.p3_desc'),
      details: [
        'Vocational training programs',
        'Self-help group formation',
        'Leadership development workshops',
        'Financial literacy training',
      ],
      gradient: 'from-[#F59A34] to-[#F2C533]',
    },
    {
      icon: Sprout,
      title: t('programs.p4_title'),
      description: t('programs.p4_desc'),
      details: [
        'Agricultural awareness programs',
        'Modern farming technique training',
        'Seed and equipment support',
        'Market linkage assistance',
      ],
      gradient: 'from-[#28A34A] to-[#F2C533]',
    },
    {
      icon: Briefcase,
      title: t('programs.p5_title'),
      description: t('programs.p5_desc'),
      details: [
        'Skill development workshops',
        'Job placement assistance',
        'Entrepreneurship training',
        'Career counseling services',
      ],
      gradient: 'from-[#2E67B2] to-[#E34298]',
    },
    {
      icon: Users,
      title: t('programs.p6_title'),
      description: t('programs.p6_desc'),
      details: [
        'Community infrastructure development',
        'Disaster relief programs',
        'Elder care initiatives',
        'Disability support services',
      ],
      gradient: 'from-[#E34298] to-[#2E67B2]',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            {t('programs.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${program.gradient} p-6`}>
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#1F2937]/80 mb-4">
                      {program.description}
                    </p>

                    {/* Details - Expandable */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4">
                        {program.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[#1F2937]/70"
                          >
                            <ChevronRight className="text-[#2E67B2] flex-shrink-0 mt-1" size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Expand Button */}
                    <button
                      className={`flex items-center gap-2 text-sm font-semibold ${
                        isExpanded ? 'text-[#E34298]' : 'text-[#2E67B2]'
                      } group-hover:gap-3 transition-all`}
                    >
                      {isExpanded ? t('programs.show_less') : t('programs.learn_more')}
                      <ChevronRight
                        className={`transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                        size={16}
                      />
                    </button>
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
