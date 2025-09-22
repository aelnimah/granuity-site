import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch blog data from public directory
    fetch('/blogdata/blogData.json')
      .then(response => response.json())
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog data:', error);
        setLoading(false);
      });
  }, []);

  // Find the post by ID
  const post = blogPosts.find(p => p.id === id);
  
  // If still loading, show loading state
  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="post-loading">
          <div className="loading-spinner"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }
  
  // If post not found after loading, redirect to blog listing
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle bold text **text**
      const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      return (
        <p 
          key={index} 
          className="post-paragraph"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <div className="blog-post-page">
      {/* Back to Blog */}
      <motion.div 
        className="blog-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="blog-nav-container">
          <Link to="/blog" className="back-to-blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
        </div>
      </motion.div>

      {/* Post Header */}
      <section className="post-header" ref={sectionRef}>
        <div className="post-header-container">
          <motion.div 
            className="post-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{formatDate(post.date)}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Image */}
      <motion.section 
        className="post-image-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="post-image-container">
          <img
            src={`/media/blog/${post.image}`}
            alt={post.title}
            className="post-image"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik00MDAgMjAwQzQxNiAxODQgNDMyIDE4NCA0NDggMjAwQzQ2NCAyMTYgNDgwIDIxNiA0OTYgMjAwQzUxMiAxODQgNTI4IDE4NCA1NDQgMjAwVjI0MEg1NjRWMjYwSDU0NEg0ODRINDI0SDM2NFYyNDBIMzg0VjIwMEMzODQgMTg0IDM5MiAxODQgNDAwIDIwMFoiIGZpbGw9IiMyQzU3NzciLz4KPC9zdmc+';
            }}
          />
        </div>
      </motion.section>

      {/* Post Content */}
      <section className="post-content-section">
        <div className="post-content-container">
          <motion.article 
            className="post-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {formatContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* Back to Blog Footer */}
      <motion.section 
        className="post-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="post-footer-container">
          <Link to="/blog" className="back-to-blog-footer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View All Posts
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPost;