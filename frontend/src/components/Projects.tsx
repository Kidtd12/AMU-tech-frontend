import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Cpu, Smartphone, ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'AI', 'Web Development', 'IoT', 'Robotics', 'Mobile Apps'];

const projects = [
  {
    id: 1,
    title: 'Digital Card System',
    category: 'Web Development',
    description: 'Digital Card System will be a smart, all-in-one identification and access solution for AMU students',
    icon: Cpu,
    tags: ['digital-card', 'id-system', 'cloud', 'qr-code', 'authentication', 'dashboard', 'fullstack', 'react', 'nodejs', 'tailwindcss'],
    status: 'Ongoing'
  },
  {
    id: 2,
    title: 'Appointment System',
    category: 'Web Development',
    description: 'A smart online appointment booking and scheduling system for managing meetings and reservations efficiently.',
    icon: Globe,
    tags: ['appointment-system', 'booking', 'scheduler', 'calendar', 'reservation', 'management', 'fullstack', 'webapp', 'react', 'nodejs'],
    status: 'Ongoing'
  },
  {
    id: 6,
    title: 'E-Learning Platform',
    category: 'Web Development',
    description: 'An interactive e-learning platform that enables users to access courses, track progress, and learn anytime, anywhere.',
    icon: Globe,
    tags: ['e-learning', 'education', 'online-courses', 'learning-platform', 'react', 'nodejs', 'fullstack', 'tailwindcss', 'api', 'cloud'],
    status: 'Ongoing'
  },
  {
    id: 3,
    title: 'AMU Student Portal',
    category: 'Web Development',
    description: 'Modern web platform for student services, grades, and campus resources',
    icon: Globe,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    status: 'Idea'
  },
  {
    id: 4,
    title: 'Medical Diagnosis AI',
    category: 'AI',
    description: 'Machine learning model for early disease detection using patient data',
    icon: Brain,
    tags: ['Python', 'TensorFlow', 'Healthcare'],
    status: 'Idea'
  },
  {
    id: 5,
    title: 'Campus Navigation App',
    category: 'Mobile Apps',
    description: 'Mobile app helping students navigate the campus with AR features',
    icon: Smartphone,
    tags: ['React Native', 'Maps', 'AR'],
    status: 'Idea'
  },
  {
    id: 7,
    title: 'Autonomous Delivery Bot',
    category: 'Robotics',
    description: 'Self-navigating robot for campus deliveries using computer vision',
    icon: Cpu,
    tags: ['ROS', 'Python', 'Computer Vision'],
    status: 'Idea'
  },
  {
    id: 8,
    title: 'Traffic Analysis System',
    category: 'AI',
    description: 'Computer vision system analyzing traffic patterns for city planning',
    icon: Brain,
    tags: ['OpenCV', 'Deep Learning', 'Analytics'],
    status: 'Idea'
  },
  {
    id: 9,
    title: 'Smart Home Controller',
    category: 'IoT',
    description: 'IoT hub for controlling home appliances via smartphone',
    icon: Cpu,
    tags: ['ESP32', 'MQTT', 'Mobile'],
    status: 'Idea'
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black via-black to-[#0a0000] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b30000] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b30000] rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & <span className="text-[#b30000]">Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-[#b30000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore cutting-edge projects built by our talented community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#b30000] text-white shadow-lg shadow-[#b30000]/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10 hover:border-[#b30000]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#b30000] hover:shadow-xl hover:shadow-[#b30000]/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-[#b30000] to-[#8a0000] p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <project.icon className="text-white" size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed'
                    ? 'bg-green-700/20 text-green-700 border border-green-700/30'
                    : project.status === 'Ongoing'
                      ? 'bg-green-500/20 text-green-500 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b30000] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#b30000]/10 text-[#b30000] rounded-full text-xs font-medium border border-[#b30000]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#b30000] transition-colors">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#b30000] transition-colors">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#b30000] to-[#8a0000] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#b30000]/50 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
