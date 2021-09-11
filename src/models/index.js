// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Videos } = initSchema(schema);

export {
  Note,
  Videos
};