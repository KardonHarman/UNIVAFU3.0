import { trigger, transition, query, style, stagger, animate, state, keyframes, group } from '@angular/animations';

export const staggerAnim = trigger('staggerAnim', [
    transition('inactive => active', [
        style({ opacity: 1 }),
        query('.staggerItem', style({ opacity: 0, transform: 'translateY(80px)' })),
        group([
            query('.staggerItem', [stagger('300ms', [
                animate('600ms linear', style({ transform: 'translateY(0)' }))
            ])]),
            query('.staggerItem', [stagger('300ms', [
                animate('1.2s linear', style({ opacity: 1 }))
            ])])
        ])
        // query('.staggerItem', stagger('300ms', [
        //     animate('700ms linear', style({ opacity: 1, transform: 'translateY(0)' }))
        // ])),
        // query('.staggerItem', [
        //     animate(1000, style('*'))
        // ])
    ]),
    state('inactive', style({ opacity: 0 }))
]);

export const barAnimation = trigger('barAnimation', [
    state('show', style({
        opacity: 1,
        width: '80px'
    })),
    transition('show => hide', [
        animate('800ms', keyframes([
            style({ opacity: 1, width: '80px', offset: 0 }),
            style({ opacity: .2, width: '2px', offset: 0.9 }),
            style({ opacity: 0, width: '0px', offset: 1 })
        ]))
    ]),
    state('hide', style({
        opacity: 0,
        width: '0px'
    })),
    transition('hide => show', [
        animate('800ms', keyframes([
            style({ opacity: 0, width: '0px', offset: 0 }),
            style({ opacity: .8, width: '78px', offset: 0.9 }),
            style({ opacity: 1, width: '80px', offset: 1 })
        ]))
    ])
]);

export const leftAnimation = trigger('leftAnimation', [
    state('show', style({
        opacity: 1,
        transform: "translateX(0)"
    })),
    state('hide', style({
        opacity: 0,
        transform: "translateX(60%)"
    })),
    transition('show => hide', animate('700ms ease-in-out')),
    transition('hide => show', animate('700ms ease-in-out'))
]);

export const rightAnimation = trigger('rightAnimation', [
    state('show', style({
        opacity: 1,
        transform: "translateX(0)"
    })),
    state('hide', style({
        opacity: 0,
        transform: "translateX(-60%)"
    })),
    transition('show => hide', animate('700ms ease-in-out')),
    transition('hide => show', animate('700ms ease-in-out'))
]);

export const navArrowsAnimation = trigger('animateNavArrows', [
    state('active', style({
        transform: 'rotate(180deg)'
    })),
    state('inactive', style({
        transform: 'rotate(0deg)'
    })),
    transition('* => active', animate('200ms')),
    transition('* => inactive', animate('200ms'))
]);

export const routeAnimation = trigger('routeAnimation', [
    transition('* => *', [
        style({ height: "!" }),
        query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
        group([
            query(':leave', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)' }))], { optional: true }),
            query(':enter', [animate('0.4s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)' }))], { optional: true })
        ])
    ])
]); 