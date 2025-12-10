import { Github, Linkedin, Youtube, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-[#b30000]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#b30000]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#b30000]">AMU</span>
              <span className="text-white"> Tech Hub</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of innovators, developers, and entrepreneurs at Arba Minch University.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-[#b30000] transition-all duration-300 hover:scale-110"
              >
                <Github className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-[#b30000] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-[#b30000] transition-all duration-300 hover:scale-110"
              >
                <Youtube className="text-white" size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-lg hover:bg-[#b30000] transition-all duration-300 hover:scale-110"
              >
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  Events
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('community')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-[#b30000] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#b30000] flex-shrink-0 mt-1" />
                <span className="text-sm">Arba Minch University, Arba Minch, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="text-[#b30000] flex-shrink-0 mt-1" />
                <span className="text-sm">info@amutechhub.edu.et</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="text-[#b30000] flex-shrink-0 mt-1" />
                <span className="text-sm">+251 46 881 1340</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2025 AMU Tech Hub. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
