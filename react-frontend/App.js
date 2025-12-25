import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BeyondChats Article Dashboard</h1>
        <p>AI-Enhanced Articles Display</p>
        <div className="header-stats">
          <span>🚀 Phase 3: React Frontend</span>
          <span>📡 Connected to Laravel API</span>
        </div>
      </header>
      <main>
        <ArticleList />
      </main>
      <footer>
        <p>BeyondChats Assignment • Full Stack Implementation</p>
        <div className="footer-links">
          <a href="http://127.0.0.1:8000/api/articles" target="_blank" rel="noopener noreferrer">
            Laravel API
          </a>
          <a href="http://127.0.0.1:8000/api/articles/6" target="_blank" rel="noopener noreferrer">
            View Enhanced Article #6
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
