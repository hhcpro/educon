import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Note {
  readonly id: string;
  readonly message?: string;
  readonly Videos?: Videos;
  readonly videosID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Videos {
  readonly id: string;
  readonly filename?: string;
  readonly category?: string;
  readonly URL?: string;
  readonly Notes?: (Note | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}