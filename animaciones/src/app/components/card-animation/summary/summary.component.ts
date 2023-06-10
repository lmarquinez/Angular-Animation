import { Component, Input, SimpleChanges } from '@angular/core';
import * as anime from 'animejs/lib/anime';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() speedValue: number = 0;
  @Input() shotValue: number = 0;
  @Input() passValue: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['speedValue'] || changes['shotValue'] || changes['passValue']) {
      this.animateProgressBars();
    }
  }

  animateProgressBars() {
    const speedBar = document.querySelector('.speed-bar');
    const shotBar = document.querySelector('.shot-bar');
    const passBar = document.querySelector('.pass-bar');

    const speedValue = this.speedValue;
    const shotValue = this.shotValue;
    const passValue = this.passValue;

    anime({
      targets: speedBar,
      width: `${speedValue}%`,
      easing: 'easeInOutQuad',
      duration: 500
    });

    anime({
      targets: shotBar,
      width: `${shotValue}%`,
      easing: 'easeInOutQuad',
      duration: 500
    });

    anime({
      targets: passBar,
      width: `${passValue}%`,
      easing: 'easeInOutQuad',
      duration: 500
    });
  }

}
