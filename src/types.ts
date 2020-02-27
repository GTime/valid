export interface Config {
  schema: any;
  single?: Boolean;
}

export interface Result {
  errors: any;
  valid: Boolean;
}

export interface SingleResult {
  error: any;
  valid: Boolean;
}
