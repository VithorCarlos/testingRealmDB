import Realm from "realm";

export type MusicDTO = {
    _id?: string;
    _partition?: string;
    artist: string;
    code: string;
    createdAt: Date;
    favorited: boolean;
    music: string;
    start?: string;
    updatedAt?: Date;
};

export type IMusicObject = MusicDTO & Realm.Object;