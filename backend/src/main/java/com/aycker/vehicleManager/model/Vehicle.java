package com.aycker.vehicleManager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.stereotype.Component;

@Entity
@Component
@Data
public abstract class Vehicle implements IVehicle{
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
}
