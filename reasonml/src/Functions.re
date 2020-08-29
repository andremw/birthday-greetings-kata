open Types;

type getEmployees = unit => Js.Promise.t(list(employee));
type sendGreetings = employee => Js.Promise.t(unit);

type sendBirthdayGreetings =
  (getEmployees, sendGreetings, Js.Date.t) => Js.Promise.t(unit);
type parseDTOString = string => employeeDTO;
