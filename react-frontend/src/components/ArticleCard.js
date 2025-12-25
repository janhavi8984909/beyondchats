import React from 'react';

const ArticleCard = ({ article }) => {
  const isEnhanced = article.is_enhanced || article.title.includes('[ENHANCED]');
  const originalId = article.parent_id;
  
  return (
    <div className={`article-card ${isEnhanced ? 'enhanced' : 'original'}`}>
      <div className="article-header">
        <span className={`article-badge ${isEnhanced ? 'enhanced-badge' : 'original-badge'}`}>
          {isEnhanced ? '✨ ENHANCED' : '📝 ORIGINAL'}
        </span>
        <h3 className="article-title">
          {article.title.replace('[ENHANCED] ', '')}
        </h3>
      </div>
      
      <div className="article-content-preview">
        {article.content.substring(0, 150)}...
      </div>
      
      <div className="article-footer">
        <div className="article-meta">
          <span className="article-id">ID: {article.id}</span>
          {isEnhanced && originalId && (
            <span className="original-link">Original: #{originalId}</span>
          )}
        </div>
        
        <div className="article-actions">
          <a href={`http://127.0.0.1:8000/api/articles/${article.id}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="api-link">
            View API
          </a>
          {article.source_url && (
            <a href={article.source_url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="source-link">
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
