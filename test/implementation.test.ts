import { filterByBirthdayPersons } from '../src/implementation';
import type { Person } from '../src/types';

describe('Birthday Greeting Kata', () => {
  it('filters list by the birthday persons', () => {
    const persons: Person[] = [
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
      }
    ];

    const today = new Date(2020, 8, 15);

    const result = filterByBirthdayPersons(today)(persons);

    expect(result).toEqual([{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        dateOfBirth: new Date(1995, 8, 15),
      }]);
  });
});
