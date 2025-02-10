package com.aycker.vehicleManager.Vehilcle;

public abstract class Vehicle implements IVehicle{
    Boolean isBooked;
    Double remainingDistance;
    String owner;
    String BookedBy;
    int bookedDistance;
    Double perKMPrice;

    public Boolean getBooked() {
        return isBooked;
    }

    public void setBooked(Boolean booked) {
        isBooked = booked;
    }

    public Double getTotalDue() {
        return totalDue;
    }

    public void setTotalDue(Double totalDue) {
        this.totalDue = totalDue;
    }

    public Double getPerKMPrice() {
        return perKMPrice;
    }

    public void setPerKMPrice(Double perKMPrice) {
        this.perKMPrice = perKMPrice;
    }

    public int getBookedDistance() {
        return bookedDistance;
    }

    public void setBookedDistance(int bookedDistance) {
        this.bookedDistance = bookedDistance;
    }

    public String getBookedBy() {
        return BookedBy;
    }

    public void setBookedBy(String bookedBy) {
        BookedBy = bookedBy;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Double getRemainingDistance() {
        return remainingDistance;
    }

    public void setRemainingDistance(Double remainingDistance) {
        this.remainingDistance = remainingDistance;
    }

    Double totalDue;
}
