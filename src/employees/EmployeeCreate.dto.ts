import { EmployeeStatus, EmployeeTier } from "./Employee.model";
import { IsNotEmpty, NotEquals } from "class-validator";

export class EmployeeCreateDto {
  id: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @NotEquals('CEO')
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}