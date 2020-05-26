import { UserProfile } from './UserProfile';
import { UserMessage } from './UserMessage';

export interface User
{
    user_id: number;
    email: string;
    password: string;
    userProfile: UserProfile;

    friends_list: User[];

    Messages: UserMessage[];

    token: string;
}