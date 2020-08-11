import { SendBirthdayGreetings } from './functions';
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
  filterByBirthdayEmployees(date)(getEmployees()).map(employee =>
    sendGreetings(employee)
  );
};
