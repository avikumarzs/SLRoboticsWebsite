const mongoose = require('mongoose');
const GradeContent = require('./models/GradeContent');
const curriculumData = require('./curriculumData');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/akshar-bharati-robotics';

async function seedDatabase() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log('Connected to MongoDB. Purging existing curriculum data...');
    await GradeContent.deleteMany({});
    console.log(`Inserting ${curriculumData.length} comprehensive grade curricula (Grades 5-10)...`);
    await GradeContent.insertMany(curriculumData);
    console.log('Curriculum data successfully seeded into MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('Database seeding notice / error:', err.message);
    console.log('Note: If MongoDB service is offline, the backend server will automatically fall back to serving curriculumData.js seamlessly.');
    process.exit(1);
  }
}

seedDatabase();