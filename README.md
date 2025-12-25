# BeyondChats Technical Product Manager Assignment

## 📋 Project Overview
A three-phase system for:
1. **Phase 1:** Scraping articles from BeyondChats blog and providing CRUD APIs (Laravel)
2. **Phase 2:** Automatically rewriting articles using Google search and LLM (Node.js)
3. **Phase 3:** Displaying original and rewritten articles (React)

## 🏗️ Architecture Diagram
Laravel API → Node.js Processor → React Frontend

## 🛠️ Tech Stack
- **Backend:** Laravel 10, PHP 8.1+, SQLite
- **Script:** Node.js 18+, Cheerio, OpenAI API
- **Frontend:** React 18, Axios, CSS
- **Deployment:** Vercel (Frontend)

## 📁 Project Structure
beyondchats-assignment/
├── laravel-backend/
├── node-rewriter/
├── react-frontend/
└── README.md

## 🚀 Local Setup Instructions

### Prerequisites
- Node.js 18+
- PHP 8.1+
- Composer
- Git

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd beyondchats-assignment
```

### 2. Laravel Backend Setup
```
cd laravel-backend
composer install
cp .env.example .env
php artisan key:generate
# Use SQLite database (create database/database.sqlite)
php artisan migrate
php artisan serve
```
### 3. Node.js Script Setup
```
cd node-rewriter
npm install
node index.js
```
### 4. React Frontend Setup
```
cd react-frontend
npm install
npm start
```
## 🌐 Live Links
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8000](http://localhost:8000)