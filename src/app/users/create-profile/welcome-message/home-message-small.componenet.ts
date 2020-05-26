import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MessageComponent } from './welcome-message.component';
import {messageAnimation} from '../../../shared/animations/homeanimations';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-home-message',
  template: `
  <div class="welcome-message-small">
      <h1 >{{message.text}}</h1>
  </div>
  `,
  animations:[messageAnimation]
})
export class HomeMessageSmallComponent implements MessageComponent {
  @Input() message: any;fterViewInit(){
  }

  @Output() beingDestroyed = new EventEmitter<boolean>();
  ngOnDestroy(): void {
    this.beingDestroyed.emit();
  }
}
