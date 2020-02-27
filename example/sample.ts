import valid from "../src/index";

// Sample
const validate = valid({
  schema: {
    email: "isEmail:Invalid email",
    name: "hasMin:Invaild name:2",
    password: "isPassword:Invalid Password"
  },
  single: false
});

const validateSingle = valid({
  schema: "isPassword:Invalid Password",
  single: true
});

console.log(validate({ email: "sp@gm.io", password: "12gma@!DF" }));
console.log(validateSingle("12gma@!DF"));
