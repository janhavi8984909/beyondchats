import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/articles');
      
      // Your API structure: { success: true, data: { data: [...] } }
      console.log('API Response:', response.data);
      
      let articlesData = [];
      
      // Access: response.data.data.data
      if (response.data.data && response.data.data.data) {
        articlesData = response.data.data.data; // This is the array!
      }
      
      console.log('Articles array:', articlesData);
      
      if (!Array.isArray(articlesData)) {
        articlesData = [];
      }
      
      setArticles(articlesData);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch articles');
      setLoading(false);
      console.error('Error details:', err);
    }
  };

  if (loading) return <div className="loading">Loading articles...</div>;
  if (error) return <div className="error">{error}</div>;
  
  if (articles.length === 0) {
    return <div className="no-articles">No articles found.</div>;
  }

  return (
    <div className="article-list">
      <h1>BeyondChats Articles</h1>
      <p className="subtitle">Original and Enhanced Versions</p>
      
      <div className="articles-container">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
