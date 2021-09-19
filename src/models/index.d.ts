import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuizOptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class QuizOptions {
  readonly id: string;
  readonly Opt1?: string;
  readonly Opt2?: string;
  readonly Opt3?: string;
  readonly Opt4?: string;
  readonly Answer?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<QuizOptions, QuizOptionsMetaData>);
  static copyOf(source: QuizOptions, mutator: (draft: MutableModel<QuizOptions, QuizOptionsMetaData>) => MutableModel<QuizOptions, QuizOptionsMetaData> | void): QuizOptions;
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

export declare class Notes {
  readonly id: string;
  readonly content?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notes, NotesMetaData>);
  static copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}

export declare class Videos {
  readonly id: string;
  readonly filename?: string;
  readonly category?: string;
  readonly URL?: string;
  readonly Quizes?: (Quizes | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}