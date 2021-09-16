// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuizOptions, Quizes, Notes, Videos } = initSchema(schema);

export {
  QuizOptions,
  Quizes,
  Notes,
  Videos
};