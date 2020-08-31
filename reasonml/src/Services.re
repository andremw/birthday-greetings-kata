open Types;

let sendGreetings = (employee: employee) => {
  Js.Promise.resolve(
    Js.log(
      {j|
      Subject: Happy birthday!

      Happy birthday, dear $employee.email!
    |j},
    ),
  );
};
