import { motion } from 'motion/react';
import { useTranslation } from '../../context/LanguageContext';

export default function MarqueeBanner() {
  const { t } = useTranslation();

  const marqueeItems = [
    t('marquee.seva'),
    t('marquee.samarpan'),
    t('marquee.vikas'),
    t('marquee.vishwas'),
    t('marquee.education'),
    t('marquee.healthcare'),
    t('marquee.farmers'),
    t('marquee.women'),
    t('marquee.community'),
  ];

  // Duplicate the items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-gradient-to-r from-[#2E67B2] via-[#E34298] to-[#F59A34] py-4 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -33.33 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="text-white text-xl md:text-2xl font-semibold inline-block"
          >
            {item} •
          </span>
        ))}
      </motion.div>
    </div>
  );
}
