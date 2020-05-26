import { Photo } from './Photo';
import { User } from './User';

export interface PhotoAlbum
    {
        album_id: number;
        CoverPhoto: Photo | null;
        created: Date | string;
        Description: string | null;
        Modified: Date | string | null;
        Name: string;
        owner: User;
    }