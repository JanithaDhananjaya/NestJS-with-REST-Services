import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehicleService } from "../service/vehicle.service";
import { Vehicle } from "../schemas/Vehicle.schema";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";

@Controller("vehicles")
export class VehicleController {
  constructor(private vehicleService: VehicleService) {
  }

  @Get()
  async getAllVehicles(): Promise<Vehicle[]> {
    return await this.vehicleService.getAllVehicles();
  }

  @Post()
  async createVehicle(@Body() vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    return await this.vehicleService.createVehicle(vehicleCreateDto);
  }

}