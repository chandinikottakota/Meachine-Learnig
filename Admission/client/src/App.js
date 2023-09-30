// App.js

import React from 'react';
import 'chart.js/auto';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Dashboard from './dashboard';
import DataIngestion from './dataingestion';
import DataVisualization from './DataVisualization';
// import 'chart.js/auto';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dataingestion" element={<DataIngestion />} />
        <Route exact path="/DataVisualization" element={<DataVisualization/>} />
      </Routes>
    </Router>
  );
};

export default App;
