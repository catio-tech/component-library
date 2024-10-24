import Ajv from 'ajv';
import schema from '../component-library.schema.json';
import { componentLibrary } from '../__examples__';

const ajv = new Ajv();

// Make sure the schema itself is valid
it('should be a valid JSON Schema', () => {
  expect(ajv.validateSchema(schema)).toBe(true);
});

// Create validation function
const validate = ajv.compile(schema);

it(`should validate object "componentLibrary"`, () => {
  const result = validate(componentLibrary);

  if (validate.errors) {
    throw new Error(
      `Validation error in componentLibrary:\n\n${JSON.stringify(validate.errors, null, 2)}`
    );
  }

  expect(result).toBe(true);
});
