import { Employee, EmployeeDTO } from './types';

type GetEmployees = () => Promise<Employee[]>;
type SendGreetings = (employee: Employee) => Promise<unknown>;
export type SendBirthdayGreetings = (
  getEmployees: GetEmployees,
  sendGreetings: SendGreetings
) => (date: Date) => Promise<unknown>;

export type ToEmployee = (employeeDTO: EmployeeDTO) => Employee;
export type ParseDTOString = (line: string) => EmployeeDTO;
