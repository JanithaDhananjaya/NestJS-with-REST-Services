import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UsePipes, ValidationPipe
} from "@nestjs/common";
import { EmployeesService } from "../service/employees.service";
import { EmployeeTier } from "../Employee.enum";
import { EmployeeSearchDto } from "../dto/EmployeeSearch.dto";
import { EmployeeUpdateDto } from "../dto/EmployeeUpdate.dto";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";
import { EmployeeTierValidationPipe } from "../validations/employee-tier-validation.pipe";
import { Messages } from "../../Messages.data";
import { Employee } from "../schemas/Employee.schema";

@Controller("employees")
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {
  }

  @Get()
  @UsePipes(ValidationPipe)
  // async getAllEmployees(@Query() param: EmployeeSearchDto): Promise<Employee []> {
  async getAllEmployees(): Promise<Employee []> {
    // if (Object.keys(param).length) {
    //   return this.employeeService.employeeSearch(param);
    // } else {
    //   return this.employeeService.getAllEmployees();
    // }
    return await this.employeeService.getAllEmployees();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(new EmployeeTierValidationPipe())
  createEmployee(@Body() employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
    return this.employeeService.createEmployee(employeeCreateDto);
  }

  // @Get("/:id")
  // getEmployeeById(@Param("id") id: string) {
  //   return this.employeeService.getEmployeeById(id);
  // }
  //
  // @Put("/:id/city")
  // updateEmployee(@Param("id") id: string, @Body() employeeUpdateDto: EmployeeUpdateDto) {
  //   employeeUpdateDto.id = id;
  //   return this.employeeService.updateEmployee(employeeUpdateDto);
  // }
  //
  // @Delete("/:id")
  // @HttpCode(204)
  // deleteEmployee(@Param("id") id: string) {
  //   if (!this.employeeService.deleteEmployee(id)) {
  //     throw new NotFoundException(Messages.EMPLOYEE_NOT_EXISTS);
  //   }
  // }

}
