import { User } from './User';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface UserMessage
    {
        user_message_id: number;
        user: User;
        message: Message;
    }