import { PhotoAlbum } from './PhotoAlbum';
import { User } from './User';

export interface Photo
    {
        photo_id: number;
        Album: PhotoAlbum | null;
        album_id: number;
        caption: string | null;
        Created: Date | string;
        img_url: string;
        owner: User;
    }