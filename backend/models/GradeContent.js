const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  id: String,
  title: String,
  readTime: String,
  keyConcepts: [String],
  summary: String,
  content: String
}, { _id: false });

const activitySchema = new mongoose.Schema({
  id: String,
  type: String,
  title: String,
  description: String,
  instructions: String
}, { _id: false });

const quizQuestionSchema = new mongoose.Schema({
  id: String,
  question: String,
  options: [String],
  correctIndex: Number,
  explanation: String
}, { _id: false });

const gradeContentSchema = new mongoose.Schema({
  grade: { type: Number, required: true, unique: true },
  tier: { type: String, enum: ['discover', 'explore', 'engineer'], default: 'discover' },
  theme: { type: String, required: true },
  subtitle: String,
  introduction: { type: String, required: true },
  projectGoals: [String],
  problemStatements: [String],
  modules: [moduleSchema],
  activities: [activitySchema],
  quiz: [quizQuestionSchema]
}, { timestamps: true });

module.exports = mongoose.model('GradeContent', gradeContentSchema);