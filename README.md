# Frontend for Nextdek Assignment

## Overview
This is the frontend for the Nextdek Assignment project. It is a React-based single-page application (SPA) built with Vite for fast development and optimized builds. The frontend interacts with the backend API to provide a seamless user experience for managing users and notes.

## Features
- User authentication (login and registration)
- Dashboard for managing notes
- Protected routes for authenticated users
- Responsive design
- Modular and reusable components

## Project Structure
```
Frontend/
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration
├── src/                   # Source code
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   ├── main.jsx           # Application entry point
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── NoteCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/             # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── services/          # API service functions
│       └── api.js
```

## Prerequisites
- Node.js (v14 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Create a `.env` file in the `Frontend` directory.
2. Add the following environment variables:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

## Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
2. The application will run at `http://localhost:5173` by default.

## Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## License
This project is licensed under the Learner's License.
