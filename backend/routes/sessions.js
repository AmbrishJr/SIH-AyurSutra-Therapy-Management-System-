const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// Get all sessions
router.get('/', async (req, res) => {
    const sessions = await Session.find();
    res.json(sessions);
});

// Add new session
router.post('/', async (req, res) => {
    const session = new Session(req.body);
    await session.save();
    res.json(session);
});

// Edit session
router.put('/:id', async (req, res) => {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(session);
});

// Delete session
router.delete('/:id', async (req, res) => {
    await Session.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;