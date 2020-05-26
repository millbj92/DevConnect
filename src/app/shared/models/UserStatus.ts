import { User } from './User';

export interface UserStatus
{
    status_id: number;
    Status: string;
    UpdateTime: Date | string;
    User: User;
}