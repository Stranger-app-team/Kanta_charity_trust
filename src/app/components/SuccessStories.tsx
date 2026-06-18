import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    name: 'Priya S.',
    role: 'Student',
    story: 'Thanks to the scholarship program, I was able to continue my education. The trust not only provided financial support but also mentorship that helped me excel in my studies. Today, I am pursuing my dream of becoming a teacher.',
    image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbSUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Rajesh M.',
    role: 'Farmer',
    story: 'The agricultural training program transformed my farming methods. I learned modern techniques that increased my crop yield by 40%. The trust\'s support has made my family financially stable.',
    image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwZmFybWluZyUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Sunita K.',
    role: 'Women Empowerment Beneficiary',
    story: 'The vocational training I received helped me start my own tailoring business. I am now financially independent and able to support my family. The trust gave me the confidence to pursue my dreams.',
    image: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwd29ya3Nob3AlMjBpbmRpYXxlbnwxfHx8fDE3ODE2OTQ5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Ramesh Family',
    role: 'Healthcare Beneficiaries',
    story: 'When my father fell ill, we didn\'t know where to turn. The trust\'s medical camp provided free treatment and medicines. They saved our family from financial crisis and gave us hope.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZG9jdG9yJTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3ODE2OTQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Vijay T.',
    role: 'Community Member',
    story: 'The skill development program helped me secure a job in a reputed company. The trust not only trained me but also helped with job placement. I am grateful for this life-changing opportunity.',
    image: 'https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHZvbHVudGVlcnMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc4MTY5NDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2E67B2]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#E34298]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            Real stories of transformation and hope
          </p>
        </motion.div>

        {/* Stories Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white via-[#F8FAFC] to-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src={stories[currentIndex].image}
                        alt={stories[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <Quote className="text-[#2E67B2]/20 mb-4" size={64} />
                    
                    <p className="text-lg md:text-xl text-[#1F2937]/90 mb-6 leading-relaxed italic">
                      "{stories[currentIndex].story}"
                    </p>

                    <div>
                      <p className="text-2xl font-bold text-[#1F2937] mb-1">
                        {stories[currentIndex].name}
                      </p>
                      <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#2E67B2] to-[#E34298]">
                        {stories[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gradient-to-r hover:from-[#2E67B2] hover:to-[#E34298] hover:text-white transition-all group"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gradient-to-r hover:from-[#2E67B2] hover:to-[#E34298] hover:text-white transition-all group"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-[#2E67B2] to-[#E34298]'
                    : 'w-2 bg-[#1F2937]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
