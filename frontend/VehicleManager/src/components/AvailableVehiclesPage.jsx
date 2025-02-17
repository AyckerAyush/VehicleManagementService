import React, { useState, useEffect } from 'react';
import './styles.css'; // You can style the list here

const AvailableVehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]); // To store the vehicle list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch vehicles when the component mounts
  useEffect(() => {
    const fetchAvailableVehicles = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/vehicles'); // API endpoint to get all vehicles
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }

        const data = await response.json(); // Parse the JSON response
        const availableVehicles = data.filter(vehicle => !vehicle.isBooked); // Filter out booked vehicles
        setVehicles(availableVehicles); // Store available vehicles
      } catch (err) {
        setError(err.message); // Set error message if API call fails
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };

    fetchAvailableVehicles(); // Call the fetch function
  }, []); // Runs only once when the component mounts

  // Handle loading, error, and success states
  if (loading) {
    return <div>Loading available vehicles...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="vehicles-container">
      <h2>Available Vehicles</h2>
      <div className="vehicle-list">
        {vehicles.length === 0 ? (
          <p>No available vehicles at the moment.</p>
        ) : (
          vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <h3>{vehicle.owner}</h3>
              <p><strong>ID:</strong> {vehicle.id}</p>
              <p><strong>Remaining Distance:</strong> {vehicle.remainingDistance} KM</p>
              <p><strong>Price per KM:</strong> ${vehicle.perKMPrice}</p>
              <p><strong>Total Due:</strong> ${vehicle.totalDue}</p>
              <p><strong>Status:</strong> Available</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableVehiclesPage;
