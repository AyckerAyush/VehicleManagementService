package com.aycker.vehicleManager.Vehilcle;

import org.springframework.stereotype.Component;

@Component
public class Car extends Vehicle{
    @Override
    public Boolean isBooked() {
        return isBooked;
    }

    @Override
    public Double remainingDistance() {
        return remainingDistance;
    }

    @Override
    public String owner() {
        return owner;
    }

    @Override
    public String BookedBy() {
        return BookedBy;
    }

    @Override
    public int bookedDistance() {
        return bookedDistance;
    }

    @Override
    public Double perKMPrice() {
        return perKMPrice;
    }

    @Override
    public Double totalDue() {
        return remainingDistance*perKMPrice >= 0 ? 0: remainingDistance*perKMPrice * -1 ;
    }
}
