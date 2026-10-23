# Akshar Bharati Sewa International | Robotics Simulation Lab

An interactive robotics learning platform for Grades 5–10. The React/Vite frontend and Express/Mongoose API are maintained in separate source folders, but the repository root is the single install, build, and deployment entry point. In production, Express serves both the API and the built frontend from the same host.

## Features

- Six grade dashboards with the existing grade-specific curriculum.
- Visual module illustrations and guided briefs for robot assembly, rover movement, sensor logic, and flowchart activities.
- A rover simulator with three replayable obstacle layouts and collision checks.
- Sensor controls for both the starting reading and the decision threshold.
- Ten grade-specific quiz questions per grade, with answer explanations, score review, retry, and progress recording.
- Local browser progress tracking for module reads, completed activities, quiz attempts, and best quiz scores.
- Logo-derived amber, orange, blue, and warm neutral design tokens, responsive layouts, keyboard focus styles, and reduced-motion support.

## Requirements

- Node.js 20.19+ or 22.12+.
- MongoDB is optional. The API serves bundled curriculum content when the database is unavailable.

## Run locally

From the repository root, install all workspace dependencies and start both servers in one terminal:

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal (normally `http://localhost:5173`). The command starts the API and frontend together, and stopping it also stops both servers. Vite proxies `/api` requests to the backend on port 5000.

## Deploy as one service

Configure the hosting platform to use the repository root, install dependencies with `npm install`, build with `npm run build`, and start with `npm start`. The server listens on the platform-provided `PORT`, serves API routes under `/api`, and serves the built frontend for other routes. No separate frontend hosting service is required.

Set `MONGO_URI` in the hosting platform's environment variables if using MongoDB. Without it, the bundled curriculum remains available. For local MongoDB configuration, copy `backend/.env.example` to `.env` in the repository root and set `MONGO_URI`.

To update the six grade documents in MongoDB:

```bash
npm run seed
```

## Project notes

- Student progress is stored in that browser’s `localStorage`; it is not synced across devices or accounts.
- The simulations are simplified classroom models and do not represent complete commercial autonomous systems.
