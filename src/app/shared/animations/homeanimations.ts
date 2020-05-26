import {
    trigger,
    animate,
    transition,
    style,
    query,
    stagger,
    keyframes,
    group,
    state
  } from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
      // The query function has three params.
      // First is the event, so this will apply on entering or when the element is added to the DOM.
      // Second is a list of styles or animations to apply.
      // Third we add a config object with optional set to true, this is to signal
      // angular that the animation may not apply as it may or may not be in the DOM.
      query(':enter', [style({ opacity: 0 })], { optional: true }),
      query(
        ':leave',
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);

export const messageAnimation = trigger('messageAnimation', [
   transition('* => *',[
      query(':enter', style({ opacity: 0, transform: 'translateY(100rem)' }), {optional: true}),

      query(':enter', 
        animate('4s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(100rem)', offset: 0}),
          style({opacity: .5, transform: 'translateY(-35px)',  offset: 0.1}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 0.15}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 0.85}),
          style({opacity: .5, transform: 'translateY(35px)',     offset: 0.95}),
          style({opacity: 0, transform: 'translateY(-100rem)',     offset: 1.0}),
          ])
        )
      ,{optional: true})
   ])
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('open', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  state('void', style({
    opacity: 0,
    transform: 'translateY(100rem)'
  })),
  state('closed', style({
    opacity: 0,
    transform: 'translateY(-100rem)'
  })),
  transition('open => closed', [
    animate('.5s')
  ]),
  transition('* => open', [
    animate('.5s')
  ])
]);