import { Component, OnInit } from '@angular/core';
import { CalendarDay } from './calendar-day';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  calendarOpen: boolean = false;
  
  calendarClass = {'date-group-calendar': true, 'calendar-active': this.calendarOpen};
  currentYear: number = new Date().getUTCFullYear();
  currentMonth: number = new Date().getUTCMonth();
  calendarDays: CalendarDay[];
  months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  selectedDate: Date;
  selectedDateString: string;

  constructor() { }

  ngOnInit(): void {
    this.calendarDays = new Array<CalendarDay>();
    this.selectedDate = new Date(Date.UTC(this.currentYear, this.currentMonth + 1, new Date().getUTCDate()));
    //this.selectedDate.setUTCMonth(this.selectedDate.getUTCMonth() + 1);   
    this.selectedDateString = this.selectedDate.getUTCFullYear()+ "-" + this.selectedDate.getUTCMonth() + "-" + this.selectedDate.getUTCDate();

    console.log(this.selectedDateString);
    this.getDaysInMonth();
  }

  getDaysInMonth(){
    this.calendarDays = new Array<CalendarDay>();
    let date = new Date(Date.UTC(this.currentYear, this.currentMonth, 1));
    if(date.getUTCDay() != 0){
      const daysToSubtract = 0 - date.getUTCDay();
      const mDate = new Date(date);
      mDate.setUTCDate(date.getUTCDate() + daysToSubtract);
      date = mDate;
    }
    for(let i = 0; i < 42; i++){
      const thisDate = new Date(date);
      this.calendarDays.push(new CalendarDay(thisDate.getUTCMonth() === this.currentMonth, thisDate.getUTCDate(), thisDate));
      date.setUTCDate(date.getUTCDate() + 1);
    }
  }

  toggleCalendar(){
    this.calendarOpen = !this.calendarOpen;
    this.calendarClass = {'date-group-calendar': true, 'calendar-active': this.calendarOpen};
  }

  changeMonth(index: number){
    if(this.currentMonth == 0 && index == -1){
      this.currentYear--;
    }

    if(this.currentMonth == 11 && index == 1){
      this.currentYear++;
    }
    this.currentMonth = new Date(this.currentYear, this.currentMonth + index).getUTCMonth();
    this.getDaysInMonth();
  }

  selectDate(date: Date){
    date.setUTCMonth(date.getUTCMonth() + 1);
    this.selectedDate = date;
    this.selectedDateString = this.selectedDate.getUTCFullYear() + "-" + this.selectedDate.getUTCMonth() + "-" + this.selectedDate.getUTCDate();
  }

}
