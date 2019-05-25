import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  sequence,
  stagger
} from '@angular/animations';

export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

const STEPS_ALL: any[] = [
  query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
    optional: true
  }),
  query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
    optional: true
  }),
  sequence([
    query(
      ':leave > *',
      [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate(
          '1.2s ease-in-out',
          style({ transform: 'translateY(-3%)', opacity: 0 })
        ),
        style({ position: 'fixed' })
      ],
      { optional: true }
    ),
    query(
      ':enter > *',
      [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static'
        }),
        animate(
          '2.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ],
      { optional: true }
    )
  ]),
  query(
    ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
    stagger(75, [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate(
        '1.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ]),
    { optional: true }
  )
];
const STEPS_NONE = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
export const routeAnimations = trigger('routeAnimations', [
  transition(function(){return true}, STEPS_ALL),
  transition(function(){return true}, STEPS_NONE),
  transition(function(){return true}, STEPS_PAGE),
  transition(function(){return true}, STEPS_ELEMENTS)
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations:[
  	routeAnimations
  ]
})
export class AppComponent {
  title = 'material';
  rae = 'route-animations-elements';
}
