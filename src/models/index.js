// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, QuizOptions, Quizes, Notes, Videos } = initSchema(schema);

export {
  UserProfile,
  QuizOptions,
  Quizes,
  Notes,
  Videos
};