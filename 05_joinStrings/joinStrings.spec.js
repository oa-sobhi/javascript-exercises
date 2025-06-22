const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Omar', () => {
    expect(values.firstName).toEqual('Omar');
  });
  test('lastName is Ahmed', () => {
    expect(values.lastName).toEqual('Ahmed');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1998', () => {
    expect(values.birthYear).toEqual(1998);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Omar Ahmed and I am 27 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Omar Ahmed', () => {
    expect(values.fullName).toEqual('Omar Ahmed');
  });
  test('age is 27', () => {
    expect(values.age).toEqual(27);
  });
});
