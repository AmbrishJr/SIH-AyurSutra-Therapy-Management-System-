const mongoose = require('mongoose');
const TherapySchema = new mongoose.Schema({
    therapyID: String,
    name: String,
    category: String,
    duration: String,
    practitioners: [String],
    patientsEnrolled: Number,
    averageRating: Number,
    description: String,
    preInstructions: String,
    postInstructions: String,
    materials: [String],
    feedback: {
        average: Number,
        comments: [String]
    },
    completionRate: Number
});
module.exports = mongoose.model('Therapy', TherapySchema);