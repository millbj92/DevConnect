import { UserLike } from './UserLike';
import { Photo } from './Photo';
import { User } from './User';

export interface Post
    {
        post_id: number;
        text: string;
        likes: UserLike[] | null;
        images: Photo[] | null;
        Created: Date | string;
        Owner: User;
    }