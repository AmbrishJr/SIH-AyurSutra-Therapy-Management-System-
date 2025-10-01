const express = require('express');
const router = express.Router();
const Practitioner = require('../models/Practitioner');

// Get all practitioners
router.get('/', async (req, res) => {
    const practitioners = await Practitioner.find();
    res.json(practitioners);
});

// Add new practitioner
router.post('/', async (req, res) => {
    const practitioner = new Practitioner(req.body);
    await practitioner.save();
    res.json(practitioner);
});

// Edit practitioner
router.put('/:id', async (req, res) => {
    const practitioner = await Practitioner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(practitioner);
});

// Delete practitioner
router.delete('/:id', async (req, res) => {
    await Practitioner.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;