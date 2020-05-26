export class CalendarDay{
    isInMonth: boolean;
    day: number;
    dayOfWeek: string;
    date: Date;

    constructor(IsInMonth: boolean, Day: number, Date: Date){
        this.isInMonth = IsInMonth;
        this.day = Day;
        this.date = Date;
    }
}