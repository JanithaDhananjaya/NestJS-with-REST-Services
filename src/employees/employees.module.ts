import { Module } from "@nestjs/common";
import { EmployeesController } from "./controller/employees.controller";
import { EmployeesService } from "./service/employees.service";
import { EmployeesRepository } from "./repository/employees.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "./schemas/Employee.schema";
import { Vehicle, VehicleSchema } from "./schemas/Vehicle.schema";
import { VehicleController } from "./controller/vehicle.controller";
import { VehicleService } from "./service/vehicle.service";
import { VehicleRepository } from "./repository/vehicle.repository";

@Module({
  imports: [MongooseModule.forFeature([
    { name: Employee.name, schema: EmployeeSchema },
    { name: Vehicle.name, schema: VehicleSchema }
  ])],
  controllers: [EmployeesController, VehicleController],
  providers: [EmployeesService, EmployeesRepository, VehicleService, VehicleRepository]
})
export class EmployeesModule {
}
