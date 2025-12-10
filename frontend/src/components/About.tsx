import { motion } from 'framer-motion';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-[#0a0000] to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#b30000 2px, transparent 2px), linear-gradient(90deg, #b30000 2px, transparent 2px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#b30000]">AMU Tech Hub</span>
          </h2>
          <div className="w-24 h-1 bg-[#b30000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A center of excellence for technology, innovation, and entrepreneurship at Arba Minch University
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-[#b30000]/10 to-transparent border border-[#b30000]/20 rounded-2xl p-8 hover:border-[#b30000]/50 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#b30000] p-3 rounded-lg">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the leading technology and innovation hub in Ethiopia, fostering a culture of creativity,
              entrepreneurship, and technological excellence that transforms students into world-class innovators
              and problem solvers.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-[#b30000]/10 to-transparent border border-[#b30000]/20 rounded-2xl p-8 hover:border-[#b30000]/50 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#b30000] p-3 rounded-lg">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To provide students with cutting-edge resources, mentorship, and hands-on opportunities to develop
              innovative solutions, build technical skills, and launch successful tech ventures that address real-world
              challenges in our community and beyond.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-[#b30000]/5 via-black to-[#b30000]/5 border border-[#b30000]/20 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Story</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded in partnership with Arba Minch University, the AMU Tech Hub was established to bridge the gap
              between academic learning and industry practice. What started as a small group of passionate students
              and faculty has grown into a vibrant ecosystem of innovation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we serve as the central point for all technology-related activities at AMU, hosting hackathons,
              workshops, coding bootcamps, and providing a collaborative space where ideas transform into impactful
              solutions. Our hub has produced numerous successful startups, research projects, and has helped hundreds
              of students launch their careers in technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-10 text-center">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-black/50 border border-white/10 rounded-xl p-6 hover:border-[#b30000] hover:bg-[#b30000]/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#b30000] to-[#8a0000] p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Mentorship Programs</h4>
              <p className="text-gray-400">
                Connect with industry experts and experienced developers who guide you through your tech journey
              </p>
            </div>

            <div className="group bg-black/50 border border-white/10 rounded-xl p-6 hover:border-[#b30000] hover:bg-[#b30000]/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#b30000] to-[#8a0000] p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Skill Development</h4>
              <p className="text-gray-400">
                Access to workshops, bootcamps, and training sessions on latest technologies and frameworks
              </p>
            </div>

            <div className="group bg-black/50 border border-white/10 rounded-xl p-6 hover:border-[#b30000] hover:bg-[#b30000]/5 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#b30000] to-[#8a0000] p-4 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Innovation Space</h4>
              <p className="text-gray-400">
                State-of-the-art facilities and resources to bring your innovative ideas to life
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
