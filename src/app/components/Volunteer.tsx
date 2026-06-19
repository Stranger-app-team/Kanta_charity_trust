import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export default function Volunteer() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for volunteering! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            {t('volunteer.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            {t('volunteer.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHZvbHVudGVlcnMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc4MTY5NDk4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteers"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{t('volunteer.box1_title')}</h3>
                <p className="text-lg">{t('volunteer.box1_desc')}</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 bg-[#F8FAFC] p-4 rounded-lg">
                <div className="bg-gradient-to-br from-[#2E67B2] to-[#28A34A] p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">{t('volunteer.b1_title')}</h4>
                  <p className="text-[#1F2937]/70 text-sm">
                    {t('volunteer.b1_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F8FAFC] p-4 rounded-lg">
                <div className="bg-gradient-to-br from-[#F59A34] to-[#E34298] p-3 rounded-lg">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937] mb-1">{t('volunteer.b2_title')}</h4>
                  <p className="text-[#1F2937]/70 text-sm">
                    {t('volunteer.b2_desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#F8FAFC] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
                {t('volunteer.form_title')}
              </h3>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-[#1F2937] font-medium mb-2">
                  {t('volunteer.name')}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E67B2]" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-[#1F2937] font-medium mb-2">
                  {t('volunteer.email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E67B2]" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-[#1F2937] font-medium mb-2">
                  {t('volunteer.phone')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E67B2]" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              {/* {t('volunteer.city')}/}
              <div className="mb-4">
                <label className="block text-[#1F2937] font-medium mb-2">
                  {t('volunteer.city')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E67B2]" size={20} />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors"
                    placeholder="Your city"
                  />
                </div>
              </div>

              {/* {t('volunteer.interest')}/}
              <div className="mb-4">
                <label className="block text-[#1F2937] font-medium mb-2">
                  {t('volunteer.interest')}
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors"
                >
                  <option value="">Select an area</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="farmer-support">Farmer Support</option>
                  <option value="employment">Employment Assistance</option>
                  <option value="community">Community Development</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-[#1F2937] font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#2E67B2] outline-none transition-colors resize-none"
                  placeholder="Tell us why you want to volunteer..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2E67B2] to-[#E34298] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all group"
              >
                {t('volunteer.submit')}
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
