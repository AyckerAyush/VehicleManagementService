import React, { useState } from 'react';

const AddVehicleForm = ({ onAddVehicle }) => {
  const [vehicle, setVehicle] = useState({
    isBooked: false,
    remainingDistance: 0,
    owner: '',
    BookedBy: '',
    bookedDistance: 0,
    perKMPrice: 0,
    totalDue: 0, // Adding totalDue field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({
      ...vehicle,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the vehicle data to the API
    try {
      const response = await fetch('http://localhost:8080/api/vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicle),
      });
      console.log(response)
      if (response.ok) {
        const newVehicle = await response.json();
        console.log('Vehicle added successfully:', newVehicle);
        onAddVehicle(newVehicle);  // Update the list of vehicles in the parent component
      } else {
        throw new Error('Failed to add vehicle');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add vehicle. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add a New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Owner:</label>
          <input
            type="text"
            name="owner"
            value={vehicle.owner}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Booked By:</label>
          <input
            type="text"
            name="BookedBy"
            value={vehicle.BookedBy}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Remaining Distance (KM):</label>
          <input
            type="number"
            name="remainingDistance"
            value={vehicle.remainingDistance}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Booked Distance (KM):</label>
          <input
            type="number"
            name="bookedDistance"
            value={vehicle.bookedDistance}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price per KM ($):</label>
          <input
            type="number"
            name="perKMPrice"
            value={vehicle.perKMPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Due ($):</label>
          <input
            type="number"
            name="totalDue"
            value={vehicle.totalDue}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Is Booked:</label>
          <select
            name="isBooked"
            value={vehicle.isBooked}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicleForm;
