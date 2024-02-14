import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  private employees = [];

  getAllEmployees() {
    return this.employees;
  }
}
