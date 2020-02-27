const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const IP_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const CREDIT_CARD_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
const JWT_REGEX = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;
const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

// Is Validators
// This kinds of validators require actual value
export const isIP = (value: string) => IP_REGEX.test(value);
export const isUrl = (value: string) => URL_REGEX.test(value);
export const isEmail = (value: string) => EMAIL_REGEX.test(value);
export const isCreditCard = (value: string) => CREDIT_CARD_REGEX.test(value);
export const isPassword = (value: string) => PASSWORD_REGEX.test(value);
export const isPhoneNumber = (value: string) => PHONE_REGEX.test(value);
export const isJWT = (value: string) => JWT_REGEX.test(value);
export const isRequired = (value: any) => !isEmpty(value);
export const isEmpty = (value: any) => {
  if (
    (value && value.length < 1) ||
    value == null ||
    value == undefined ||
    value == "" ||
    (Object.keys(value).length === 0 && value.constructor === Object)
  )
    return true;

  return false;
};

// Has Validators
// This kinds of validators require actual value and a test value
export const hasMin = (value: string, test: any) =>
  value && value.length && value.length > test;
export const hasMax = (value: string, test: any) =>
  value && value.length && value.length < test;
