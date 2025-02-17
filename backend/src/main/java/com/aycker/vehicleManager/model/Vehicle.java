package com.aycker.vehicleManager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle implements IVehicle{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Boolean isBooked;
    private Double remainingDistance;
    private String owner;
    private String BookedBy;
    private int bookedDistance;
    private Double perKMPrice;

    Double totalDue;

    @Override
    public Boolean isBooked() {
        return null;
    }

    @Override
    public Double remainingDistance() {
        return 0.0;
    }

    @Override
    public String owner() {
        return "";
    }

    @Override
    public String BookedBy() {
        return "";
    }

    @Override
    public int bookedDistance() {
        return 0;
    }

    @Override
    public Double perKMPrice() {
        return 0.0;
    }

    @Override
    public Double totalDue() {
        return 0.0;
    }
}
