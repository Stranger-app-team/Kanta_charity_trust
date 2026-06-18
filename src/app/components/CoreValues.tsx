import { motion } from 'motion/react';
import { Heart, HandHeart, TrendingUp, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Seva (सेवा)',
    description: 'Serving Humanity With Compassion',
    color: 'from-[#E34298] to-[#F59A34]',
    iconBg: 'bg-[#E34298]',
  },
  {
    icon: HandHeart,
    title: 'Samarpan (समर्पण)',
    description: 'Dedicated To Social Welfare',
    color: 'from-[#F59A34] to-[#F2C533]',
    iconBg: 'bg-[#F59A34]',
  },
  {
    icon: TrendingUp,
    title: 'Vikas (विकास)',
    description: 'Creating Sustainable Development',
    color: 'from-[#28A34A] to-[#2E67B2]',
    iconBg: 'bg-[#28A34A]',
  },
  {
    icon: Shield,
    title: 'Vishwas (विश्वास)',
    description: 'Building Trust Through Action',
    color: 'from-[#2E67B2] to-[#E34298]',
    iconBg: 'bg-[#2E67B2]',
  },
];

export default function CoreValues() {
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
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div
                    className={`w-24 h-24 rounded-full ${value.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={48} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#1F2937]/70 text-lg">
                    {value.description}
                  </p>

                  {/* Gradient Border on Hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
