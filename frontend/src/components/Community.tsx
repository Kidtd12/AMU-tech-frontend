import { motion } from 'framer-motion';
import { Users, Star, Quote, UserPlus } from 'lucide-react';

import miki from '../assets/miki.jpg';
import bkk from '../assets/bkk.jpg';
import hewann from '../assets/hewann.jpg';
import esub from '../assets/esub.jpg';
import hayatu from '../assets/hayatu.jpg';
import tame from '../assets/tame.jpg';
import sofi from '../assets/sofi.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Tamagn Zewdu',
    role: 'Team Lead at Tech Hub',
    year: 'Class of 2025',
    image: tame,
    quote:
      'Leading projects at AMU Tech Hub taught me how to manage teams, solve real challenges, and inspire others to reach their goals.',
    achievement: 'Built 5+ Production Apps',
  },
  {
    id: 2,
    name: 'Michael Fetene',
    role: 'Academic and Skill Developer',
    year: 'Current Student',
    image: miki,
    quote:
      'At the Tech Hub, I’ve been able to design programs that help students grow both academically and practically.',
    achievement: 'Organized Skill Sessions',
  },
  {
    id: 3,
    name: 'Bemnet Kassa',
    role: 'Event Organizer',
    year: 'Current Student',
    image: bkk,
    quote:
      'Organizing events allowed me to connect students with opportunities and showcase innovations to the tech community.',
    achievement: 'Planned Successful Events',
  },
  {
    id: 4,
    name: 'Hewan',
    role: 'Communication Lead',
    year: 'Current Student',
    image: hewann,
    quote:
      'Working in communication taught me how powerful community engagement can be at AMU Tech Hub.',
    achievement: 'Community Builder',
  },
  {
    id: 5,
    name: 'Esubalew Teshager',
    role: 'Technical Lead',
    year: 'Class of 2025',
    image: esub,
    quote:
      'As a technical lead, I guide teams through complex projects and help turn ideas into real innovations.',
    achievement: 'Team Leader',
  },
  {
    id: 6,
    name: 'Hayatudin Jemal',
    role: 'Event Organizer',
    year: 'Current Student',
    image: hayatu,
    quote:
      'Event management taught me teamwork and creativity while building connections within AMU Tech Hub.',
    achievement: 'Event Manager',
  },
  {
    id: 7,
    name: 'Sofoniyas Mebratu',
    role: 'Assembler',
    year: 'Current Student',
    image: sofi,
    quote:
      'I focus on turning ideas into practical solutions and leading projects that drive innovation.',
    achievement: 'IoT Solutions Developer',
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="py-20 bg-gradient-to-b from-black via-[#0a0000] to-black relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#b30000] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#b30000] rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our <span className="text-[#b30000]">Community</span>
          </h2>
          <div className="w-24 h-1 bg-[#b30000] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the innovators shaping the future of technology
          </p>
        </motion.div>

        {/* Scrollable testimonials */}
        <div className="relative mb-12">
          <div className="flex overflow-x-auto gap-8 pb-6 px-2 scrollbar-thin scrollbar-thumb-[#b30000]/60 scrollbar-track-transparent">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#b30000] hover:shadow-lg hover:shadow-[#b30000]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#b30000]"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-[#b30000] text-xs font-medium mt-1">
                      {testimonial.year}
                    </p>
                  </div>
                  <Quote className="text-[#b30000] opacity-40" size={20} />
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                  <Star className="text-[#b30000]" size={16} fill="#b30000" />
                  <span className="text-gray-400 text-xs">{testimonial.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-gray-500 text-sm italic mt-2">
            ← Scroll to see more →
          </p>
        </div>

        {/* Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#b30000] via-[#8a0000] to-[#b30000] rounded-2xl p-10 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          ></div>

          <div className="relative z-10">
            <Users className="text-white mx-auto mb-5" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Join AMU Tech Hub Today
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
              Be part of a thriving community of innovators. Get access to mentorship and resources to turn your ideas into reality.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="group px-6 py-3 bg-white text-[#b30000] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg text-sm">
                <UserPlus size={18} />
                Become a Member
              </button>
              <button className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 backdrop-blur-sm transition-all duration-300 border border-white/40 hover:scale-105 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
