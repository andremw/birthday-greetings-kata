import type { Person } from './types';

export type FilterByBirthdayPersons = (date: Date) => (persons: Person[]) => Person[];