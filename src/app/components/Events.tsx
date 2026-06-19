import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

const events = [
  {
    title: 'Medical Camp',
    date: 'July 25, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Murum Kendra, Umarga',
    description: 'Free health checkup and medicine distribution for community members',
    image: 'https://images.unsplash.com/photo-1609252509229-364936a1d1a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMHJ1cmFsJTIwaW5kaWF8ZW58MXx8fHwxNzgxNjk0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#E34298] to-[#F59A34]',
  },
  {
    title: 'Education Drive',
    date: 'August 5, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Local Schools, Dharashiv',
    description: 'Distribution of school supplies and scholarships to deserving students',
    image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbSUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#2E67B2] to-[#28A34A]',
  },
  {
    title: 'Village Development Program',
    date: 'August 15, 2026',
    time: '8:00 AM - 5:00 PM',
    location: 'Rural Areas, Umarga Taluka',
    description: 'Community infrastructure development and awareness programs',
    image: 'https://images.unsplash.com/photo-1634874706682-3468a6e421ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYWdlJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwaW5kaWF8ZW58MXx8fHwxNzgxNjk0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#28A34A] to-[#F2C533]',
  },
  {
    title: 'Employment Workshop',
    date: 'September 1, 2026',
    time: '11:00 AM - 3:00 PM',
    location: 'Community Center, Murum',
    description: 'Skill development and job placement assistance workshop',
    image: 'https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMHZvbHVudGVlcnMlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc4MTY5NDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#F59A34] to-[#E34298]',
  },
  {
    title: 'Farmer Awareness Program',
    date: 'September 12, 2026',
    time: '9:00 AM - 1:00 PM',
    location: 'Agricultural Fields, Umarga',
    description: 'Modern farming techniques and agricultural best practices training',
    image: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGRldmVsb3BtZW50JTIwZmFybWluZyUyMGluZGlhfGVufDF8fHx8MTc4MTY5NDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#28A34A] to-[#2E67B2]',
  },
  {
    title: 'Community Gathering',
    date: 'October 2, 2026',
    time: '5:00 PM - 8:00 PM',
    location: 'Village Square, Murum Kendra',
    description: 'Community celebration and cultural programs',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB3ZWxmYXJlJTIwdm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MXx8fHwxNzgxNjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-[#2E67B2] to-[#E34298]',
  },
];

export default function Events() {
  const { t } = useTranslation();
  return (
    <section id="events" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
            {t('events.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2E67B2] to-[#E34298] mx-auto mb-4"></div>
          <p className="text-xl text-[#1F2937]/70 max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-60`}></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-[#2E67B2]" size={20} />
                      <span className="font-semibold text-[#1F2937]">
                        {event.date.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                    {event.title}
                  </h3>

                  <p className="text-[#1F2937]/70 mb-4 flex-grow">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#1F2937]/80">
                      <Calendar className="text-[#2E67B2]" size={18} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1F2937]/80">
                      <Clock className="text-[#28A34A]" size={18} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1F2937]/80">
                      <MapPin className="text-[#E34298]" size={18} />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full bg-gradient-to-r ${event.gradient} text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:gap-4`}>
                    {t('events.register')}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
