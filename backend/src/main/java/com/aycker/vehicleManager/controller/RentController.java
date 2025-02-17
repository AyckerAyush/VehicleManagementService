package com.aycker.vehicleManager.controller;

import com.aycker.vehicleManager.model.Vehicle;
import com.aycker.vehicleManager.services.VehicleAdditionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(value = "http://localhost:5173/")
public class RentController {
    @Autowired
    VehicleAdditionService vehicleAdditionService;

     @GetMapping("/vehicles")
    public List<Vehicle> getVehicles(){
         return vehicleAdditionService.getVehicles();
     }
     @GetMapping("/vehicle/{id}")
    public Vehicle getVehicle(@PathVariable int id){
         return vehicleAdditionService.getVehicle(id);
     }
     @PostMapping("/vehicle")
    public boolean addVehicle(@RequestBody Vehicle vehicle){
         return  vehicleAdditionService.addvehicle(vehicle);
     }
     @PutMapping("/vehicle")
    public boolean updateVehicle(@RequestBody Vehicle vehicle){
         return vehicleAdditionService.updateVehicle(vehicle);
     }

}
