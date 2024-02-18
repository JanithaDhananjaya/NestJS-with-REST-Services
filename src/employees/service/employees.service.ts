import { Injectable, NotFoundException } from "@nestjs/common";
import { EmployeeStatus, EmployeeTier } from "../Employee.enum";
import { v1 as uuid } from "uuid";
import { EmployeeSearchDto } from "../dto/EmployeeSearch.dto";
import { EmployeeUpdateDto } from "../dto/EmployeeUpdate.dto";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { Employee } from "../schemas/Employee.schema";
import { EmployeesRepository } from "../repository/employees.repository";

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeesRepository) {
  }

 async getAllEmployees(): Promise<Employee[] > {
    return await this.employeeRepository.findAll();
  }

  async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
    return await this.employeeRepository.create(employeeCreateDto);
  }

  // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
  //   const { status, name } = employeeSearchDto;
  //   let employees = this.getAllEmployees();
  //   if (status) {
  //     employees = employees.filter((employee) => employee.status === status);
  //   }
  //   if (name) {
  //     employees = employees.filter(
  //       (employee) =>
  //         employee.firstName.includes(name) || employee.lastName.includes(name)
  //     );
  //   }
  //
  //   return employees;
  // }

  // getEmployeeById(id: string) {
  //   const employees = this.getAllEmployees();
  //   let employee = employees.find(employee => employee.id === id);
  //   if (!employee){
  //     throw new NotFoundException(`${id} is does not exist`)
  //   }
  //   return employee;
  // }

  // updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {
  //   const { id, city } = employeeUpdateDto;
  //
  //   let employeeById = this.getEmployeeById(id);
  //   employeeById.nearestCity = city;
  //   return employeeById;
  //
  // }

  // deleteEmployee(id: string) : boolean {
  //   let employees = this.getAllEmployees();
  //   this.employees = employees.filter(employee => employee.id !== id);
  //   return (employees.length != this.employees.length);
  // }
}
