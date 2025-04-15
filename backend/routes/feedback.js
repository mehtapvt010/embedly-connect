const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const { clientId, name, message, timestamp } = req.body;

    if (!clientId || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const feedback = new Feedback({
      clientId,
      name,
      message,
      timestamp: timestamp || new Date(),
    });

    await feedback.save();
    res.status(201).json({ success: true, feedback });
  } catch (err) {
    console.error('Error saving feedback:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

module.exports = router;
