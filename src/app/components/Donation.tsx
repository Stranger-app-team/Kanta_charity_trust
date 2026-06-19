import { motion } from 'motion/react';
import { Heart, GraduationCap, HeartPulse, Building2, Users } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export default function Donation() {
  const { t } = useTranslation();

  const donationOptions = [
    {
      icon: GraduationCap,
      amount: '₹500',
      title: t('donate.p1_title'),
      description: t('donate.p1_desc'),
      gradient: 'from-[#2E67B2] to-[#28A34A]',
    },
    {
      icon: Heart,
      amount: '₹1000',
      title: t('donate.p2_title'),
      description: t('donate.p2_desc'),
      gradient: 'from-[#28A34A] to-[#F2C533]',
    },
    {
      icon: HeartPulse,
      amount: '₹2500',
      title: t('donate.p3_title'),
      description: t('donate.p3_desc'),
      gradient: 'from-[#E34298] to-[#F59A34]',
    },
    {
      icon: Building2,
      amount: '₹5000',
      title: t('donate.p4_title'),
      description: t('donate.p4_desc'),
      gradient: 'from-[#F59A34] to-[#E34298]',
    },
    {
      icon: Users,
      amount: '₹10000',
      title: t('donate.p5_title'),
      description: t('donate.p5_desc'),
      gradient: 'from-[#2E67B2] to-[#E34298]',
    },
  ];

  return (
    <section id="donate" className="py-16 md:py-24 bg-gradient-to-br from-[#2E67B2] via-[#F59A34] to-[#E34298] relative overflow-hidden">
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
            {t('donate.title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('donate.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {donationOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${option.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Amount */}
                  <div className="text-4xl font-bold text-white mb-2">
                    {option.amount}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {option.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm flex-grow">
                    {option.description}
                  </p>

                  {/* Button */}
                  <button className="mt-4 w-full bg-white text-[#2E67B2] py-2 rounded-lg font-semibold hover:bg-white/90 transition-all">
                    Donate
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('donate.custom_title')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('donate.custom_desc')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <input
                type="number"
                placeholder="{t('donate.custom_ph')}"
                className="px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border-2 border-white/30 focus:border-white outline-none flex-grow max-w-md"
              />
              <button className="px-8 py-3 bg-white text-[#2E67B2] rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl">
                {t('donate.btn')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 text-lg">
            {t('donate.trust1')}
          </p>
          <p className="text-white/80 mt-2">
            {t('donate.trust2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
