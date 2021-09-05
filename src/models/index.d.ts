import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VideosMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Videos {
  readonly id: string;
  readonly filename?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Videos, VideosMetaData>);
  static copyOf(source: Videos, mutator: (draft: MutableModel<Videos, VideosMetaData>) => MutableModel<Videos, VideosMetaData> | void): Videos;
}