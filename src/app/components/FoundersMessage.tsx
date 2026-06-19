import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export default function FoundersMessage() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2E67B2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#E34298]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            {t('founders.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-8 md:p-12 shadow-2xl relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote size={80} className="text-[#2E67B2]" />
            </div>

            {/* Image */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhlbHBpbmclMjBzdXBwb3J0JTIwY2hhcml0eXxlbnwxfHx8fDE3ODE2OTQ5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Trust Leadership"
                  className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Message Content */}
            <div className="relative z-10 text-center space-y-6">
              <p className="text-lg md:text-xl text-[#1F2937]/90 leading-relaxed">
                {t('founders.p1')}
              </p>

              <p className="text-lg md:text-xl text-[#1F2937]/90 leading-relaxed">
                {t('founders.p2')}
              </p>

              <p className="text-lg md:text-xl text-[#1F2937]/90 leading-relaxed">
                {t('founders.p3')}
              </p>

              <div className="pt-6">
                <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2E67B2] to-[#E34298]">
                  "सेवा हाच खरा धर्म | सेवा हीच खरी पूजा"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
