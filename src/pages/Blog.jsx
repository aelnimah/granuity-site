import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog data from public directory
    fetch('/blogdata/blogData.json')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Blog data loaded:', data);
        console.log('Number of posts:', data.length);
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog data:', error);
        // Add fallback test data
        const testData = [
          {
            id: 'test-post',
            title: 'Test Blog Post',
            date: '2025-01-01',
            industry: 'Test Industry',
            content: 'This is a test blog post to verify the system is working. If you see this, the component is rendering but the JSON fetch failed.',
            image: 'test.jpg'
          }
        ];
        setBlogPosts(testData);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const generateExcerpt = (content, maxLength = 200) => {
    if (content.length <= maxLength) return content;
    
    // Find the last complete word within the limit
    const truncated = content.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    return truncated.substring(0, lastSpaceIndex) + '...';
  };

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-loading">
          <div className="loading-spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-container">
          <motion.div 
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="blog-hero-title">Insights & Updates</h1>
            <p className="blog-hero-subtitle">
              Stay informed with the latest funding opportunities, success stories, and industry insights from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section" ref={sectionRef}>
        <div className="blog-container">
          {blogPosts.length === 0 ? (
            <div className="no-posts">
              <p>No blog posts found. Check console for errors.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.2 } 
                }}
              >
                <Link to={`/blog/${post.id}`} className="blog-card-link">
                  {/* Image */}
                  <div className="blog-image-container">
                    <img
                      src={`/media/blog/${post.image}`}
                      alt={post.title}
                      className="blog-image"
                      onError={(e) => {
                        // Fallback for missing images
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik0yMDAgMTIwQzIwOCAxMTIgMjE2IDExMiAyMjQgMTIwQzIzMiAxMjggMjQwIDEyOCAyNDggMTIwQzI1NiAxMTIgMjY0IDExMiAyNzIgMTIwVjE0MEgyODJWMTUwSDI3MkgyNDJIMjEySDE4MlYxNDBIMTkyVjEyMEMxOTIgMTEyIDE5NiAxMTIgMjAwIDEyMFoiIGZpbGw9IiMyQzU3NzciLz4KPC9zdmc+';
                      }}
                    />
                    <div className="blog-industry-badge">
                      {post.industry}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="blog-content">
                    <h2 className="blog-title">{post.title}</h2>
                    <div className="blog-meta">
                      <span className="blog-date">{formatDate(post.date)}</span>
                    </div>
                    <p className="blog-excerpt">{generateExcerpt(post.content)}</p>
                    <div className="blog-read-more">
                      <span>Read More</span>
                      <svg className="read-more-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;