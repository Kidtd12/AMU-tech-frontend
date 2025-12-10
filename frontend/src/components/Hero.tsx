import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Lightbulb, Users } from 'lucide-react';
import heroVideo from '../assets/hero-bg.mp4';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden pb-0 mb-0"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-[#b30000] rounded-full blur-3xl opacity-15 -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-[#b30000] rounded-full blur-3xl opacity-15 -bottom-32 -right-32 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-3 leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white block mb-1">Welcome to</span>
            <span className="text-[#b30000] block mt-1">AMU Tech Hub</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-3 font-light"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovate. Create. Transform.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Empowering the next generation of innovators, developers, and entrepreneurs at Arba Minch University
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('community')}
              className="group px-6 py-3 bg-[#b30000] text-white rounded-full font-semibold hover:bg-[#8a0000] transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105"
            >
              Join the Hub
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-[#b30000] hover:scale-105"
            >
              Explore Projects
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border border-white/40 hover:border-[#b30000] hover:scale-105"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Boxes (slightly lower) */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[{
            icon: Rocket, title: 'Innovation', desc: 'Push boundaries with creative tech solutions.'
          }, {
            icon: Lightbulb, title: 'Learning', desc: 'Gain real experience through hands-on projects.'
          }, {
            icon: Users, title: 'Community', desc: 'Connect with like-minded innovators.'
          }].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#b30000]/40 transition-all duration-300 group">
              <Icon className="text-[#b30000] mb-3 group-hover:scale-110 transition-transform" size={30} />
              <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
