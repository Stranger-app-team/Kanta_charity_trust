import { motion } from 'motion/react';
import {
  GraduationCap,
  Heart,
  Briefcase,
  Sprout,
  Users,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export default function FocusAreas() {
  const { t } = useTranslation();

  const focusAreas = [
    {
      icon: GraduationCap,
      title: t('focus.edu_title'),
      items: [
        t('focus.edu_1'),
        t('focus.edu_2'),
        t('focus.edu_3'),
        t('focus.edu_4'),
      ],
      gradient: 'from-[#2E67B2] to-[#28A34A]',
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbSUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Heart,
      title: t('focus.health_title'),
      items: [
        t('focus.health_1'),
        t('focus.health_2'),
        t('focus.health_3'),
        t('focus.health_4'),
      ],
      gradient: 'from-[#E34298] to-[#F59A34]',
      image: 'https://images.unsplash.com/photo-1609252509229-364936a1d1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMHJ1cmFsJTIwaW5kaWF8ZW58MXx8fHwxNzgxNjk0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Briefcase,
      title: t('focus.emp_title'),
      items: [
        t('focus.emp_1'),
        t('focus.emp_2'),
        t('focus.emp_3'),
      ],
      gradient: 'from-[#F59A34] to-[#F2C533]',
      image: 'https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHZvbHVudGVlcnMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc4MTY5NDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Sprout,
      title: t('focus.farm_title'),
      items: [
        t('focus.farm_1'),
        t('focus.farm_2'),
      ],
      gradient: 'from-[#28A34A] to-[#F2C533]',
      image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwZmFybWluZyUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: t('focus.comm_title'),
      items: [
        t('focus.comm_1'),
        t('focus.comm_2'),
        t('focus.comm_3'),
        t('focus.comm_4'),
      ],
      gradient: 'from-[#2E67B2] to-[#E34298]',
      image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3ZWxmYXJlJTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzgxNjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Sparkles,
      title: t('focus.women_title'),
      items: [
        t('focus.women_1'),
        t('focus.women_2'),
        t('focus.women_3'),
      ],
      gradient: 'from-[#E34298] to-[#2E67B2]',
      image: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwd29ya3Nob3AlMjBpbmRpYXxlbnwxfHx8fDE3ODE2OTQ5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            {t('focus.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            {t('focus.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-90 group-hover:opacity-95 transition-opacity`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    {/* Icon */}
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {area.title}
                    </h3>

                    {/* Items */}
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-white/90 flex items-start gap-2"
                        >
                          <span className="text-white/70 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">{t('focus.learn_more')}</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
