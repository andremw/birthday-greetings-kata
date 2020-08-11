import type { FilterByBirthdayPersons } from './functions';

const isBirthday = (today: Date, birthdate: Date) =>
  birthdate.getMonth() === today.getMonth() && birthdate.getDate() === today.getDate();

export const filterByBirthdayPersons: FilterByBirthdayPersons = (today) => (persons) =>
  persons.filter(person => isBirthday(today, person.dateOfBirth));
