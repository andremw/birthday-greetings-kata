import type { Employee } from './types';

type GetEmployees = () => Employee[];
type SendGreetings = (employee: Employee) => void;
export type SendBirthdayGreetings =
  (getEmployees: GetEmployees, sendGreetings: SendGreetings) => (date: Date) => void;
