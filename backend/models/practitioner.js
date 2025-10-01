const mongoose = require('mongoose');
const PractitionerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    specialization: [String],
    experience: Number,
    patients: Number,
    status: String,
    contact_phone: String,
    contact_email: String,
    qualifications: String,
    pastPatients: Number,
    rating: Number,
    schedule: String,
    currentPatients: [String],
    certifications: [String],
    weeklySchedule: Object
});
module.exports = mongoose.model('Practitioner', PractitionerSchema);