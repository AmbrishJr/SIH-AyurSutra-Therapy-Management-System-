const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (local or Atlas URI)
mongoose.connect('mongodb://localhost:27017/ayursutra', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Import routes
const patientsRoutes = require('./routes/patients');
app.use('/api/patients', patientsRoutes);

const practitionersRoutes = require('./routes/practitioners');
app.use('/api/practitioners', practitionersRoutes);

const reportsRoutes = require('./routes/reports');
app.use('/api/reports', reportsRoutes);

const sessionsRoutes = require('./routes/sessions');
app.use('/api/sessions', sessionsRoutes);

const therapiesRoutes = require('./routes/therapies');
app.use('/api/therapies', therapiesRoutes);

// Start server
app.listen(5000, () => console.log('🚀 Backend running on http://localhost:5000'));
