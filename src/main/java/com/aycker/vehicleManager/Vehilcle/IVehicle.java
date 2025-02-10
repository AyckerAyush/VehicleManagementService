package com.aycker.vehicleManager.Vehilcle;

public interface IVehicle {
    Boolean isBooked();
    Double remainingDistance();
    String owner();
    String BookedBy();
    int bookedDistance();
    Double perKMPrice();
    Double totalDue();

}
