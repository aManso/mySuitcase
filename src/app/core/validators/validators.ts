import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// The passwordValidator factory returns the configured validator function.
// That function takes an Angular control object and returns either null if the control value is valid or a validation error object.
// The validation error object typically has a property whose name is the validation key, 'forbiddenName',
// and whose value is an arbitrary dictionary of values that you could insert into an error message, {password}.

// Password matching expression.
// Password must be at least 6 characters, no more than 20 characters, and must include at least one upper case letter,
// one lower case letter, one numeric digit and one special character.
// const passwordRegExp: RegExp = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['+ allowedSpecialChars +']).{6,20}$');
const passwordRegExp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!#$%{}()*+,.:;|?@_])[A-Za-z\d-!#$%{}()*+,.:;|?@_]{6,20}$/;
export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const allowed = passwordRegExp.test(control.value);
    return allowed ? null : {'forbiddenPassword': {value: control.value}};
  };
}

// The passwordMatchingValidator is a cross-validation function to check that the formControl 'password' of a formGroup and
// its confirmation formControl 'passwordConfinmation' matches.
// It returns null if both matches, making the formGroup valid, or add a field 'notMatchingPasswords' that is added as error
export const passwordMatchingValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');

  return password && passwordConfirmation && password.value !== passwordConfirmation.value ? { 'notMatchingPasswords': true } : null;
};
