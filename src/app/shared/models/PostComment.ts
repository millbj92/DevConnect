import { Post } from './Post';
import { User } from './User';
import { UserLike } from './UserLike';

export interface PostComment
    {
        comment_id: number;
        text: string;
        post: Post;
        Owner: User;
        Likes: UserLike[] | null;
        Created: Date | string;
    }