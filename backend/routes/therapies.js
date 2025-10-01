const express = require('express');
const router = express.Router();
const Therapy = require('../models/Therapy');

// Get all therapies
router.get('/', async (req, res) => {
    const therapies = await Therapy.find();
    res.json(therapies);
});

// Add new therapy
router.post('/', async (req, res) => {
    const therapy = new Therapy(req.body);
    await therapy.save();
    res.json(therapy);
});

// Edit therapy
router.put('/:id', async (req, res) => {
    const therapy = await Therapy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(therapy);
});

// Delete therapy
router.delete('/:id', async (req, res) => {
    await Therapy.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;