import React, { useState } from 'react';

const RentalForm = ({ vehicle, onSubmit }) => {
  const [rentalDays, setRentalDays] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      vehicle,
      rentalDays,
      totalCost: vehicle.pricePerDay * rentalDays,
    });
  };

  return (
    <div>
      <h2>Rent {vehicle.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rentalDays">Rental Days:</label>
          <input
            type="number"
            id="rentalDays"
            value={rentalDays}
            onChange={(e) => setRentalDays(e.target.value)}
            min="1"
          />
        </div>
        <button type="submit">Confirm Rental</button>
      </form>
    </div>
  );
};

export default RentalForm;
