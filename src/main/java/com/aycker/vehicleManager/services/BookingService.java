package com.aycker.vehicleManager.services;

import com.aycker.vehicleManager.Vehilcle.Vehicle;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingService {
    RentalService rentalService = RentalService.getInstance();
    @PutMapping("/bookCar")
    public Boolean bookCar(@RequestBody Vehicle vehicle){
        rentalService.addVehicles(vehicle);
        return true;
    }
    @GetMapping("/Vehicles")
    public List<Vehicle> getVehicles(){
        return rentalService.getAvailableVehicles();
    }
}
