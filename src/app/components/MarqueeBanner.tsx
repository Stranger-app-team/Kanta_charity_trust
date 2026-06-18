import { motion } from 'motion/react';

const marqueeItems = [
  '❤️ Seva',
  '🤝 Samarpan',
  '📈 Vikas',
  '⭐ Vishwas',
  '📚 Education',
  '🏥 Healthcare',
  '🌾 Farmers Support',
  '👩 Women Empowerment',
  '🌍 Community Welfare',
];

export default function MarqueeBanner() {
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
