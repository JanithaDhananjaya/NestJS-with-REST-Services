import { EmployeeStatus, EmployeeTier } from "../Employee.enum";
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee{
  @Prop()
  id: string;
  @Prop({required: true})
  firstName: string;
  @Prop({required: true})
  lastName: string;
  @Prop()
  designation: string;
  @Prop()
  nearestCity: string;
  @Prop()
  tier: EmployeeTier;
  @Prop()
  status: EmployeeStatus;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);