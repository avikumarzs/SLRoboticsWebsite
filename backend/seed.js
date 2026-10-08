const mongoose = require('mongoose');
const GradeContent = require('./models/GradeContent');
require('dotenv').config();

const seedData = [
  {
    grade: 5,
    theme: "Introduction to Machines",
    introduction: "Welcome to the world of robotics! Let's learn how simple machines work.",
    projectGoals: ["Identify basic robot parts", "Understand cause and effect"],
    problemStatements: ["How do wheels help a robot move?", "What makes a robot stop?"]
  },
  {
    grade: 10,
    theme: "Advanced Autonomous Systems",
    introduction: "Dive into complex algorithms and autonomous navigation.",
    projectGoals: ["Design a line-following algorithm", "Implement sensor-based decision making"],
    problemStatements: ["Optimize the pathfinding logic", "Handle edge cases in obstacle detection"]
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await GradeContent.deleteMany({});
    await GradeContent.insertMany(seedData);
    console.log('Curriculum data seeded successfully!');
    process.exit();
  })
  .catch(err => console.error(err));