import { WorkPlace } from './Workplace';
import { UserStatus } from './UserStatus';
import { User } from './User';

export interface UserProfile
    {
        profile_id: number;
        user: User;
        user_id: number;
        Bio: string | null;
        Birthday: Date | string | null;
        FirstName: string;
        LastName: string;
        UpdateTime: Date | string | null;
        UserStatus: UserStatus;

        EmploymentHistory: WorkPlace[];
    }