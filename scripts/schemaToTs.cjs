/* eslint-disable no-console */

const path = require('path');
const { writeFile } = require('fs').promises;
const { compileFromFile } = require('json-schema-to-typescript');

const generateTypesForSchema = async () => {
  try {
    const typeDef = await compileFromFile(
      path.join('..', 'src', 'component-library.schema.json'),
      {
        enableConstEnums: true,
      },
    );

    await writeFile(path.join('..', 'src', 'types.ts'), typeDef);

    console.log(`✅ Generated types from component library JSON schema.`);
  } catch (e) {
    console.error(
      `❌ Failed to generate types types from component library JSON schema.`,
    );

    throw e;
  }
};

generateTypesForSchema().catch(console.error);
