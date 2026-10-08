const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const GradeContent = require('./models/GradeContent');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Fetch specific grade content
app.get('/api/content/:grade', async (req, res) => {
  try {
    const content = await GradeContent.findOne({ grade: req.params.grade });
    if (!content) return res.status(404).json({ message: "Content not found" });
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));