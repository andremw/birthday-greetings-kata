import { Employee, EmployeeDTO } from '../src/types';
import {
  filterByBirthdayEmployees,
  sendBirthdayGreetings,
  toEmployee,
  parseDTOString,
} from '../src/implementation';

describe('Birthday Greeting Kata', () => {
  const leapYearEmployee: Employee = {
    dateOfBirth: new Date(2000, 1, 29),
    email: 'different@yep.com',
    firstName: 'Im',
    lastName: 'Different',
  };
  const employees: Employee[] = [
    {
      firstName: 'Zé',
      lastName: 'Mané',
      email: 'ze@mane.com',
      dateOfBirth: new Date(1990, 7, 10),
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      dateOfBirth: new Date(1995, 8, 15),
    },
    {
      firstName: 'Lero',
      lastName: 'Lero',
      email: 'lero@lero.com',
      dateOfBirth: new Date(1966, 2, 3),
    },
    {
      firstName: 'Young',
      lastName: 'Child',
      email: 'young@child.com',
      dateOfBirth: new Date(2001, 8, 15),
    },
    leapYearEmployee,
  ];

  it('filters list by the birthday employees', () => {
    const today = new Date(2020, 8, 15);

    const result = filterByBirthdayEmployees(today)(employees);

    expect(result).toEqual([employees[1], employees[3]]);
  });

  it('loads records and calls greet for the birthday employees', async () => {
    const getEmployees = jest.fn(async () => employees);
    const sendGreetings = jest.fn();
    const today = new Date(2020, 8, 15);

    await sendBirthdayGreetings(getEmployees, sendGreetings)(today);

    expect(getEmployees).toHaveBeenCalledTimes(1);
    expect(sendGreetings).toHaveBeenNthCalledWith(1, employees[1]);
    expect(sendGreetings).toHaveBeenNthCalledWith(2, employees[3]);
  });

  it('for people that were born on February 29th, sends greetings on February 28th', async () => {
    const getEmployees = jest.fn(async () => [leapYearEmployee]);
    const sendGreetings = jest.fn();

    const today = new Date(2019, 1, 28);

    await sendBirthdayGreetings(getEmployees, sendGreetings)(today);
    expect(sendGreetings).toHaveBeenCalledWith(leapYearEmployee);
  });

  it('on leap years, does not send greetings on February 28th for employees born on February 29th', async () => {
    const getEmployees = jest.fn(async () => [leapYearEmployee]);
    const sendGreetings = jest.fn();

    const today = new Date(2020, 1, 28);

    await sendBirthdayGreetings(getEmployees, sendGreetings)(today);
    expect(sendGreetings).not.toHaveBeenCalledWith(leapYearEmployee);
  });

  it('on leap years, sends greetings for birthday employees on February 29th', async () => {
    const getEmployees = jest.fn(async () => [leapYearEmployee]);
    const sendGreetings = jest.fn();

    const today = new Date(2020, 1, 29);

    await sendBirthdayGreetings(getEmployees, sendGreetings)(today);
    expect(sendGreetings).toHaveBeenCalledWith(leapYearEmployee);
  });

  it('converts an EmployeeDTO to an Employee', () => {
    const employeeDTO: EmployeeDTO = {
      first_name: 'Donald',
      last_name: 'Duck',
      email: 'donald.duck@foobar.com',
      date_of_birth: '1934/05/13',
    };

    const employee = toEmployee(employeeDTO);

    expect(employee).toEqual({
      firstName: 'Donald',
      lastName: 'Duck',
      email: 'donald.duck@foobar.com',
      dateOfBirth: new Date(1934, 4, 13),
    });
  });

  it('converts a string to an EmployeeDTO', () => {
    const string = 'Duck, Donald, 1934/05/13, donald.duck@foobar.com';

    const dto = parseDTOString(string);

    expect(dto).toEqual({
      first_name: 'Donald',
      last_name: 'Duck',
      email: 'donald.duck@foobar.com',
      date_of_birth: '1934/05/13',
    });
  });
});
