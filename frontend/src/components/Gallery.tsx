import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

import amu from '../assets/amu.jpg';
import talk from '../assets/talk.jpg';
import lb from '../assets/lb.jpg';
import boot from '../assets/boot.jpg';
import im3 from '../assets/im3.jpg';
import m2 from '../assets/m2.jpg';
import mmm from '../assets/mmm.jpg';
import wel from '../assets/wel.jpg';
import mass from '../assets/mass.png';
import amuvid from '../assets/amuvid.mp4';

const galleryImages = [
  {
    id: 1,
    url: amu,
    title: 'HackAMU 2025',
    category: 'Hackathon',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Innovation Lab',
    category: 'Facility',
  },
  {
    id: 3,
    url: talk,
    title: 'Workshop',
    category: 'Workshop',
  },
  {
    id: 4,
    url: amuvid,
    title: 'AMU Tech Hub',
    category: 'Video',
  },
  {
    id: 5,
    url: mass,
    title: 'Membership Drive',
    category: 'Event',
  },
  {
    id: 6,
    url: boot,
    title: 'Coding Bootcamp',
    category: 'Training',
  },
  {
    id: 7,
    url: wel,
    title: 'Welcome Ceremony',
    category: 'Event',
  },
  {
    id: 8,
    url: mmm,
    title: 'Tech Talk Series',
    category: 'Event',
  },
  {
    id: 9,
    url: lb,
    title: 'Team Collaboration',
    category: 'Workshop',
  },
  {
    id: 10,
    url: m2,
    title: 'Startup Pitch Day',
    category: 'Event',
  },
  {
    id: 11,
    url: im3,
    title: 'Project Showcase',
    category: 'Event',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 6 >= galleryImages.length ? 0 : prev + 6));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 6 < 0 ? Math.max(0, galleryImages.length - 6) : prev - 6));
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-black via-black to-[#0a0000] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #b30000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#b30000]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#b30000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore moments from our workshops, hackathons, and innovation labs
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {galleryImages.slice(currentIndex, currentIndex + 6).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(currentIndex + index)}
              >
                {/* Image or Video Thumbnail */}
                {image.url.endsWith('.mp4') ? (
                  <video
                    src={image.url}
                    muted
                    loop
                    autoPlay
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-semibold mb-1">{image.title}</p>
                  <p className="text-[#b30000] text-sm font-medium">{image.category}</p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-[#b30000] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="text-white" size={18} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 bg-white/10 text-white rounded-full hover:bg-[#b30000] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(galleryImages.length / 6) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 6)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 6) === index
                      ? 'w-8 bg-[#b30000]'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex + 6 >= galleryImages.length}
              className="p-3 bg-white/10 text-white rounded-full hover:bg-[#b30000] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 bg-white/10 text-white rounded-full hover:bg-[#b30000] transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#b30000] transition-all duration-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#b30000] transition-all duration-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image or Video */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages[lightboxIndex].url.endsWith('.mp4') ? (
                <video
                  src={galleryImages[lightboxIndex].url}
                  controls
                  autoPlay
                  loop
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <img
                  src={galleryImages[lightboxIndex].url}
                  alt={galleryImages[lightboxIndex].title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}

              <div className="text-center mt-4">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {galleryImages[lightboxIndex].title}
                </h3>
                <p className="text-[#b30000] font-medium">
                  {galleryImages[lightboxIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
