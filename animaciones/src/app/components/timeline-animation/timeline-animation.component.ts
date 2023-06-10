import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as anime from 'animejs/lib/anime';

@Component({
  selector: 'app-timeline-animation',
  templateUrl: './timeline-animation.component.html',
  styleUrls: ['./timeline-animation.component.css']
})
export class TimelineAnimationComponent implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const element = this.el.nativeElement.querySelector('.box');

    const animation = anime.timeline({
      easing: 'easeOutExpo',
      duration: 500
    });

    animation
      .add({
        targets: element,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: element,
        backgroundColor: '#58FA58',
        duration: 1000
      })
      .add({
        targets: element,
        backgroundColor: '#58FA58',
        scale: 1.5,
        duration: 500
      })
      .add({
        targets: element,
        backgroundColor: '#FFBF00',
        rotate: '1turn',
        duration: 1000
      });
  }
}
