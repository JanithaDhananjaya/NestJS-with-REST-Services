import { Injectable } from "@nestjs/common";
import { VehicleRepository } from "../repository/vehicle.repository";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";
import { Vehicle } from "../schemas/Vehicle.schema";

@Injectable()
export class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) {
  }

  async getAllVehicles(): Promise<Vehicle []> {
    return await this.vehicleRepository.findAll();
  }

  async createVehicle(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    return await this.vehicleRepository.create(vehicleCreateDto);
  }

}