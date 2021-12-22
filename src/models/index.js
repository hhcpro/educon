// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const QType = {
  "SINGLE": "SINGLE",
  "MULTIPLE": "MULTIPLE"
};

const { MQCorrectList, MQCorrectAnswer, MQAnswer, MQuizAsnersList, ClassStat, Videos, Quizes, QuizOptions, UserProfile, Notes } = initSchema(schema);

export {
  MQCorrectList,
  MQCorrectAnswer,
  MQAnswer,
  MQuizAsnersList,
  ClassStat,
  Videos,
  Quizes,
  QuizOptions,
  UserProfile,
  Notes,
  QType
};