# Akshar Bharati Robotics Educational Platform

A dynamic, interactive web platform built to introduce robotics concepts to students across different age groups (Grades 5 to 10). The application scales its content complexity and visual interface based on the student's selected grade level.

## 🚀 Features

* **Dynamic Curriculum Rendering:** Automatically fetches and adapts learning materials, problem statements, and project goals based on the selected grade.
* **Maturity-Based UI:** The interface scales from highly visual, colorful layouts for junior grades to a more professional, terminal-like dark mode for senior grades.
* **Full-Stack MERN Architecture:** Built with MongoDB, Express.js, React, and Node.js.
* **Modern Styling:** Utilizes Tailwind CSS v4 for rapid, responsive UI development.

## 🛠️ Tech Stack

* **Frontend:** React (bootstrapped with Vite), React Router DOM, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB (Local or Atlas)

## 📁 Project Structure

```text
├── backend/                # Express server and MongoDB models
│   ├── models/             # Mongoose schemas (e.g., GradeContent)
│   ├── .env                # Backend environment variables (ignored by Git)
│   ├── seed.js             # Script to populate initial curriculum data
│   └── server.js           # Main Express server entry point
├── frontend/               # React client application (Vite)
│   ├── src/
│   │   ├── pages/          # React components (LandingPage, InteractiveScreen)
│   │   ├── App.jsx         # Main router setup
│   │   ├── main.jsx        # React DOM rendering
│   │   └── index.css       # Tailwind entry point
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
├── .gitignore              # Ignored files and directories
└── README.md               # Project documentation
```

## ⚙️ Local Setup Instructions

Follow these steps to get the project running on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally, OR a MongoDB Atlas cloud URI.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Backend Setup
Open a terminal and navigate to the backend directory:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Create a `.env` file in the `backend` folder and add your environment variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/akshar-bharati-robotics
```
Seed the database with initial curriculum data (Run this once):
```bash
node seed.js
```
Start the backend development server:
```bash
npx nodemon server.js
```
*The server should run on http://localhost:5000*

### 3. Frontend Setup
Open a **new** terminal window and navigate to the frontend directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Start the Vite development server:
```bash
npm run dev
```
*The application will be available at http://localhost:5173*

## 💡 Usage

1. Open the frontend URL in your browser.
2. Select a grade level (5-10) on the landing page.
3. View the grade-specific introduction, project goals, and problem statements fetched directly from the database.