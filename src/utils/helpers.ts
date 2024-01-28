/* eslint-disable no-useless-escape */
type passwordCondition = {
  value: string;
  condition: boolean;
};

function allAretrue(arr: passwordCondition[]) {
  return arr.every(value => value.condition === true);
}

function hasUppercase(value: string) {
  return /[A-Z]/.test(value);
}

function hasNumber(value: string): boolean {
  return /[0-9]/.test(value);
}

function hasSpecialCharacter(value: string) {
  const regX = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  return regX.test(value);
}

export {allAretrue, hasUppercase, hasNumber, hasSpecialCharacter};
export type {passwordCondition};
