import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogCache } from './utils/blogCache';
import { sanitizeHTML } from './utils/sanitize';
import { injectCTA } from './utils/injectCTA';
import { linkifyContent } from './utils/linkify';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// ─── CHANGE THIS for each site ───────────────────────────
const SITE_CATEGORY_ID = 143;          // BioAI Lab category in WordPress
// ─────────────────────────────────────────────────────────

interface BlogDetailPageProps {
  blogSlug: string;
  onBack: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  fullContent: string;
  date: string;
  slug: string;
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

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blogSlug, onBack }) => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogBySlug();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogSlug]);

  const calculateReadTime = (content: string): string => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const transformPost = (post: WordPressBlogPost): BlogPost => {
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
      fullContent: sanitizeHTML(linkifyContent(post.content.rendered)),
      category: categoryName,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      }),
      readTime: calculateReadTime(post.content.rendered),
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-placeholder.jpg',
      slug: post.slug,
    };
  };

  const fetchBlogBySlug = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first — same cache key as BlogPage
      const cacheKey = `blogs_${SITE_CATEGORY_ID}`;
      const cachedBlogs = blogCache.get<BlogPost[]>(cacheKey);
      if (cachedBlogs) {
        const found = cachedBlogs.find(b => b.slug === blogSlug);
        if (found) {
          setBlog(found);
          setAllBlogs(cachedBlogs);
          setLoading(false);
          return;
        }
      }

      // Fetch all posts filtered by category
      const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL || 'https://blog.deepiotics.com/wp-json/wp/v2';
      const response = await fetch(`${apiUrl}/posts?categories=${SITE_CATEGORY_ID}&per_page=100&_embed`);

      if (!response.ok) throw new Error('Failed to fetch blog post');

      const data: WordPressBlogPost[] = await response.json();
      const transformed = data.map(transformPost);

      // Store in cache so BlogPage benefits too
      blogCache.set(cacheKey, transformed);
      setAllBlogs(transformed);

      const found = transformed.find(p => p.slug === blogSlug);
      if (found) {
        setBlog(found);
      } else {
        setError('Blog post not found');
      }
    } catch (err) {
      console.error('Failed to fetch blog:', err);
      setError('Failed to load blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Related posts (same category, exclude current)
  const relatedPosts = allBlogs
    .filter(p => p.slug !== blogSlug && p.category === blog?.category)
    .slice(0, 3);

  const navigateToPost = (slug: string) => {
    navigate(`/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7faf7] pt-24 px-6">
        <div className="max-w-3xl mx-auto animate-pulse space-y-6">
          <div className="h-6 bg-green-50 rounded w-1/4" />
          <div className="h-10 bg-green-50 rounded w-3/4" />
          <div className="h-64 bg-green-50 rounded-2xl" />
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-green-50 rounded" style={{ width: `${90 - i * 5}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#f7faf7] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">{error || 'Post not found'}</p>
          <button
            onClick={onBack}
            className="px-5 py-2.5 rounded-xl bg-green-500/20 border border-green-500/40 text-green-600 hover:bg-green-500/30 transition-all"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7faf7]">
      <Navigation />

      {/* Back */}
      <div className="px-6 pt-28 pb-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">

          {/* Category */}
          <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/15 text-green-600 border border-green-500/20 font-medium mb-6 inline-block">
            {blog.category}
          </span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            {blog.title}
          </motion.h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-10 pb-8 border-b border-green-900/10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{blog.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{blog.readTime}</span>
          </div>

          {/* Featured Image */}
          {blog.image && blog.image !== '/images/blog-placeholder.jpg' && (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 border border-green-900/5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/blog-placeholder.jpg'; }}
              />
            </div>
          )}

          {/* Excerpt highlight */}
          <div className="bg-green-500/5 border-l-4 border-green-500 px-6 py-4 rounded-r-xl mb-10">
            <p className="text-gray-300 leading-relaxed">{blog.excerpt}</p>
          </div>

          {/* Content */}
          <div
            className="wp-content prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: injectCTA(blog.fullContent) }}
          />

          {/* Footer nav */}
          <div className="mt-16 pt-10 border-t border-green-900/10">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-50 border border-green-900/10 text-gray-900 text-sm font-medium hover:bg-green-500/20 hover:border-green-500/40 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              More Articles
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-24 border-t border-green-900/5 pt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <div
                  key={post.id}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-green-900/5 bg-white hover:border-green-500/30 transition-all"
                  onClick={() => navigateToPost(post.slug)}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/blog-placeholder.jpg'; }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
