// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function create(str) {
  if (str === "") {
    return {
            TAG: /* Error */1,
            _0: /* EmptyString */0
          };
  } else if (str.includes("@")) {
    return {
            TAG: /* Ok */0,
            _0: str
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: /* InvalidEmail */1
          };
  }
}

function value(str) {
  return str;
}

var Email = {
  create: create,
  value: value
};

exports.Email = Email;
/* No side effect */
