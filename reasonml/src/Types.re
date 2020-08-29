module type Email = {
  type t;
  type error =
    | EmptyString
    | InvalidEmail;
  let create: string => result(t, error);
  let value: t => string;
};

module Email: Email = {
  type t = string;
  type error =
    | EmptyString
    | InvalidEmail;

  let create = str =>
    if (str == "") {
      Error(EmptyString);
    } else if (!Js.String2.includes(str, "@")) {
      Error(InvalidEmail);
    } else {
      Ok(str);
    };

  let value = str => str;
};

type employee = {
  firstName: string,
  lastName: string,
  dateOfBirth: Js.Date.t,
  email: Email.t,
};

type employeeDTO = {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  email: string,
};
