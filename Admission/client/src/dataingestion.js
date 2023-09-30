import React, { useState } from 'react';
import axios from 'axios';
import './dataingestion.css';

const SalesTeamForm = () => {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [admissionStatus, setAdmissionStatus] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      district,
      admissionDate,
      admissionStatus
    };

    axios
      .post('http://localhost:5000/api/data', formData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError(null);
      })
      .catch((error) => {
        setError('Failed to save data');
        setSuccessMessage(null);
      });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleExcelSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:5000/api/data/excel', formData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError(null);
      })
      .catch((error) => {
        setError('Failed to save Excel data');
        setSuccessMessage(null);
      });
  };

  return (
  <div class="container">
    <div className="sales-team-form-container">
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="form-container">
        <h2>Admission Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student Name:</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div className="form-group">
            <label>District:</label>
            <select value={district} onChange={(event) => setDistrict(event.target.value)} required>
              <option value="">Select a district</option>
              <option value="Visakhapatnam">vishakapatnam</option>
              <option value="Srikakulam">srikakulam</option>
              <option value="West Godavari">west godavari</option>
            </select>
          </div>
          <div className="form-group">
            <label>Admission Date:</label>
            <input type="date" value={admissionDate} onChange={(event) => setAdmissionDate(event.target.value)} required />
          </div>
          <div className="form-group">
            <label>Admission Status:</label>
            <select value={admissionStatus} onChange={(event) => setAdmissionStatus(event.target.value)} required>
              <option value="">Select an admission status</option>
              <option value="1">1</option>
              <option value="0">0</option>
            </select>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
      <div className="file-upload-container">
        <h3>Admission Data File:</h3>
        <form onSubmit={handleExcelSubmit}>
          <label>Upload Excel File:</label>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} required />
          <button type="submit" className="save-button">
            Save Excel
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default SalesTeamForm;
