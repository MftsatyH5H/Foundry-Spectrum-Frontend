import { gsap } from 'gsap';
import EventEmitter from 'eventemitter3';
import { lerp, getMousePos, calcWinsize, distance } from './utils';

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev: MouseEvent) => mousepos = getMousePos(ev));

interface DOMElements {
    el: HTMLElement;
    text: HTMLElement;
    textinner: HTMLElement;
}

interface RenderedStyles {
    [key: string]: {
        previous: number;
        current: number;
        amt: number;
    };
}

interface ButtonState {
    hover: boolean;
}

export default class ButtonCtrl extends EventEmitter {
    private DOM: DOMElements;
    private renderedStyles: RenderedStyles;
    private state: ButtonState;
    private rect: DOMRect;
    private distanceToTrigger: number;
    private onResize: () => void;

    constructor(el: HTMLElement) {
        super();
        this.DOM = {
            el: el,
            text: el.querySelector('.button__text') as HTMLElement,
            textinner: el.querySelector('.button__text-inner') as HTMLElement
        };
        this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.1 },
            ty: { previous: 0, current: 0, amt: 0.1 }
        };
        this.state = {
            hover: false
        };
        this.rect = this.DOM.el.getBoundingClientRect();
        this.distanceToTrigger = this.rect.width * 0.7;
        this.onResize = () => this.calculateSizePosition();

        this.initEvents();
        requestAnimationFrame(() => this.render());
    }

    private calculateSizePosition(): void {
        this.rect = this.DOM.el.getBoundingClientRect();
        this.distanceToTrigger = this.rect.width * 0.7;
    }

    private initEvents(): void {
        window.addEventListener('resize', this.onResize);
    }

    private render(): void {
        const distanceMouseButton = distance(
            mousepos.x + window.scrollX,
            mousepos.y + window.scrollY,
            this.rect.left + this.rect.width / 2,
            this.rect.top + this.rect.height / 2
        );

        let x = 0;
        let y = 0;

        if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) {
                this.enter();
            }
            x = (mousepos.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * 0.3;
            y = (mousepos.y + window.scrollY - (this.rect.top + this.rect.height / 2)) * 0.3;
        } else if (this.state.hover) {
            this.leave();
        }

        this.renderedStyles['tx'].current = x;
        this.renderedStyles['ty'].current = y;

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(
                this.renderedStyles[key].previous,
                this.renderedStyles[key].current,
                this.renderedStyles[key].amt
            );
        }

        this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
        this.DOM.text.style.transform = `translate3d(${-this.renderedStyles['tx'].previous * 0.6}px, ${-this.renderedStyles['ty'].previous * 0.6}px, 0)`;

        requestAnimationFrame(() => this.render());
    }

    private enter(): void {
        this.emit('enter');
        this.state.hover = true;
        this.DOM.el.classList.add('button--hover');
        document.body.classList.add('active');

        gsap.killTweensOf(this.DOM.textinner);

        gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
                ease: 'Power2.easeIn',
                opacity: 0,
                y: '-20%'
            })
            .to(this.DOM.textinner, 0.2, {
                ease: 'Expo.easeOut',
                opacity: 1,
                startAt: { y: '100%' },
                y: '0%'
            });
    }

    private leave(): void {
        this.emit('leave');
        this.state.hover = false;
        this.DOM.el.classList.remove('button--hover');
        document.body.classList.remove('active');

        gsap.killTweensOf(this.DOM.textinner);

        gsap
            .timeline()
            .to(this.DOM.textinner, 0.15, {
                ease: 'Power2.easeIn',
                opacity: 0,
                y: '20%'
            })
            .to(this.DOM.textinner, 0.2, {
                ease: 'Expo.easeOut',
                opacity: 1,
                startAt: { y: '-100%' },
                y: '0%'
            });
    }
}