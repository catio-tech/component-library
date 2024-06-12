import Ajv from 'ajv';
import schema from '../relationship-library.schema.json';
import { relationshipLibrary } from '../__examples__';

const ajv = new Ajv();

// Make sure the schema itself is valid
it('should be a valid JSON Schema', () => {
  expect(ajv.validateSchema(schema)).toBe(true);
});

// Create validation function
const validate = ajv.compile(schema);

it(`should validate object "relationshipLibrary"`, () => {
  const result = validate(relationshipLibrary);

  if (validate.errors) {
    throw new Error(
      `Validation error in relationshipLibrary:\n\n${JSON.stringify(validate.errors, null, 2)}`
    );
  }

  expect(result).toBe(true);
});
