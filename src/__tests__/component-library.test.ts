import Ajv from 'ajv';
import schema from '../component-library.schema.json';
import * as blobs from '../__examples__';

const ajv = new Ajv();

// Make sure the schema itself is valid
it('should be a valid JSON Schema', () => {
  expect(ajv.validateSchema(schema)).toBe(true);
});

// Create validation function
const validate = ajv.compile(schema);

Object.entries(blobs).forEach(([name, object]) => {
  it(`should validate object "${name}"`, () => {
    const result = validate(object);

    if (validate.errors) {
      throw new Error(
        `Validation error in ${name}:\n\n${JSON.stringify(validate.errors, null, 2)}`
      );
    }

    expect(result).toBe(true);
  });
});
