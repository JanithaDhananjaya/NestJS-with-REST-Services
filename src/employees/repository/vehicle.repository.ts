import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Vehicle, VehicleDocument } from "../schemas/Vehicle.schema";
import { Model } from "mongoose";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";

@Injectable()
export class VehicleRepository {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>) {
  }

  async create(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    let newVehicle = new this.vehicleModel(vehicleCreateDto);
    return await newVehicle.save();
  }

  async findAll(): Promise<Vehicle[]>{
    return this.vehicleModel.find().populate('employee');
  }

}