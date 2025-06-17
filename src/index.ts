import componentLibraryJsonSchema from './component-library.schema.json' assert { type: 'json' };
import { componentLibrary as untypedComponentLibrary } from './__examples__/index.js';
import { categoryLibrary } from './__examples__/index.js';
import relationshipLibraryJsonSchema from './relationship-library.schema.json' assert { type: 'json' };
import { relationshipLibrary } from './__examples__/index.js';
import { ComponentLibrary } from './types.js';

const componentLibrary = untypedComponentLibrary as ComponentLibrary;
const componentKeys = Object.keys(componentLibrary).sort();

export {
  componentLibraryJsonSchema,
  componentLibrary,
  componentKeys,
  categoryLibrary,
  relationshipLibraryJsonSchema,
  relationshipLibrary,
};
export * from './types.js';
export * from './relationship-types.js';
