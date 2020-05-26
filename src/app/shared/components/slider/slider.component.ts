import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { SlideService, SlideChangeOptions } from '../slider-slide/slide-service';
import { trigger, transition, state, animate, style, keyframes,  } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
animations: [
    trigger('fadeStatus',[
      state('out', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('* => in', [
        animate('.3s'), style({opacity: 0})
      ]),
      transition('* => out', [
        animate('.3s'), style({opacity: 1})
      ]),
    ])
  ],
})
export class SliderComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('slideWrapper') private _child: ElementRef;
  private _slides;
  
  position: number;
  @Input()initial: number;
  @Input()snapPosition: Subject<number>;
  public fadeStatus: string;

  constructor(private slideService: SlideService) {
  }

  ngOnInit(): void {
    this.snapPosition.subscribe(e => {
      this.snapToSlide(e);
    })

    this.slideService.slidePosition$.subscribe(res => {
      this.changeSlide(res);
    })

    this.slideService.getCurrentSlide().subscribe(res => {
        console.log(res);
        if(res.snap){
          this.snapToSlide(res.index);
        }
        else{
          this.changeSlide(res.index);
        }
    })

    this.slideService.currentState$.subscribe(res => {
      this.fadeStatus = res;
    })
  }

  ngAfterViewInit(){
    this._slides = this._child.nativeElement.querySelectorAll('slider-slide');

    if(this.initial != null){
      this._slides[this.initial].scrollIntoView();
      this.initial = null;
    }
  }

  changeSlide(index: number){
    
    if(this._slides != null){
      this._slides[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  ngOnChanges(changes){
      /*if(changes.position != null && !changes.position.firstChange){
        this.changeSlide(this.position);
      }*/
  }

  snapToSlide(index: number){
    console.log(index);
    this._slides[index].scrollIntoView();
  }

}
