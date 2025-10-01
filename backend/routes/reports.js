const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Practitioner = require('../models/Practitioner');
const Session = require('../models/Session');

router.get('/dashboard-summary', async (req, res) => {
    const totalPatients = await Patient.countDocuments();
    const totalPractitioners = await Practitioner.countDocuments();
    const today = new Date();
    today.setHours(0,0,0,0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const scheduledToday = await Session.countDocuments({
        startDate: { $gte: today, $lt: tomorrow }
    });
    const completedToday = await Session.countDocuments({
        startDate: { $gte: today, $lt: tomorrow },
        status: 'Completed'
    });
    const pendingToday = await Session.countDocuments({
        startDate: { $gte: today, $lt: tomorrow },
        status: 'Upcoming'
    });
    const missedToday = await Session.countDocuments({
        startDate: { $gte: today, $lt: tomorrow },
        status: { $in: ['Missed', 'Cancelled'] }
    });

    res.json({
        totalPatients,
        totalPractitioners,
        scheduledToday,
        completedToday,
        pendingToday,
        missedToday
    });
});

module.exports = router;