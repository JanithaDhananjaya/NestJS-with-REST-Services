import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "../schemas/Employee.schema";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";

@Injectable()
export class EmployeesRepository {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {
  }

  async create(createEmployeeDto: EmployeeCreateDto): Promise<Employee> {
    let newEmployee = new this.employeeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee []> {
    return this.employeeModel.find();
  }

}