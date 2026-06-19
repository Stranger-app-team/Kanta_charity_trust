import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from '../../imports/png_kct.png';
import { useTranslation } from '../../context/LanguageContext';



export default function Hero() {
  const { t } = useTranslation();

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbSUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.edu'),
    },
    {
      image: 'https://images.unsplash.com/photo-1609252509229-364936a1d1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMHJ1cmFsJTIwaW5kaWF8ZW58MXx8fHwxNzgxNjk0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.health'),
    },
    {
      image: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwd29ya3Nob3AlMjBpbmRpYXxlbnwxfHx8fDE3ODE2OTQ5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.women'),
    },
    {
      image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwZmFybWluZyUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.rural'),
    },
    {
      image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3ZWxmYXJlJTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzgxNjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.comm'),
    },
    {
      image: 'https://images.unsplash.com/photo-1543333995-a78aea2eee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhYmlsaXR5JTIwc3VwcG9ydCUyMHdoZWVsY2hhaXIlMjBjYXJlfGVufDF8fHx8MTc4MTY5NDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.disability'),
    },
    {
      image: 'https://images.unsplash.com/photo-1454875392665-2ac2c85e8d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMHNlbmlvciUyMHN1cHBvcnR8ZW58MXx8fHwxNzgxNjk0OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: t('hero.slides.elder'),
    },
  ];

  const animatedTexts = [
    t('hero.anim.edu'),
    t('hero.anim.health'),
    t('hero.anim.women'),
    t('hero.anim.farmers'),
    t('hero.anim.comm'),
    t('hero.anim.futures'),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all cursor-pointer"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all cursor-pointer"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src={logoImage}
                alt="Kanta Charitable Trust Logo"
                className="h-24 md:h-32 lg:h-40 w-auto mb-6"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Marathi Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-[#F2C533] mb-6"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Animated Text Rotation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-16 md:h-20 mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white"
                >
                  {animatedTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {/* 
              <button
                onClick={() => scrollToSection('donate')}
                className="px-8 py-4 bg-gradient-to-r from-[#F59A34] to-[#E34298] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                {t('hero.btn_donate')}
              </button>
              <button
                onClick={() => scrollToSection('volunteer')}
                className="px-8 py-4 bg-gradient-to-r from-[#28A34A] to-[#2E67B2] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                {t('hero.btn_volunteer')}
              </button>
              */}
              <button
                onClick={() => scrollToSection('programs')}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all"
              >
                {t('hero.btn_support')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all"
              >
                {t('hero.btn_contact')}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
