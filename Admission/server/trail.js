// app.js (or index.js)

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Admission', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define the schema and model for your data
const dataSchema = new mongoose.Schema({
  name: String,
  district: String,
  admissionStatus: Number
});

const DataModel = mongoose.model('Data', dataSchema);

// API endpoint to retrieve data with admissionStatus 0 or 1
app.get('/api/data', (req, res) => {
  const query = { admissionStatus: { $in: [0, 1] } };
  DataModel.find(query, (error, data) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(data);
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
