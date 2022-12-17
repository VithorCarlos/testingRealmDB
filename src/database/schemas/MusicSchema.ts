import { ObjectSchema } from "realm";

export const MusicSchema: ObjectSchema = {
    name: 'Music',
    properties: {
      _id: 'string?',
      _partition: 'string?',
      artist: 'string',
      code: 'string',
      createdAt: 'date',
      favorited: 'bool',
      music: 'string',
      start: 'string?',
      updatedAt: 'date?',
    },
    primaryKey: '_id',
  };