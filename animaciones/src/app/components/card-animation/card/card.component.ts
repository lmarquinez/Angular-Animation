import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Player } from '../../../interfaces/player.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() player!: Player;
  @Output() playerSelected = new EventEmitter<Player>();
  isFocused: boolean = false;

  selectPlayer() {
    this.playerSelected.emit(this.player);
  }

  @HostListener('focus')
  onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.isFocused = false;
  }

}
