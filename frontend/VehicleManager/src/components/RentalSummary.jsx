import React from 'react';

const RentalSummary = ({ rentalDetails }) => {
  return (
    <div>
      <h2>Rental Summary</h2>
      <p>Vehicle: {rentalDetails.vehicle.name}</p>
      <p>Price per Day: ${rentalDetails.vehicle.pricePerDay}</p>
      <p>Rental Days: {rentalDetails.rentalDays}</p>
      <p>Total Cost: ${rentalDetails.totalCost}</p>
    </div>
  );
};

export default RentalSummary;
