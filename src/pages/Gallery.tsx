import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { X, Play, Image, Video } from 'lucide-react';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop', alt: 'Driving lesson' },
  { id: 2, src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop', alt: 'Maruti Brezza' },
  { id: 3, src: 'https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?w=600&h=400&fit=crop', alt: 'Student learning' },
  { id: 4, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', alt: 'Car interior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop', alt: 'Open road' },
  { id: 6, src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop', alt: 'Modern vehicle' },
  { id: 7, src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop', alt: 'Luxury car' },
  { id: 8, src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop', alt: 'Car on road' },
  { id: 9, src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop', alt: 'Driving view' },
  { id: 10, src: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=600&h=400&fit=crop', alt: 'City driving' },
  { id: 11, src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop', alt: 'Dashboard view' },
  { id: 12, src: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=600&h=400&fit=crop', alt: 'Happy driver' },
];

const videos = [
  { id: 1, title: 'Road Signs for Driving Test', embedId: 'YLmUxj-hvps', thumbnail: 'https://img.youtube.com/vi/YLmUxj-hvps/maxresdefault.jpg' },
  { id: 2, title: "Let's Get Started with Driving", embedId: '_2HA_-FWdF4', thumbnail: 'https://img.youtube.com/vi/_2HA_-FWdF4/maxresdefault.jpg' },
  { id: 3, title: 'Impress Your Dad', embedId: 'qF28SEcMV1Y', thumbnail: 'https://img.youtube.com/vi/qF28SEcMV1Y/maxresdefault.jpg' },
  { id: 4, title: 'Driving Tips for Beginners', embedId: 'YLmUxj-hvps', thumbnail: 'https://img.youtube.com/vi/YLmUxj-hvps/maxresdefault.jpg' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              See Us in{' '}
              <span className="text-gradient-gold">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Take a visual tour of our facilities, vehicles, and student experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'photos'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Image className="w-5 h-5" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'videos'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Video className="w-5 h-5" />
              Videos
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <StaggerItem key={photo.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedImage(photo.src)}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
                          <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                            View
                          </span>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos.map((video) => (
                    <StaggerItem key={video.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedVideo(video.embedId)}
                        className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
