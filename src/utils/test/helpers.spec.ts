import {
  allAretrue,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase,
} from '@utils/helpers';

const validData = {
  password: '!P4ssword_',
};

const invalidData = {
  password: 'pass',
};

const testValidData = [
  {value: 'Minimum 8 characters', condition: validData?.password.length >= 8},
  {value: 'At least 1 number (1-9)', condition: hasNumber(validData.password)},
  {
    value: 'At least 1 special character (!@#&*_%?)',
    condition: hasNumber(validData.password),
  },
  {
    value: 'At least 1 uppercase character',
    condition: hasUppercase(validData.password),
  },
];

const testInvalidData = [
  {value: 'Minimum 8 characters', condition: invalidData?.password.length >= 8},
];

describe('Utils test suite', () => {
  it('returns true when all conditions are met', () => {
    const result = allAretrue(testValidData);
    expect(result).toBeTruthy();
  });

  it('returns false when conditions are not met', () => {
    const result = allAretrue(testInvalidData);
    expect(result).toBeFalsy();
  });

  it('returns true if regex pattern is valid', () => {
    const result = hasSpecialCharacter(validData.password);
    expect(result).toBeTruthy();
  });

  it('returns false if regex patter is invalid', () => {
    const result = hasSpecialCharacter(invalidData.password);
    expect(result).toBeFalsy();
  });

  it('returns true if string values contains a number', () => {
    const result = hasNumber(validData.password);
    expect(result).toBeTruthy();
  });

  it('returns true if string values contains no number', () => {
    const result = hasNumber(invalidData.password);
    expect(result).toBeFalsy();
  });

  it('returns true if string values contains uppercase character', () => {
    const result = hasUppercase(validData.password);
    expect(result).toBeTruthy();
  });

  it('returns true if string values contains no uppercase character', () => {
    const result = hasUppercase(invalidData.password);
    expect(result).toBeFalsy();
  });
});
