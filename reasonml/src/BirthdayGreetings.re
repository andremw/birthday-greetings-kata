open Types;
open Functions;

let sendGreetings = email => {
  switch (email) {
  | Ok(email) => Js.log("Hey, " ++ Email.value(email))
  | Error(Email.EmptyString) => Js.log("Empty String!")
  | Error(Email.InvalidEmail) => Js.log("Invalid Email!")
  };
};

let emailEmpty = Email.create("");
let emailFail = Email.create("lero");
let emailOk = Email.create("lero@lero.com");

sendGreetings(emailEmpty);
sendGreetings(emailFail);
sendGreetings(emailOk);
