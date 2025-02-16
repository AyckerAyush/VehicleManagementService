package com.aycker.vehicleManager.services;

import com.aycker.vehicleManager.model.Vehicle;
import com.aycker.vehicleManager.repo.VehicleRepo;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
public class VehicleAdditionService {
    @Autowired
    VehicleRepo vehicleRepo;
    public boolean addvehicle(Vehicle vehicle){
        try {
            vehicleRepo.save(vehicle);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }
    public List<Vehicle> getVehicles() {
        return vehicleRepo.findAll();
    }
    public Vehicle getVehicle(int id){
        return vehicleRepo.findById(id).get();
    }

    public boolean updateVehicle(Vehicle vehicle) {
        try {
            vehicleRepo.save(vehicle);
        }
        catch (Exception e){
            return false;
        }
        return true;
    }
}
