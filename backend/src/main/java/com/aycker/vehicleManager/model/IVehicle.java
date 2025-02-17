package com.aycker.vehicleManager.model;

import com.fasterxml.jackson.annotation.JsonTypeInfo;


public interface IVehicle {
    Boolean isBooked();
    Double remainingDistance();
    String owner();
    String BookedBy();
    int bookedDistance();
    Double perKMPrice();
    Double totalDue();

}
