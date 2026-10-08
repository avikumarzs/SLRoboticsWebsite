const mongoose = require('mongoose');

const gradeContentSchema = new mongoose.Schema({
  grade: { type: Number, required: true, unique: true },
  theme: String,
  introduction: String,
  projectGoals: [String],
  problemStatements: [String]
});

module.exports = mongoose.model('GradeContent', gradeContentSchema);