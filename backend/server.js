const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const GradeContent = require('./models/GradeContent');
const curriculumData = require('./curriculumData');
const gradeQuizzes = require('./gradeQuizzes.json');

const app = express();
app.use(cors());
app.use(express.json());

let isMongoConnected = false;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/akshar-bharati-robotics';

// Connect to MongoDB with timeout and non-blocking fallback
if (MONGO_URI) {
  mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 4000 })
    .then(() => {
      isMongoConnected = true;
      console.log('Successfully connected to MongoDB.');
    })
    .catch((err) => {
      isMongoConnected = false;
      console.warn('MongoDB connection notice:', err.message);
      console.log('Operating in high-resilience in-memory fallback mode using curriculumData.js.');
    });
} else {
  console.log('No MONGO_URI specified. Operating with built-in curriculum data.');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Akshar Bharati Sewa International Robotics Simulation Lab API',
    database: {
      connected: isMongoConnected,
      mode: isMongoConnected ? 'mongodb' : 'in-memory-fallback'
    },
    gradesCount: curriculumData.length
  });
});

// Fetch all available grades summary
app.get('/api/grades', async (req, res) => {
  try {
    let gradesList;
    if (isMongoConnected) {
      const dbContents = await GradeContent.find({}, 'grade tier theme subtitle modules activities quiz').sort({ grade: 1 });
      if (dbContents && dbContents.length > 0) {
        gradesList = dbContents.map(c => ({
          grade: c.grade,
          tier: c.tier,
          theme: c.theme,
          subtitle: c.subtitle,
          moduleCount: c.modules ? c.modules.length : 0,
          activityCount: c.activities ? c.activities.length : 0,
          quizCount: gradeQuizzes[c.grade]?.length || (c.quiz ? c.quiz.length : 0)
        }));
      }
    }
    
    // Fallback if DB is empty or offline
    if (!gradesList || gradesList.length === 0) {
      gradesList = curriculumData.map(c => ({
        grade: c.grade,
        tier: c.tier,
        theme: c.theme,
        subtitle: c.subtitle,
        moduleCount: c.modules.length,
        activityCount: c.activities.length,
        quizCount: gradeQuizzes[c.grade]?.length || c.quiz.length
      }));
    }

    res.json({ grades: gradesList });
  } catch (error) {
    console.error('Error in /api/grades:', error);
    // Graceful in-memory fallback on any unexpected error
    const fallbackList = curriculumData.map(c => ({
      grade: c.grade,
      tier: c.tier,
      theme: c.theme,
      subtitle: c.subtitle,
      moduleCount: c.modules.length,
      activityCount: c.activities.length,
        quizCount: gradeQuizzes[c.grade]?.length || c.quiz.length
    }));
    res.json({ grades: fallbackList });
  }
});

// Fetch full grade content with robust error handling & fallback
app.get('/api/content/:grade', async (req, res) => {
  const gradeParam = parseInt(req.params.grade, 10);
  
  if (isNaN(gradeParam) || gradeParam < 5 || gradeParam > 10) {
    return res.status(404).json({
      error: 'Invalid grade level requested.',
      message: `Grade '${req.params.grade}' is not supported. Please choose a grade between 5 and 10.`,
      availableGrades: [5, 6, 7, 8, 9, 10]
    });
  }

  try {
    let content = null;
    if (isMongoConnected) {
      try {
        content = await GradeContent.findOne({ grade: gradeParam });
      } catch (dbErr) {
        console.warn(`Database query failed for grade ${gradeParam}, switching to local fallback:`, dbErr.message);
      }
    }

    // Use in-memory curriculum data if DB item is not present
    if (!content) {
      content = curriculumData.find(c => c.grade === gradeParam);
    }

    if (!content) {
      return res.status(404).json({
        error: 'Content not found',
        message: `Curriculum content for Grade ${gradeParam} is currently being prepared.`
      });
    }

    // Keep the assessment consistent with the current grade-specific ten-question quiz.
    res.json({ ...content.toObject?.() || content, quiz: gradeQuizzes[gradeParam] || content.quiz || [] });
  } catch (error) {
    console.error(`Unexpected error handling grade ${gradeParam}:`, error);
    const localContent = curriculumData.find(c => c.grade === gradeParam);
    if (localContent) {
      return res.json(localContent);
    }
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
});

// Catalog of interactive labs & activities
app.get('/api/activities', (req, res) => {
  res.json({
    activities: [
      {
        id: 'build-a-robot',
        title: 'Build a Robot Workshop',
        category: 'Hardware & Architecture',
        targetTiers: ['discover'],
        summary: 'Drag and assemble the chassis, DC drive motors, battery pack, ultrasonic sensor, and microcontroller brain.'
      },
      {
        id: 'movement-sim',
        title: 'Robot Movement Simulator',
        category: 'Kinematics & Navigation',
        targetTiers: ['discover', 'explore', 'engineer'],
        summary: 'Direct rover motion across a dynamic test arena with directional controls, obstacle avoidance, and odometer telemetry.'
      },
      {
        id: 'sensor-logic',
        title: 'Sensor Logic Challenge',
        category: 'Reactive Control & Perception',
        targetTiers: ['explore', 'engineer'],
        summary: 'Calibrate ultrasonic distance thresholds and configure conditional IF-THEN-ELSE reactive behaviors.'
      },
      {
        id: 'flowchart-builder',
        title: 'Flowchart Builder',
        category: 'Algorithms & Sequencing',
        targetTiers: ['explore', 'engineer'],
        summary: 'Arrange standard flowchart logic blocks and step through animated execution to navigate autonomous challenges.'
      },
      {
        id: 'interactive-quiz',
        title: 'Robotics Knowledge Quiz',
        category: 'Pedagogy & Assessment',
        targetTiers: ['discover', 'explore', 'engineer'],
        summary: 'Evaluate conceptual understanding with immediate feedback, explanations, and mastery scoring.'
      }
    ]
  });
});

// Global 404 handler for API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Akshar Bharati Sewa International Robotics Simulation Lab API listening on port ${PORT}`);
});

module.exports = { app, server };
