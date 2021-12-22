import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum QType {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE"
}



type MQCorrectListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MQCorrectAnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MQAnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MQuizAsnersListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassStatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizOptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MQCorrectList {
  readonly id: string;
  readonly MQCorrectAnswers?: (MQCorrectAnswer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MQCorrectList, MQCorrectListMetaData>);
  static copyOf(source: MQCorrectList, mutator: (draft: MutableModel<MQCorrectList, MQCorrectListMetaData>) => MutableModel<MQCorrectList, MQCorrectListMetaData> | void): MQCorrectList;
}

export declare class MQCorrectAnswer {
  readonly id: string;
  readonly Aindex?: number;
  readonly mqcorrectlistID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MQCorrectAnswer, MQCorrectAnswerMetaData>);
  static copyOf(source: MQCorrectAnswer, mutator: (draft: MutableModel<MQCorrectAnswer, MQCorrectAnswerMetaData>) => MutableModel<MQCorrectAnswer, MQCorrectAnswerMetaData> | void): MQCorrectAnswer;
}

export declare class MQAnswer {
  readonly id: string;
  readonly Answer?: string;
  readonly mquizasnerslistID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MQAnswer, MQAnswerMetaData>);
  static copyOf(source: MQAnswer, mutator: (draft: MutableModel<MQAnswer, MQAnswerMetaData>) => MutableModel<MQAnswer, MQAnswerMetaData> | void): MQAnswer;
}

export declare class MQuizAsnersList {
  readonly id: string;
  readonly untitledfield?: string;
  readonly MQAnswers?: (MQAnswer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MQuizAsnersList, MQuizAsnersListMetaData>);
  static copyOf(source: MQuizAsnersList, mutator: (draft: MutableModel<MQuizAsnersList, MQuizAsnersListMetaData>) => MutableModel<MQuizAsnersList, MQuizAsnersListMetaData> | void): MQuizAsnersList;
}

export declare class ClassStat {
  readonly id: string;
  readonly Videos?: Videos;
  readonly userprofileID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ClassStat, ClassStatMetaData>);
  static copyOf(source: ClassStat, mutator: (draft: MutableModel<ClassStat, ClassStatMetaData>) => MutableModel<ClassStat, ClassStatMetaData> | void): ClassStat;
}

export declare class Videos {
  readonly id: string;
  readonly filename?: string;
  readonly category?: string;
  readonly Quizes?: (Quizes | null)[];
  readonly URL?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}

export declare class Quizes {
  readonly id: string;
  readonly Question?: string;
  readonly QuizOptions?: QuizOptions;
  readonly complexity?: string;
  readonly videosID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Quizes, QuizesMetaData>);
  static copyOf(source: Quizes, mutator: (draft: MutableModel<Quizes, QuizesMetaData>) => MutableModel<Quizes, QuizesMetaData> | void): Quizes;
}

export declare class QuizOptions {
  readonly id: string;
  readonly Opt1?: string;
  readonly Opt2?: string;
  readonly Opt3?: string;
  readonly Opt4?: string;
  readonly Answer?: number;
  readonly qtype?: QType | keyof typeof QType;
  readonly MQCorrectList?: MQCorrectList;
  readonly MQuizAsnersList?: MQuizAsnersList;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<QuizOptions, QuizOptionsMetaData>);
  static copyOf(source: QuizOptions, mutator: (draft: MutableModel<QuizOptions, QuizOptionsMetaData>) => MutableModel<QuizOptions, QuizOptionsMetaData> | void): QuizOptions;
}

export declare class UserProfile {
  readonly id: string;
  readonly user_name?: string;
  readonly user_email?: string;
  readonly top_score?: string;
  readonly last_class?: string;
  readonly ClassStats?: (ClassStat | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

export declare class Notes {
  readonly id: string;
  readonly content?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notes, NotesMetaData>);
  static copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}