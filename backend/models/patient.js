const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    therapy: String,
    practitioner: String,
    status: String,
    contact_phone: String,
    contact_email: String
});

module.exports = mongoose.model('Patient', PatientSchema);
