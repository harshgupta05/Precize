import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: 0,
  });
  const [viewData, setViewData] = useState([]);
  const [getRankName, setGetRankName] = useState('');
  const [rank, setRank] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [newSatScore, setNewSatScore] = useState(0);
  const [deleteName, setDeleteName] = useState('');

  // Function to insert data
  const insertData = async () => {
    try {
      await axios.post('/api/insert', formData);
      // Clear form and refresh data
      setFormData({
        name: '',
        address: '',
        city: '',
        country: '',
        pincode: '',
        satScore: 0,
      });
      fetchData();
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  // Function to fetch and view all data
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/view');
      setViewData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to get rank
  const getRank = async () => {
    try {
      const response = await axios.get(`/api/rank/${getRankName}`);
      setRank(response.data);
    } catch (error) {
      console.error('Error fetching rank:', error);
    }
  };

  // Function to update SAT score
  const updateScore = async () => {
    try {
      await axios.put(`/api/update/${updateName}`, { satScore: newSatScore });
      // Clear form and refresh data
      setUpdateName('');
      setNewSatScore(0);
      fetchData();
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  // Function to delete record
  const deleteRecord = async () => {
    try {
      await axios.delete(`/api/delete/${deleteName}`);
      // Clear form and refresh data
      setDeleteName('');
      fetchData();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Insert Data</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
        />
        <input
          type="number"
          placeholder="SAT Score"
          value={formData.satScore}
          onChange={(e) => setFormData({ ...formData, satScore: parseInt(e.target.value) })}
        />
        <button onClick={insertData}>Submit</button>
      </div>

      <h2>View All Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>SAT Score</th>
            <th>Passed</th>
          </tr>
        </thead>
        <tbody>
          {viewData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.pincode}</td>
              <td>{item.satScore}</td>
              <td>{item.passed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Get Rank</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={getRankName}
          onChange={(e) => setGetRankName(e.target.value)}
        />
        <button onClick={getRank}>Get Rank</button>
        <p>Rank: {rank}</p>
      </div>

      <h2>Update Score</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
        />
        <input
          type="number"
          placeholder="New SAT Score"
          value={newSatScore}
          onChange={(e) => setNewSatScore(e.target.value)}
        />
        <button onClick={updateScore}>Update Score</button>
      </div>

      <h2>Delete Record</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={deleteName}
          onChange={(e) => setDeleteName(e.target.value)}
        />
        <button onClick={deleteRecord}>Delete Record</button>
      </div>
    </div>
  );
}

export default App;
