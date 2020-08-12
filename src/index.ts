import { readFileLines } from './services';
import { EmployeeDTO } from './types';
import { sendBirthdayGreetings, toEmployee } from './implementation';

const today = new Date(2020, 8, 11);

const employeesFile = 'employee_records.txt';

const toEmployeeList = (employeeList: EmployeeDTO[]) =>
  employeeList.map(toEmployee);

const getEmployees = () => readFileLines(employeesFile).then(toEmployeeList);

const sendGreetings = (data: any) => {
  console.log('sending greetings to ', data);
};

sendBirthdayGreetings(getEmployees, sendGreetings as any)(today);
