// controllers/questionController.js
const Question = require('../models/questions');

// Create a new question
exports.createQuestion = async (req, res) => {
  const { name, email, phone, question } = req.body;
  const newQuestion = new Question({ name, email, phone, question });

  try {
    await newQuestion.save();
    res.status(201).json({ message: 'Question submitted successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Question submission failed', error: error.message });
  }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch questions', error: error.message });
  }
};
