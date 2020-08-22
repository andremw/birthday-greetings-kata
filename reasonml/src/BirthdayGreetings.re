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
