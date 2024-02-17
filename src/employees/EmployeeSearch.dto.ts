import { EmployeeStatus } from './Employee.model';
import { IsIn } from "class-validator";

export class EmployeeSearchDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}
