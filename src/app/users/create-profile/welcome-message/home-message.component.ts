import { Component, OnInit, Input, AfterViewInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MessageComponent } from './welcome-message.component';
import {messageAnimation} from '../../../shared/animations/homeanimations';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-home-message',
  template: `
  <div class="welcome-message">
      <h1 >{{message.text}}</h1>
  </div>
  `,
  animations:[messageAnimation]
})
export class HomeMessageComponent implements MessageComponent, OnDestroy {
  @Input() message: any;

  @Output() beingDestroyed = new EventEmitter<boolean>();
  ngOnDestroy(): void {
    this.beingDestroyed.emit();
  }

}
