package com.aycker.vehicleManager.Dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class VehicleDto {
    private int id;
    private Boolean isBooked;
    private Double remainingDistance;
    private String owner;
    private String BookedBy;
    private int bookedDistance;
    private Double perKMPrice;

    Double totalDue;
}
