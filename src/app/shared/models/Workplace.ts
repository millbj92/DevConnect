export interface WorkPlace
    {
        workplace_id: number;
        WorkLocation: Location;
        CompanyName: string;
        EndDate: Date | string | null;
        Position: string;
        StartDate: Date | string;
    }