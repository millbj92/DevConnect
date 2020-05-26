import { User } from './User';

export interface Message
    {
        message_id: number;
        Text: string;
        Created: Date | string;
        Read: Date | string | null;
        sender: User;
    }