// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Example blog posts data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "A beginner-friendly guide to using React Hooks in your projects. Learn about useState, useEffect, and more.",
      date: "March 10, 2023",
      category: "React",
      image: "react-hooks"
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive user interfaces using the utility-first CSS framework Tailwind.",
      date: "February 22, 2023",
      category: "CSS",
      image: "tailwind-css"
    },
    {
      id: 3,
      title: "The Power of Node.js for Backend Development",
      excerpt: "Explore why Node.js is a great choice for building scalable, efficient backend services for your web applications.",
      date: "January 15, 2023",
      category: "Backend",
      image: "nodejs"
    },
    {
      id: 4,
      title: "Optimizing Website Performance: Best Practices",
      excerpt: "Learn essential techniques and tools to improve your website's loading speed and overall performance.",
      date: "December 5, 2022",
      category: "Performance",
      image: "web-performance"
    }
  ];
  
  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1 className={`hero-title ${isLoaded ? 'animate-in' : ''}`}>
          The Blog
        </h1>
        
        <p className={`hero-description ${isLoaded ? 'animate-in' : ''}`}>
          Thoughts, tutorials, and insights about web development, design, and technology.
        </p>
      </div>
      
      <div className="blog-categories">
        <button className="category-btn active">All</button>
        <button className="category-btn">React</button>
        <button className="category-btn">CSS</button>
        <button className="category-btn">Backend</button>
        <button className="category-btn">Performance</button>
      </div>
      
      <div className="blog-posts-grid">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`blog-post-card ${isLoaded ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`post-image ${post.image}`}></div>
            <div className="post-content">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="read-more-btn">
                Read More
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`coming-soon ${isLoaded ? 'animate-in' : ''}`}>
        <h2>More Articles Coming Soon</h2>
        <p>Stay tuned for more content about web development, design, and best practices!</p>
      </div>
    </div>
  );
};

export default Blog;