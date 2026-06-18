import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Heart } from 'lucide-react';
import logoImage from '../../imports/png_kct.png';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Programs', id: 'programs' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Events', id: 'events' },
    { name: 'Volunteer', id: 'volunteer' },
    { name: 'Donate', id: 'donate' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-[#1877F2]' },
    { icon: Twitter, href: '#', color: 'hover:bg-[#1DA1F2]' },
    { icon: Instagram, href: '#', color: 'hover:bg-[#E4405F]' },
    { icon: Linkedin, href: '#', color: 'hover:bg-[#0A66C2]' },
    { icon: Youtube, href: '#', color: 'hover:bg-[#FF0000]' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1F2937] via-[#2E67B2] to-[#1F2937] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <img
              src={logoImage}
              alt="Kanta Charitable Trust Logo"
              className="h-24 w-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">KANTA CHARITABLE TRUST</h3>
            <p className="text-xl text-[#F2C533] mb-2">
              Creating Smiles, Changing Worlds
            </p>
            <p className="text-xl text-[#28A34A] mb-6">
              Caring Today, Empowering Tomorrow
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              A social welfare organization dedicated to uplifting communities through education, healthcare, employment support, farmer assistance, women empowerment, and community development.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-lg ${social.color} text-white transition-all hover:scale-110`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-[#F59A34] rounded-full transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates about our programs and initiatives
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white placeholder-white/60 focus:border-white/40 outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F59A34] to-[#E34298] text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/80 text-center md:text-left"
            >
              © 2026 Kanta Charitable Trust. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 text-white/80"
            >
              Made with <Heart className="text-[#E34298] fill-[#E34298]" size={20} /> for Community Welfare
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>

          {/* Marathi Motto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-[#F2C533]">
              "सेवा हाच खरा धर्म | सेवा हीच खरी पूजा"
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
