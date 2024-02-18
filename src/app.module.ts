import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { MONGO_CONNECTION } from "./application.properties";

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule {}
