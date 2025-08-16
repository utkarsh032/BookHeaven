# 📖 About BookHeaven

BookHeaven is a modern, elegant web application inspired by **Goodreads** — built to offer readers a seamless **online reading experience**, easy discovery of books, and a way to track their reading journey.

---

## 🎯 Purpose

- To make **reading more accessible and enjoyable** directly in the browser
- To let users **discover, filter, and explore** books by genre, author, ratings, etc.
- To allow readers to **track their progress**, rate books, and manage their personalized collection (Reading / Completed / Wishlist)

---

## ✨ Inspiration

This project is heavily inspired by **Goodreads**, combining similar aesthetics and core features — but with a cleaner, modern UI and a focus on **in-browser reading**, not just reviews.

---

## 🧱 Tech Stack

| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Frontend | React + Vite + Tailwind CSS        |
| Backend  | Node.js, Express.js                |
| Database | MongoDB (Mongoose ODM)             |
| Auth     | JWT + bcryptjs                     |
| Styling  | Tailwind with custom CSS variables |
| Hosting  | Render / Vercel                    |

---

## 🛠️ Main Features

- 🔐 User Authentication (JWT-based signup/login)
- 📚 Browse & Search Books (filter + sort + pagination)
- 📖 Read Books Online (full chapter-wise content view)
- ⭐ Progress, Wishlist, Add-to-MyBooks (protected routes)
- 👤 Show/hide user profile in Navbar when authenticated
- 🚀 Fully responsive design with mobile-first experience

---

# 📖 BookHeaven — Frontend

##### A modern, beautifully crafted web application inspired by _Goodreads_, where users can browse books, manage their reading progress, and enjoy immersive reading experiences online.

## 💡 Application Overview

BookHeaven provides a comprehensive reading platform with multiple interconnected features designed to enhance the user's literary journey. The application architecture focuses on seamless navigation and intuitive user experience across all major functionalities.

### 🏠 Home Page

The landing page serves as the central hub of BookHeaven, featuring an elegant design that immediately engages visitors. It showcases featured book collections, trending titles, and popular categories to help users discover new content. The homepage includes platform statistics, recent additions to the library, and personalized recommendations for authenticated users. Interactive elements guide users toward key actions like browsing books, signing up, or accessing their personal library.

### 🔐 Authentication System

BookHeaven implements a robust authentication system with dedicated login and signup pages. The registration process includes comprehensive form validation, secure password requirements, and user-friendly error handling. The login system supports JWT-based authentication with persistent sessions and automatic token refresh. Future enhancements will include social authentication options for Google and Facebook, making account creation even more streamlined for users.

### 📚 Books Discovery & Management

The All Books page represents the core browsing experience, offering advanced filtering and search capabilities. Users can explore the entire library through multiple sorting options including popularity, publication date, genre, and user ratings. The interface includes real-time search functionality, genre-based filtering, and pagination for optimal performance. Each book display shows essential information like title, author, cover image, rating, and availability status, allowing users to make informed reading choices quickly.

### 📖 Immersive Reading Experience

The reading interface provides a distraction-free environment optimized for long-form content consumption. Books are organized chapter-wise with easy navigation between sections, progress tracking, and reading statistics. The interface includes adjustable text formatting options, reading progress indicators, and bookmark functionality. Users can seamlessly switch between reading and library management without losing their place in the content.

### 👤 Personal Library Management

Authenticated users gain access to comprehensive library management features including reading lists, progress tracking, and book rating systems. The platform supports multiple reading states (Currently Reading, Completed, Wishlist) with smooth transitions between categories. Users can track their reading progress, maintain personal notes, and receive personalized recommendations based on their reading history and preferences.

---

# 🚀 Frontend Setup Guide — BookHeaven

Follow these quick steps to run the **BookHeaven Frontend** locally on your machine:

### 📁 1. Clone the Repository

```bash
git clone git@github.com:utkarsh032/BookHeaven.git
cd BookHeaven/frontend
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🖥️ 3. Start Development Server

```bash
npm run dev
```

---

# 📚 BookHeaven Backend

**API Base URL:** `https://bookheaven-a8my.onrender.com`

## 🚀 Overview

BookHeaven Backend is a **Goodreads-inspired** REST API built with **Node.js, Express, and MongoDB**. It supports **user authentication**, **book management**, and **tracking reading progress**.

---

## 🛠 Tech Stack

- **Node.js** + **Express** (Server Framework)
- **MongoDB** + **Mongoose** (Database & ODM)
- **JWT** (Authentication & Authorization)
- **bcryptjs** (Password Hashing)
- **dotenv** (Environment Configuration)

---

## 📦 Backend Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:utkarsh032/BookHeaven.git
cd BookHeaven/backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/book_tracker
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

---

## 📍 API Endpoints

### 🔑 Authentication Routes

| Method | Endpoint             | Description             | Auth Required |
| ------ | -------------------- | ----------------------- | ------------- |
| POST   | `/api/auth/register` | Register a new user     | ❌            |
| POST   | `/api/auth/login`    | Login and get JWT token | ❌            |

### 📚 Books Routes

| Method | Endpoint         | Description             | Auth Required |
| ------ | ---------------- | ----------------------- | ------------- |
| GET    | `/api/books`     | Get all books           | ❌            |
| GET    | `/api/books/:id` | Get single book details | ❌            |

### 📖 My Books Routes

| Method | Endpoint                      | Description                | Auth Required |
| ------ | ----------------------------- | -------------------------- | ------------- |
| GET    | `/api/mybooks`                | Get logged-in user's books | ✅            |
| POST   | `/api/mybooks/add/:bookId`    | Add a book to user's list  | ✅            |
| PATCH  | `/api/mybooks/status/:bookId` | Update reading status      | ✅            |
| PATCH  | `/api/mybooks/rating/:bookId` | Update book rating         | ✅            |
| DELETE | `/api/mybooks/remove/:bookId` | Remove book from list      | ✅            |

---

## 👨‍💻 Developer

**Utkarsh Raj**  
📧 *utkarshraj525@gmail.com*  
🌍 _Full-stack Developer & Passionate Builder_

---

## 🗺️ Roadmap (Upcoming Enhancements)

- ⭐ User Ratings & Reviews System
- 🔐 Google OAuth Integration
- 🌙 Dark / Light Theme Switcher
- 🔖 Bookmark & "Continue Reading" Feature
- 👨‍💼 Admin Panel for Book Management
- 📊 Reading Statistics & Analytics

---

> Built with ❤️ to bring the joy of reading back into our daily lives — anytime, anywhere.
