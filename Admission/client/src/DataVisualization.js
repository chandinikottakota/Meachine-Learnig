import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import './DataVisualization.css';

function DataVisualization() {
  const [chartData, setChartData] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/app/data/districtCounts');
      const data = await response.json();

      const districtNames = data.map(({ district }) => district);
      const districtCounts = data.map(({ count }) => count);

      const chartData = {
        labels: districtNames,
        datasets: [
          {
            data: districtCounts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)', // Red
              'rgba(54, 162, 235, 0.6)', // Blue
              'rgba(255, 206, 86, 0.6)', // Yellow
              'rgba(75, 192, 192, 0.6)', // Teal
              'rgba(153, 102, 255, 0.6)', // Purple
              'rgba(255, 159, 64, 0.6)', // Orange
              'rgba(0, 255, 0, 0.6)', // Green
              'rgba(128, 128, 128, 0.6)' // Gray
            ],
            borderWidth: 1
          }
        ],
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      };

      setChartData(chartData);
    };

    const ws = new WebSocket('ws://localhost:8765');

    ws.onmessage = (event) => {
      setAccuracy(parseFloat(event.data));
    };

    fetchData();

    // Clean up WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="visualization-container">
      {accuracy !== null ? (
        <h2 className="accuracy">Accuracy: {accuracy * 100}%</h2>
      ) : (
        <p className="loading">Loading accuracy...</p>
      )}
      {chartData ? (
        <div className="graph-container">
          <h2 class="head">Admission Status Counts by District</h2>
          <Bar data={chartData} />
        </div>
      ) : (
        <p className="loading">Loading graph...</p>
      )}
    </div>
  );
}

export default DataVisualization;
