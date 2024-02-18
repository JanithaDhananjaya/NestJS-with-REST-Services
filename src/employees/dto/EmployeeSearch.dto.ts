import { EmployeeStatus } from '../Employee.enum';
import { IsIn } from "class-validator";

export class EmployeeSearchDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}
