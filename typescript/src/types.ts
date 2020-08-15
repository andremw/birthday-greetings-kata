export type Employee = {
  firstName: string; // TODO: refactor later to a constrained type and add validation
  lastName: string; // TODO: refactor later to a constrained type and add validation
  dateOfBirth: Date;
  email: string; // TODO: refactor later to a constrained type and add validation
};

export type EmployeeDTO = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
};
