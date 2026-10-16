const mongoose = require('mongoose');
const GradeContent = require('./models/GradeContent');
const curriculumData = require('./curriculumData');
const gradeQuizzes = require('./gradeQuizzes.json');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/akshar-bharati-robotics';

async function seedDatabase() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log('Connected to MongoDB. Updating the six grade curricula...');
    const grades = curriculumData.map((grade) => ({
      ...grade,
      quiz: gradeQuizzes[grade.grade] || grade.quiz
    }));
    await GradeContent.bulkWrite(grades.map((grade) => ({
      updateOne: {
        filter: { grade: grade.grade },
        update: { $set: grade },
        upsert: true
      }
    })));
    console.log('Curriculum data successfully updated in MongoDB.');
    process.exit(0);
  } catch (err) {
    console.error('Database seeding notice / error:', err.message);
    console.log('Note: If MongoDB service is offline, the backend server will automatically fall back to serving curriculumData.js seamlessly.');
    process.exit(1);
  }
}

seedDatabase();
