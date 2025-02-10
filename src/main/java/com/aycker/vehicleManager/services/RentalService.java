package com.aycker.vehicleManager.services;

import com.aycker.vehicleManager.Vehilcle.IVehicle;
import com.aycker.vehicleManager.Vehilcle.Vehicle;

import java.util.List;

public class RentalService {
    List<Vehicle> vehicles;
    static RentalService rentalService = null;
    private RentalService(){

    }
    public static RentalService getInstance(){
        if(rentalService == null)
            return new RentalService();
        else return rentalService;
    }
    public void addVehicles(Vehicle vehicle){
        vehicles.add(vehicle);
    }
    List<Vehicle> getAvailableVehicles(){
        return vehicles.stream().filter(IVehicle::isBooked).toList();
    }
}
