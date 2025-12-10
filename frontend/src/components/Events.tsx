import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'AI & Machine Learning Bootcamp',
    type: 'Workshop',
    date: 'March 15-17, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Tech Hub Main Lab',
    participants: '50+ Attendees',
    description: 'Intensive 3-day workshop covering fundamentals of AI, neural networks, and practical ML applications',
    status: 'Upcoming',
    color: 'from-[#b30000] to-[#8a0000]'
  },
  {
    id: 2,
    title: 'HackAMU 2025',
    type: 'Hackathon',
    date: 'April 5-7, 2025',
    time: '48 Hours',
    location: 'University Main Hall',
    participants: '200+ Participants',
    description: 'Annual hackathon bringing together innovators to solve real-world challenges with technology',
    status: 'Coming Soon',
    color: 'from-[#b30000] to-[#d40000]'
  },
  {
    id: 3,
    title: 'Web Development Masterclass',
    type: 'Training',
    date: 'March 22, 2025',
    time: '2:00 PM - 6:00 PM',
    location: 'Computer Lab 3',
    participants: '40 Students',
    description: 'Learn modern web development with React, Node.js, and deployment best practices',
    status: 'Upcoming',
    color: 'from-[#8a0000] to-[#b30000]'
  },
  {
    id: 4,
    title: 'Tech Talks: Industry Leaders',
    type: 'Seminar',
    date: 'Friday',
    time: '2:00 PM - 4:00 PM',
    location: 'Tech Hub Conference Room(Tech Hub Main Lab)',
    participants: 'Open to All',
    description: 'Every two weeks with industry experts sharing insights on tech trends and career guidance',
    status: 'Recurring',
    color: 'from-[#b30000] to-[#8a0000]'
  },
  {
    id: 5,
    title: 'IoT & Robotics Challenge',
    type: 'Competition',
    date: 'May 10-12, 2025',
    time: 'Full Weekend',
    location: 'Engineering Building',
    participants: '30+ Teams',
    description: 'Build and showcase IoT solutions and robotics projects to solve campus challenges',
    status: 'Coming Soon',
    color: 'from-[#d40000] to-[#b30000]'
  },
  {
    id: 6,
    title: 'Startup Pitch Competition',
    type: 'Competition',
    date: 'June 1, 2025',
    time: '1:00 PM - 6:00 PM',
    location: 'University Auditorium',
    participants: '15 Startups',
    description: 'Pitch your tech startup idea to investors and win seed funding and mentorship',
    status: 'Applications Open',
    color: 'from-[#8a0000] to-[#b30000]'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-gradient-to-b from-[#0a0000] via-black to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #b30000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & <span className="text-[#b30000]">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-[#b30000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our workshops, hackathons, and tech talks to level up your skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#b30000] hover:shadow-xl hover:shadow-[#b30000]/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-[#b30000]/20 text-[#b30000] rounded-full text-xs font-semibold border border-[#b30000]/30">
                    {event.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'Upcoming' || event.status === 'Coming Soon'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : event.status === 'Registration Open' || event.status === 'Applications Open'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {event.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#b30000] transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-3 text-[#b30000]" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock size={16} className="mr-3 text-[#b30000]" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin size={16} className="mr-3 text-[#b30000]" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users size={16} className="mr-3 text-[#b30000]" />
                    {event.participants}
                  </div>
                </div>

                <button className="w-full py-3 bg-[#b30000] text-white rounded-lg font-medium hover:bg-[#8a0000] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#b30000]/50">
                  Register Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#b30000]/10 via-[#b30000]/5 to-[#b30000]/10 border border-[#b30000]/20 rounded-2xl p-8 text-center"
        >
          <Calendar className="text-[#b30000] mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-3">View Full Calendar</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Check out our complete event calendar to stay updated on all upcoming workshops, hackathons, and tech talks
          </p>
          <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-[#b30000] hover:scale-105">
            Open Event Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
}
