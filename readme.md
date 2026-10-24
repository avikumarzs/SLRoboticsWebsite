# Akshar Bharati Sewa International | Robotics Simulation Lab

An interactive robotics learning platform for Grades 5–10. Learners can explore grade-specific curriculum, complete quizzes, and experiment with virtual robotics activities in a browser—no physical robot kit required.

The project uses an npm workspace monorepo: the React/Vite frontend and Express API are developed separately, while install, build, and production startup commands run from the repository root. In production, Express serves the API and the built frontend from the same host.

## Features

- **Six grade pathways:** Grade 5 through Grade 10, with a progression from Discover to Explore and Engineer topics.
- **Grade dashboards:** Curriculum introductions, project goals, problem statements, structured learning modules, key concepts, and estimated reading times.
- **Visual learning support:** Concept illustrations and guided briefs accompany the curriculum and activities.
- **Mastery quizzes:** Ten grade-specific questions per grade, answer explanations, score review, retry, and best-score tracking.
- **Four shared interactive labs** at `/labs`:
  - **Build a Robot:** Assemble a virtual rover and learn how its chassis, motors, battery, sensor, and controller work together.
  - **Rover Simulator:** Drive through obstacle layouts, avoid collisions, and observe movement telemetry.
  - **Sensor Logic:** Adjust the starting sensor reading and safety threshold, then see how the selected rule triggers a rover response.
  - **Flowchart Builder:** Arrange and validate logic blocks, then run a sequence to guide a robot through a challenge.
- **Local progress tracking:** Module completion, activities, quiz attempts, and best scores are saved in the browser's `localStorage`; progress is not synced across devices or accounts.
- **Responsive and accessible interaction:** Keyboard focus styles and reduced-motion support.
- **Curriculum fallback:** The frontend includes bundled curriculum and quiz data for Grades 5–10, keeping learning content available when the API or database cannot be reached.

## Technology

- React 19, React Router, Vite, and Tailwind CSS
- Express 5 and Node.js
- Optional MongoDB persistence through Mongoose

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm
- MongoDB is optional. The backend falls back to bundled curriculum data when MongoDB is unavailable.

## Run locally

From the repository root, install dependencies and start the frontend and backend together:

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal (normally `http://localhost:5173`). The backend listens on port `5000`, and Vite proxies `/api` requests to it. Stopping the development command stops both servers.

### Optional MongoDB

The backend attempts to connect using `MONGO_URI`. To configure local MongoDB, copy `backend/.env.example` to `.env` in the repository root, then set `MONGO_URI` to your database connection string. Keep credentials private and do not commit `.env`.

Seed or update the six grade documents in the configured database with:

```bash
npm run seed
```

## Scripts

Run these from the repository root:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite frontend and Express backend together. |
| `npm run dev:frontend` | Start the frontend only. |
| `npm run dev:backend` | Start the backend with Nodemon. |
| `npm run build` | Build the production frontend into `frontend/dist`. |
| `npm start` | Start Express; serves the API and the built frontend when present. |
| `npm run seed` | Seed MongoDB with the bundled grade curriculum and quizzes. |

## API

The Express API is served under `/api`:

| Endpoint | Description |
| --- | --- |
| `GET /api/health` | Health status, database mode, and available grade count. |
| `GET /api/grades` | Grade summaries and module, activity, and quiz counts. |
| `GET /api/content/:grade` | Curriculum and quiz content for Grades 5–10. |
| `GET /api/activities` | Catalog of interactive activities. |

For example, after starting the backend, visit `http://localhost:5000/api/health`.

## Deploy to Render

Deploy this repository as one **Web Service**:

1. Connect the GitHub repository in Render.
2. Leave **Root Directory** blank (use the repository root).
3. Set **Build Command** to `npm ci && npm run build`.
4. Set **Start Command** to `npm start`.
5. Deploy. The backend listens on Render's `PORT` environment variable and serves the frontend build; a separate static-site service is not needed.

MongoDB is optional. If you want database-backed curriculum, set `MONGO_URI` as a Render environment variable.

If Render reports that it cannot find a Linux Rolldown or Lightning CSS native binding, ensure the latest root `package-lock.json` is committed and pushed, then use **Clear build cache & deploy**.

## Repository layout

```text
backend/       Express API, MongoDB model, curriculum data, and seed script
frontend/      React app, grade content, interactive labs, and Vite configuration
package.json   Root workspace scripts and Node.js requirement
package-lock.json  Root workspace dependency lockfile
```

## Project notes

- Student progress is stored locally in the browser and is not synced across devices or accounts.
- The simulations are simplified classroom models, not complete commercial autonomous systems.
