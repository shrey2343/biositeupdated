import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogCache } from './utils/blogCache';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// ─── CHANGE THIS for each site ───────────────────────────
const SITE_CATEGORY_ID = 143;          // BioAI Lab category in WordPress
const SITE_CATEGORY_SLUG = 'bioai-lab'; // used for /categories filter
// ─────────────────────────────────────────────────────────

interface BlogPageProps {
  onBackToHome: () => void;
}

interface WordPressBlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const POSTS_PER_PAGE = 9;

const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Array<{ name: string; count: number }>>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first
      const cacheKey = `blogs_${SITE_CATEGORY_ID}`;
      const cachedBlogs = blogCache.get<BlogPost[]>(cacheKey);
      if (cachedBlogs) {
        setBlogPosts(cachedBlogs);
        setLoading(false);
        return;
      }

      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      // ← KEY CHANGE: filter by category ID
      const response = await fetch(`${apiUrl}/posts?categories=${SITE_CATEGORY_ID}&per_page=100&_embed`);

      if (!response.ok) throw new Error('Failed to fetch blogs');

      const data: WordPressBlogPost[] = await response.json();

      const transformedBlogs: BlogPost[] = data.map((post) => {
        // Get all category names, excluding the parent "BioAI Lab" category
        const allCategories = post._embedded?.['wp:term']?.[0] || [];
        const categoryName = allCategories.find((t: any) => 
          t.name !== 'BioAI Lab' && t.name !== 'BioAI' && t.id !== SITE_CATEGORY_ID
        )?.name || allCategories[0]?.name || 'General';

        return {
          id: post.id.toString(),
          title: post.title.rendered
            .replace(/&amp;/g, '&')
            .replace(/&#8217;/g, "'")
            .replace(/&#8220;/g, '"')
            .replace(/&#8221;/g, '"'),
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
          fullContent: post.content.rendered,
          category: categoryName,
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          }),
          readTime: calculateReadTime(post.content.rendered),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-placeholder.jpg',
          slug: post.slug,
        };
      });

      blogCache.set(cacheKey, transformedBlogs);
      setBlogPosts(transformedBlogs);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      setError('Unable to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const cacheKey = `categories_${SITE_CATEGORY_ID}`;
      const cachedCategories = blogCache.get<Array<{ name: string; count: number }>>(cacheKey);
      if (cachedCategories) {
        setCategories(cachedCategories);
        return;
      }

      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/categories?parent=${SITE_CATEGORY_ID}&per_page=100`);
      if (!response.ok) return;

      const data = await response.json();

      // Only show child categories of the BioAI Lab category
      const transformed = data
        .filter((cat: any) => cat.count > 0)
        .map((cat: any) => ({ name: cat.name, count: cat.count }));

      blogCache.set(cacheKey, transformed);
      setCategories(transformed);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPost = (slug: string) => {
    navigate(`/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Latest Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            BioAI Lab{' '}
            <span className="text-gradient">
              Blog
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-10">
            Research insights, breakthroughs, and updates from the BioAI Lab team.
          </p>

          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              All ({blogPosts.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => { setSelectedCategory(cat.name); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-24 bg-background">
        <div className="max-w-6xl mx-auto">

          {/* Loading */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse">
                  <div className="h-48 bg-secondary" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-secondary rounded w-1/3" />
                    <div className="h-6 bg-secondary rounded w-full" />
                    <div className="h-4 bg-secondary rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="text-center py-24">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchBlogs}
                className="px-5 py-2.5 rounded-xl bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">No posts found. Check back soon!</p>
            </div>
          )}

          {/* Posts */}
          {!loading && !error && paginatedPosts.length > 0 && (
            <>
              {/* Featured first post */}
              {currentPage === 1 && paginatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <div
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300"
                    onClick={() => navigateToPost(paginatedPosts[0].slug)}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                        <img
                          src={paginatedPosts[0].image}
                          alt={paginatedPosts[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/blog-placeholder.jpg'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden md:block" />
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 font-medium">
                            {paginatedPosts[0].category}
                          </span>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">Featured</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                          {paginatedPosts[0].title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          {paginatedPosts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{paginatedPosts[0].date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{paginatedPosts[0].readTime}</span>
                          </div>
                          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read more <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid — skip first post on page 1 (shown as featured) */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(currentPage === 1 ? paginatedPosts.slice(1) : paginatedPosts).map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300"
                    onClick={() => navigateToPost(post.slug)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/blog-placeholder.jpg'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 mb-3 inline-block">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                        </div>
                        <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                      return (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`min-w-[40px] h-10 rounded-lg font-semibold transition-all ${
                            currentPage === page
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-card border border-border text-foreground hover:bg-secondary'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="text-muted-foreground">...</span>;
                    }
                    return null;
                  })}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
