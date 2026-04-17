import { Component } from '@angular/core';
import { PlayerService } from '../../services/playerService';
import { Player } from '../../models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-list',
  imports: [CommonModule],
  templateUrl: './player-list.html',
  styleUrl: './player-list.css',
})
export class PlayerList {
  // On injecte le service en public pour y accéder directement depuis le HTML
  constructor(public playerService: PlayerService) {}

  onToggle(id: number) {
    this.playerService.togglePresence(id);
  }

  consoleLogPlayer(player: Player) {
    console.log("Données du joueur :", player);
    alert(`Joueur : ${player.name} \nPosition : 
      ${player.position} \nStatut : 
      ${player.isActive ? 'Actif' : 'Inactif' } \nstats :
      ${JSON.stringify(player.stats, null, 2)}`);
  }
}
