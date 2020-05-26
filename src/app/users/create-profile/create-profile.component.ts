import { Component, OnInit } from '@angular/core';
import {messageAnimation, fadeInAnimation} from '../../shared/animations/homeanimations';

export interface HomeMessage{
  message: string,
  class: string;
}

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
  animations: [messageAnimation, fadeInAnimation]
})
export class CreateProfileComponent implements OnInit {
  messages: HomeMessage[];
  currentIndex = -1;
  currentMessage: HomeMessage;
  doWelcome = false;
  doForm = false;
  nameState = "closed";
  birthdayState = "open";
  doBirthday = true;
  accent="#e7a779";

  firstName = "";
  


  createMessages(){
    return [
      {message: "Welcome", class: "welcome-message"},
      {message: "Let's get started by building your profile!", class: "welcome-message-small"}
    ]
  }

  onAnimationDoneEvent(event){
    console.log(event);

    
    if(event.toState == "closed"){
      if(this.doForm == true){
        this.doForm = false;
        this.doBirthday = true;
        this.birthdayState = "open"
        return;
      }
    }

    //if(event.fromState == 'void') return;
    if(this.currentIndex == 1 && !this.doBirthday){
      this.doWelcome = false;
      this.doForm = true;
      this.nameState = "open"
    }
    if(this.currentIndex + 1 > this.messages.length - 1) this.currentIndex = 0
    else this.currentIndex += 1;
    this.currentMessage = this.messages[this.currentIndex];
  }

  constructor() { }

  ngOnInit(): void {
    this.messages = this.createMessages();
  }

  goToBirthday(){
    this.nameState = "closed";
  }

}
