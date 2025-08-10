# Shelfy - Modern Library Management System

> A comprehensive, user-friendly web application for streamlined library operations built with React, TypeScript, and modern web technologies.
> 

## 🎯 Overview

Shelfy is a full-featured library management system designed to simplify essential library operations for readers, librarians, and administrators. The application provides an intuitive interface for book management, borrowing operations, and comprehensive analytics—all accessible through a clean, responsive web interface.

### Key Highlights

- **Zero Authentication Required** - Immediate access to all features
- **Real-time Updates** - Instant UI feedback for all operations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern Architecture** - Built with latest React ecosystem technologies

## ✨ Features

### 📖 Book Management

- **Comprehensive Book Catalog** - Browse all books with advanced sorting and filtering
- **CRUD Operations** - Create, read, update, and delete book records
- **Rich Metadata Support** - Title, Author, Genre, ISBN, Description, and Copy management
- **Smart Availability Tracking** - Automatic status updates based on available copies

### 📋 Borrowing System

- **Streamlined Borrowing Process** - Simple, intuitive book checkout
- **Business Rule Enforcement** - Quantity validation and availability checks
- **Due Date Management** - Flexible due date selection with validation
- **Real-time Inventory Updates** - Immediate availability status changes

### 📊 Analytics & Reporting

- **Borrow Summary Dashboard** - Comprehensive view of all borrowing activities
- **Aggregated Statistics** - Total quantities and borrowing patterns
- **Data-driven Insights** - Backend-powered aggregation for accurate reporting

## 🛠️ Technology Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development experience
- **Vite** - Lightning-fast build tool and development server

### State Management & API

- **Redux Toolkit Query (RTK Query)** - Efficient data fetching and caching
- **Zod** - Runtime type validation and schema parsing

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide Icons** - Beautiful, consistent icon library
- **Date-fns** - Modern date utility library
- **React Day Picker** - Flexible date picker component

### Code Quality

- **ESLint** - Code linting and style enforcement
- **TypeScript Compiler** - Static type checking

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Backend API server running (see [Backend Repository](https://github.com/zahid-official/milestone-16-server))

### Installation

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/your-username/shelfy-frontend.git
    cd shelfy-frontend
    
    ```
    
2. **Install dependencies**
    
    ```bash
    npm install
    
    ```
    
3. **Configure environment variables**
    
    ```bash
    cp .env.example .env.local
    
    ```
    
    Update `.env.local` with your configuration:
    
    ```
    VITE_API_BASE_URL=http://localhost:3000/api
    
    ```
    
4. **Start development server**
    
    ```bash
    npm run dev
    
    ```
    
5. **Open in browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview

```

## 📱 Application Routes

| Route | Description | Features |
| --- | --- | --- |
| `/books` | Main book catalog | View, search, edit, delete, borrow |
| `/create-book` | Add new book | Form validation, metadata input |
| `/books/:id` | Book details | Complete book information |
| `/edit-book/:id` | Edit existing book | Pre-filled forms, instant updates |
| `/borrow/:bookId` | Borrow process | Quantity selection, due date picker |
| `/borrow-summary` | Borrowing analytics | Aggregated statistics, summaries |

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Backend API endpoint | `http://localhost:3000/api` |

### API Integration

Shelfy frontend communicates with a RESTful backend API built with:

- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database and ODM
- **TypeScript** - Type-safe backend development
- **Zod** - Schema validation

## 🎨 Design Philosophy

- **Minimalist Interface** - Clean, distraction-free design focused on functionality
- **Accessibility First** - WCAG compliant with keyboard navigation support
- **Mobile Responsive** - Seamless experience across all device sizes
- **Performance Optimized** - Fast loading times with efficient caching strategies

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route-based page components
├── store/              # Redux store configuration
├── services/           # API services and RTK Query definitions
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── styles/             # Global styles and Tailwind configuration

```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](https://claude.ai/chat/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://claude.ai/chat/LICENSE) file for details.

## 👥 Support & Contact

- **Email**: zahid.official8@gmail.com

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/zahid-official">Zahid</a>
</div>