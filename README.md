# Akshada B - Professional Portfolio

A sleek, premium, black-and-white portfolio website built with React, Vite, and designed with a modern glassmorphism aesthetic. 

## Features

- **Modern UI/UX**: Dark mode aesthetic with high contrast, subtle gray borders, and smooth hover micro-animations.
- **Responsive Layout**: fully responsive design for desktop, tablet, and mobile.
- **Glassmorphism**: Elegant glass-like panels and interactive elements.
- **Dynamic Projects & Skills**: Highlights clinical AI, machine learning, and full-stack development projects.
- **Vercel-ready**: Configured for seamless deployment on Vercel as a Single Page Application (SPA).
- **Dockerized**: Includes a multi-stage Dockerfile for containerized deployment using Nginx.

## Technologies Used

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom Design System with CSS variables)
- **Icons**: `react-icons` and `lucide-react`
- **Fonts**: Inter & Outfit (Google Fonts)
- **Deployment Strategy**: Vercel & Docker

## Running Locally

To run this project locally on your machine:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview the Production Build**
   ```bash
   npm run preview
   ```

## Running with Docker

You can also build and run the application using Docker.

1. **Build the image**
   ```bash
   docker build -t portfolio-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 8080:80 portfolio-app
   ```
   Access the app at `http://localhost:8080`.

## Customization

- **Profile Picture**: Replace the `profile.jpg` in the `public` folder with your own professional headshot.
- **GitHub Links**: Update the placeholder `"#"` links in the `projects` array within `src/App.jsx` to your actual GitHub repositories.

---
© Akshada B. All rights reserved.
