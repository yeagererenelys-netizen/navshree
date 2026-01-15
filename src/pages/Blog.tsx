import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Mastering Jaipur Traffic: A Complete Guide for New Drivers',
    excerpt: 'Navigate the busy streets of Jaipur with confidence. Learn about traffic patterns, best times to practice, and essential tips for city driving.',
    image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=800&h=400&fit=crop',
    category: 'City Driving',
    date: 'January 10, 2026',
    readTime: '5 min read',
    author: 'Dinesh Saini',
  },
  {
    id: 2,
    title: '10 Common Mistakes New Drivers Make (And How to Avoid Them)',
    excerpt: 'From poor mirror usage to incorrect lane changes, discover the most common beginner mistakes and learn how to develop good habits from day one.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop',
    category: 'Beginners',
    date: 'January 5, 2026',
    readTime: '7 min read',
    author: 'Tarun Saini',
  },
  {
    id: 3,
    title: 'Understanding Indian Road Signs: Your Complete Visual Guide',
    excerpt: 'A comprehensive guide to all traffic signs you need to know for your driving test and safe driving on Indian roads.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=400&fit=crop',
    category: 'Theory',
    date: 'December 28, 2025',
    readTime: '10 min read',
    author: 'Kavita Sharma',
  },
  {
    id: 4,
    title: 'Automatic vs Manual: Which Should You Learn First?',
    excerpt: 'Weighing the pros and cons of learning on automatic or manual transmission. Make an informed decision for your driving journey.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop',
    category: 'Guides',
    date: 'December 20, 2025',
    readTime: '6 min read',
    author: 'Dinesh Saini',
  },
  {
    id: 5,
    title: 'Overcoming Driving Anxiety: Tips for Nervous Learners',
    excerpt: 'Practical strategies to manage fear and build confidence behind the wheel. Perfect for first-time drivers and those returning after a break.',
    image: 'https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?w=800&h=400&fit=crop',
    category: 'Mental Preparation',
    date: 'December 15, 2025',
    readTime: '8 min read',
    author: 'Kavita Sharma',
  },
];

const categories = ['All', 'Beginners', 'City Driving', 'Theory', 'Guides', 'Mental Preparation'];

const Blog = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Driving Tips &{' '}
              <span className="text-gradient-gold">News</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, driving tips, and the latest news from Nav Shree Motor Driving School.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all h-full flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-primary font-medium group/link">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-outline-gold">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <ScrollReveal className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Subscribe to Our{' '}
              <span className="text-gradient-gold">Newsletter</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Get driving tips, news, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <button className="btn-gold shrink-0">Subscribe</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Blog;
