import { Employee } from '../src/types';
import {
  filterByBirthdayEmployees,
  sendBirthdayGreetings,
} from '../src/implementation';

describe('Birthday Greeting Kata', () => {
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
  ];

  it('filters list by the birthday employees', () => {
    const today = new Date(2020, 8, 15);

    const result = filterByBirthdayEmployees(today)(employees);

    expect(result).toEqual([employees[1], employees[3]]);
  });

  it('loads records and calls greet for the birthday employees', () => {
    const getEmployees = jest.fn(() => employees);
    const sendGreetings = jest.fn();
    const today = new Date(2020, 8, 15);

    sendBirthdayGreetings(getEmployees, sendGreetings)(today);

    expect(getEmployees).toHaveBeenCalledTimes(1);
    expect(sendGreetings).toHaveBeenNthCalledWith(1, employees[1]);
    expect(sendGreetings).toHaveBeenNthCalledWith(2, employees[3]);
  });
});
