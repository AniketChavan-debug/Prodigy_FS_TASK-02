const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
