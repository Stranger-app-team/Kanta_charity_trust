import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHZvbHVudGVlcnMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc4MTY5NDk4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community Service"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZG9jdG9yJTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3ODE2OTQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzgxNjk0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1634874706682-3468a6e421ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzgxNjk0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Decorative gradient */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-[#2E67B2]/20 to-[#E34298]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mb-8"></div>

            <p className="text-lg text-[#1F2937]/80 mb-6 leading-relaxed">
              Kanta Charitable Trust is a social welfare organization dedicated to uplifting communities through education, healthcare, employment support, farmer assistance, women empowerment, and various community development initiatives.
            </p>

            <p className="text-lg text-[#1F2937]/80 mb-8 leading-relaxed">
              The trust works to create positive social impact by helping underprivileged families, supporting rural development, and empowering individuals with opportunities for growth and self-reliance.
            </p>

            {/* Vision */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2E67B2] to-[#28A34A] p-3 rounded-lg">
                  <Eye className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Vision</h3>
                  <p className="text-[#1F2937]/80">
                    Creating stronger communities through service, dedication, trust, and development.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#F59A34] to-[#E34298] p-3 rounded-lg">
                  <Target className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Mission</h3>
                  <p className="text-[#1F2937]/80">
                    To support education, healthcare, employment opportunities, farmer welfare, and social development initiatives for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
