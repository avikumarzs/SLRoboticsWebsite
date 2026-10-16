# Akshar Bharti Seva International | Robotics Simulation Lab

An interactive robotics learning platform for Grades 5–10. The project uses a React/Vite frontend and an Express/Mongoose backend. The supplied logo is in `frontend/public/akshar-bharti-logo.png`.

## Features

- Six grade dashboards with the existing grade-specific curriculum.
- Visual module illustrations and guided briefs for robot assembly, rover movement, sensor logic, and flowchart activities.
- A rover simulator with three replayable obstacle layouts and collision checks.
- Sensor controls for both the starting reading and the decision threshold.
- Ten grade-specific quiz questions per grade, with answer explanations, score review, retry, and progress recording.
- Local browser progress tracking for module reads, completed activities, quiz attempts, and best quiz scores.
- Logo-derived amber, orange, blue, and warm neutral design tokens, responsive layouts, keyboard focus styles, and reduced-motion support.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 8 requirement).
- MongoDB is optional. The API serves bundled curriculum content when the database is unavailable.

## Run locally

Install dependencies once in each folder:

```bash
cd backend
npm install
cd ../frontend
npm install
```

Start the backend in one terminal:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the Vite URL printed in the frontend terminal (normally `http://localhost:5173`). The backend listens on port 5000.

## Optional MongoDB setup

Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI` to your MongoDB connection string. The backend otherwise attempts the local default database and falls back to the bundled data if it cannot connect.

To update the six grade documents in MongoDB without deleting unrelated records:

```bash
cd backend
npm run seed
```

## Project notes

- No dependencies were added for these changes.
- Student progress is stored in that browser’s `localStorage`; it is not synced across devices or accounts.
- The simulations are simplified classroom models and do not represent complete commercial autonomous systems.
