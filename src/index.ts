import * as validator from "./validator";

import { Config, Result, SingleResult } from "./types";
import { vError } from "./error";

/**
 * Validator Schema
 * Test Case: "case:message:test"
 * You can use a "|" to add more Test Case to schema
 * eg. "isRequired:Field is required|hasMin:Field is greater than two:2"
 *
 * Sample Schema: {
 *  email: "isEmail:Invalid email",
 *  name: "hasMin:Is greater than 2 charaters:2|hasMax:Is lesser than 30 charaters:30"
 * }
 *
 * @param param0
 */
export default function valid({ schema, single }: Config) {
  if (single && typeof schema == "object")
    return (v: any): Result => vError.badSchemaTypeObject;

  if (!single && typeof schema == "string")
    return (v: any): Result => vError.badSchemaTypeString;

  if (single) return value => validateSingle(schema, value);

  return value => validateMultiple(schema, value);
}

// Multiple
export function validateMultiple(schema: any, value: any): Result {
  const errors = {};
  for (let item in schema) {
    const { error } = validateSingle(schema[item], value[item]);
    if (error && error.length) errors[item] = error;
  }
  return { errors, valid: validator.isEmpty(errors) };
}

// Single
export function validateSingle(schema, value): SingleResult {
  let error = null;

  schema.split("|").forEach(op => {
    const [testCase, message, test] = op.split(":");
    if (test) {
      if (!validator[testCase](value, test)) error = message;
    } else {
      if (!validator[testCase](value)) error = message;
    }
  });

  return { error, valid: validator.isEmpty(error) };
}
