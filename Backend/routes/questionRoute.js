// routes/questionRoute.js
const express = require('express');
const router = express.Router();
const Question = require('../models/questionsModel'); // Ensure the correct path to the model

// Create a new question
router.post('/', async (req, res) => {
  const question = new Question(req.body);

  try {
    await question.save();
    res.status(201).send({ message: 'Question submitted successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Question submission failed', error: error.message });
  }
});

// Get all questions (for administrative purposes)
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(400).send({ message: 'Failed to fetch questions', error: error.message });
  }
});

module.exports = router;
