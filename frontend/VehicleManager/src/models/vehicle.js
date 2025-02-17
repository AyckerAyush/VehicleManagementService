const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Ensure you have this connection configured

const Vehicle = sequelize.define('Vehicle', {
  isBooked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  remainingDistance: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BookedBy: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  bookedDistance: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  perKMPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  totalDue: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0.0, // Default to 0 if not specified
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields
});

module.exports = Vehicle;
