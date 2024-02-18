import { Employee } from "../schemas/Employee.schema";

export class VehicleCreateDto {
  id: string;
  make: string;
  model: string;
  vin: string;
  employee: string;
}