# Valid

## Valid Schema Structure

### Schema Rule

- Test Case: `"case:message:test"`
- You can use a "|" to add more Test Case to schema
- eg. `"isRequired:Field is required|hasMin:Field is greater than two:2"`

### Sample Schema

```
const schema = {
    email: "isEmail:Invalid email",
    name: "hasMin:Is greater than 2 charaters:2|hasMax:Is lesser than 30 charaters:30"
}

```

## gValid Usage

```
import valid from "valid";

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

```
