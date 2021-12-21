// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClassStat, Videos, Quizes, QuizOptions, UserProfile, Notes } = initSchema(schema);

export {
  ClassStat,
  Videos,
  Quizes,
  QuizOptions,
  UserProfile,
  Notes
};