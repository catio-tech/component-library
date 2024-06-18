import componentLibraryJsonSchema from './component-library.schema.json' assert { type: 'json' };
import { componentLibrary } from './__examples__/index.js';

import relationshipLibraryJsonSchema from './relationship-library.schema.json' assert { type: 'json' };
import { relationshipLibrary } from './__examples__/index.js';

export {
  componentLibraryJsonSchema,
  componentLibrary,
  relationshipLibraryJsonSchema,
  relationshipLibrary,
};
export * from './types.js';
export * from './relationship-types.js';
