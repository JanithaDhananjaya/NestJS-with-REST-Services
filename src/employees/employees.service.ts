import { Injectable, NotFoundException } from "@nestjs/common";
import { Employee, EmployeeStatus, EmployeeTier } from "./Employee.model";
import { v1 as uuid } from "uuid";
import { EmployeeSearchDto } from "./EmployeeSearch.dto";
import { EmployeeUpdateDto } from "./EmployeeUpdate.dto";
import { EmployeeCreateDto } from "./EmployeeCreate.dto";

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(employeeCreateDto: EmployeeCreateDto) {
    const {firstName, lastName, designation, nearestCity, status, tier} = employeeCreateDto;

    const employee = {
      id: uuid(),
      firstName,
      lastName,
      designation,
      nearestCity,
      tier,
      status: EmployeeStatus.ACTIVE
    };

    this.employees.push(employee);
    return employee;
  }

  employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    const { status, name } = employeeSearchDto;
    let employees = this.getAllEmployees();
    if (status) {
      employees = employees.filter((employee) => employee.status === status);
    }
    if (name) {
      employees = employees.filter(
        (employee) =>
          employee.firstName.includes(name) || employee.lastName.includes(name)
      );
    }

    return employees;
  }

  getEmployeeById(id: string) {
    const employees = this.getAllEmployees();
    let employee = employees.find(employee => employee.id === id);
    if (!employee){
      throw new NotFoundException(`${id} is does not exist`)
    }
    return employee;
  }

  updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {
    const { id, city } = employeeUpdateDto;

    let employeeById = this.getEmployeeById(id);
    employeeById.nearestCity = city;
    return employeeById;

  }

  deleteEmployee(id: string) : boolean {
    let employees = this.getAllEmployees();
    this.employees = employees.filter(employee => employee.id !== id);
    return (employees.length != this.employees.length);
  }
}
