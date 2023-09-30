const mongoose = require('mongoose');
const multer = require('multer');
const XLSX = require('xlsx');
const express = require('express');
const app = express();
const cors = require('cors');

// ...


app.use(cors());


// Parse JSON request body
app.use(express.json());

const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Admission', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Define a schema for the data collection
const admissionSchema = new mongoose.Schema({}, { strict: false });

// Create a model based on the schema
const Admission = mongoose.model('Admission', admissionSchema);

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle form data submission
// ...

// Handle form data submission
app.post('/api/data', (req, res) => {
  const { name, district, admissionDate, admissionStatus } = req.body;

  const parsedAdmissionStatus = parseInt(admissionStatus); // Parse the admissionStatus as an integer

  const admission = new Admission({
    name,
    district,
    admissionDate,
    admissionStatus: parsedAdmissionStatus // Save the parsed admissionStatus
  });

  admission.save()
    .then(() => {
      res.json({ message: 'Data saved successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save data' });
    });
});

// ...


// Handle Excel file upload
// Handle Excel file upload
// ...

// Handle Excel file upload
app.post('/api/data/excel', upload.single('file'), (req, res) => {
  const workbook = XLSX.readFile(req.file.path);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '', raw: false });

  // Parse admissionStatus as integers for each entry and remove NaN values
  const parsedData = jsonData
    .map((entry) => ({
      ...entry,
      admissionStatus: parseInt(entry.admissionStatus || 0)
    }))
    .filter((entry) => !isNaN(entry.admissionStatus));

  Admission.insertMany(parsedData)
    .then(() => {
      res.json({ message: 'Excel data saved successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save Excel data' });
    });
});

// ...





// Get only admissionStatus values from the database
app.get('/api/data/admissionStatus', (req, res) => {
  Admission.find(
    { admissionStatus: { $type: "number" }, admissionStatus: { $ne: null } },
    { admissionStatus: 1, _id: 0 }
  )
    .then((data) => {
      const admissionStatus = data.map((entry) => entry.admissionStatus || 0);
      res.json(admissionStatus);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    });
});
// ...

const { spawn } = require('child_process');

// ...

// Fetch admission data from the API
app.get('/api/results', (req, res) => {
  const pythonProcess = spawn('python', ['ml_train.py']);

  pythonProcess.stdout.on('data', (data) => {
    const results = JSON.parse(data);
    res.json(results);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script error: ${data}`);
    res.status(500).json({ error: 'Failed to retrieve results' });
  });
});

// ...


// Start the server

// Get unique district names and counts of 1's
app.get('/app/data/districtCounts', (req, res) => {
  Admission.aggregate([
    {
      $match: { admissionStatus: 1 } // Filter documents with admissionStatus equal to 1
    },
    {
      $group: {
        _id: '$district',
        count: { $sum: 1 } // Count the number of documents per district
      }
    }
  ])
    .then((data) => {
      const districtCounts = data.map(({ _id, count }) => ({ district: _id, count }));
      res.json(districtCounts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve data' });
    });
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
