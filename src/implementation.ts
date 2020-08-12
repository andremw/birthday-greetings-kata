import { SendBirthdayGreetings, ToEmployee, ParseDTOString } from './functions';
import { Employee } from 'types';

const isBirthday = (today: Date, birthdate: Date) =>
  birthdate.getMonth() === today.getMonth() &&
  birthdate.getDate() === today.getDate();

export const filterByBirthdayEmployees = (today: Date) => (
  employees: Employee[]
) => employees.filter(employee => isBirthday(today, employee.dateOfBirth));

export const sendBirthdayGreetings: SendBirthdayGreetings = (
  getEmployees,
  sendGreetings
) => (date: Date) => {
  return getEmployees()
    .then(filterByBirthdayEmployees(date))
    .then(employees =>
      Promise.all(employees.map(employee => sendGreetings(employee)))
    );
};

export const toEmployee: ToEmployee = employeeDTO => ({
  firstName: employeeDTO.first_name,
  lastName: employeeDTO.last_name,
  dateOfBirth: new Date(employeeDTO.date_of_birth),
  email: employeeDTO.email,
});

export const parseDTOString: ParseDTOString = string => {
  const [last_name, first_name, date_of_birth, email] = string.split(', ');
  return {
    last_name,
    first_name,
    date_of_birth,
    email,
  };
};
