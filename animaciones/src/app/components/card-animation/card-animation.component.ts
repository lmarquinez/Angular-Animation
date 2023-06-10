import { Component, ViewChild } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-card-animation',
  templateUrl: './card-animation.component.html',
  styleUrls: ['./card-animation.component.css']
})
export class CardAnimationComponent {
  @ViewChild(SummaryComponent) summary!: SummaryComponent;

  players: Player[] = [
    { name: 'Víctor Laguardia Cisneros', img: 'https://files.proyectoclubes.com/alaves/202210/400x550_17131336dsc_2188.jpg', speed: 60, shot: 80, pass: 90 },
    { name: 'Luis Jesús Rioja González', img: 'https://files.proyectoclubes.com/alaves/202210/400x550_17130006dsc_1913.jpg', speed: 90, shot: 90, pass: 70 },
    { name: 'Xeber Alkain', img: 'https://files.proyectoclubes.com/alaves/202210/400x550_17124603dsc_0432.jpg', speed: 70, shot: 60, pass: 60 }
  ];

  selectedPlayer: Player | null = null;

  selectPlayer(player: Player) {
    this.selectedPlayer = player;
    this.summary.animateProgressBars();
  }

}
