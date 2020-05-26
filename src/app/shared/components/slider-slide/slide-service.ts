import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export class SlideState{
    index: number;
    fadeStatus: string = "";
  }

export class SlideChangeOptions{
    index: number;
    snap: boolean;
    constructor(_index: number, _snap: boolean){
        this.index = _index;
        this.snap = _snap;
    }
}

@Injectable({
  providedIn: 'root'
})
export class SlideService{
  private currentSlideSource: Subject<SlideChangeOptions> = new Subject<SlideChangeOptions>();
  public currentSlide$ = this.currentSlideSource.asObservable();

  private currentStateSource: Subject<string> = new Subject<string>();
  public currentState$ = this.currentStateSource.asObservable();

  public slidePositionSource: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public slidePosition$ = this.slidePositionSource.asObservable();

  constructor() {
  }

  transitionSlides(to: number){
     this.currentStateSource.next("out");
     setTimeout(() => {
        this.currentSlideSource.next(new SlideChangeOptions(to, true));
        this.currentStateSource.next("in");
     }, 300)
  }

  getCurrentSlide(): Observable<SlideChangeOptions>{
      return this.currentSlide$;
  }

  public changeSlide(index: number){
    this.slidePositionSource.next(index);
  }


}