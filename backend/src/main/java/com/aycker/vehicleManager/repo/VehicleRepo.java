package com.aycker.vehicleManager.repo;

import com.aycker.vehicleManager.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle,Integer> {
}
