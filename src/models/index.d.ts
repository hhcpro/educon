import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}