const mongoose = require('mongoose');
const SessionSchema = new mongoose.Schema({
    sessionID: String,
    patientName: String,
    patientID: String,
    therapistName: String,
    therapistID: String,
    therapyType: String,
    startDate: Date,
    endDate: Date,
    duration: Number,
    room: String,
    status: String,
    preNotes: String,
    postInstructions: String,
    feedback: String,
    patientPlan: {
        startDate: Date,
        endDate: Date
    },
    therapistAvailability: String
});
module.exports = mongoose.model('Session', SessionSchema);