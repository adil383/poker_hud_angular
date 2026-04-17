import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPlayer } from './components/add-player/add-player';
import { PlayerList } from './components/player-list/player-list';

@Component({
  selector: 'app-root',
  imports: [AddPlayer, PlayerList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('poker-hud');
}
