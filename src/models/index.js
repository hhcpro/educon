// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notes, Videos } = initSchema(schema);

export {
  Notes,
  Videos
};