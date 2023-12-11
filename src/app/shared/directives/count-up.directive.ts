import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective  implements OnInit {
  @Input('appCountUp') endNumber: any;

  private observer!: IntersectionObserver;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

    // this.animateNumberChange();
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateNumberChange();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  private animateNumberChange() {
    const duration = 2500; // Set the duration of the animation in milliseconds
    const totalSteps = 100;
    const stepValue = (this.endNumber - 0) / totalSteps;

    let currentStep = 0;

    const intervalId = setInterval(() => {
      const currentNumber = 0 + stepValue * currentStep;
      this.renderer.setProperty(this.el.nativeElement, 'innerText', currentNumber.toFixed(0));
      currentStep++;

      if (currentStep >= totalSteps) {
        this.renderer.setProperty(this.el.nativeElement, 'innerText', this.endNumber.toFixed(0));
        clearInterval(intervalId);
      }
    }, duration / totalSteps);
  }

}
