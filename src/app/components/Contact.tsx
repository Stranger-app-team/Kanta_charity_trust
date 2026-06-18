import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            Get in touch with us for any queries or support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2E67B2] to-[#28A34A] p-4 rounded-xl">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Address</h3>
                  <p className="text-[#1F2937]/80 text-lg leading-relaxed">
                    Murum Kendra,<br />
                    Taluka Umarga,<br />
                    District Dharashiv,<br />
                    Maharashtra – 413606
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#28A34A] to-[#F2C533] p-4 rounded-xl">
                  <Phone className="text-white" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">Phone Numbers</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:9767179755"
                      className="flex items-center gap-3 text-lg text-[#1F2937]/80 hover:text-[#2E67B2] transition-colors group"
                    >
                      <span className="bg-[#F8FAFC] group-hover:bg-[#2E67B2]/10 px-4 py-2 rounded-lg transition-colors">
                        +91 9767179755
                      </span>
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="tel:9373620457"
                      className="flex items-center gap-3 text-lg text-[#1F2937]/80 hover:text-[#2E67B2] transition-colors group"
                    >
                      <span className="bg-[#F8FAFC] group-hover:bg-[#2E67B2]/10 px-4 py-2 rounded-lg transition-colors">
                        +91 9373620457
                      </span>
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="tel:9921870098"
                      className="flex items-center gap-3 text-lg text-[#1F2937]/80 hover:text-[#2E67B2] transition-colors group"
                    >
                      <span className="bg-[#F8FAFC] group-hover:bg-[#2E67B2]/10 px-4 py-2 rounded-lg transition-colors">
                        +91 9921870098
                      </span>
                      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#E34298] to-[#F59A34] p-4 rounded-xl">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">Email</h3>
                  <a
                    href="mailto:kantachtrust@gmail.com"
                    className="text-lg text-[#1F2937]/80 hover:text-[#2E67B2] transition-colors inline-flex items-center gap-2 group"
                  >
                    kantachtrust@gmail.com
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-[#28A34A] to-[#2E67B2] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">Quick Contact</h3>
                  <p className="text-white/90 mb-3">Message us on WhatsApp for instant support</p>
                  <a
                    href="https://wa.me/919767179755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#28A34A] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <div className="h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.5!2d76.6!3d18.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzAwLjAiTiA3NsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kanta Charitable Trust Location"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#2E67B2] to-[#E34298] rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Visit Us or Call Us
            </h3>
            <p className="text-white/90 text-lg">
              We welcome you to visit our office or reach out through any of the contact methods above. Our team is always ready to assist you with your queries and support your desire to make a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
