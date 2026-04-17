import { Component } from '@angular/core';
import { PlayerService } from '../../services/playerService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  imports: [FormsModule],
  templateUrl: './add-player.html',
  styleUrl: './add-player.css',
})
export class AddPlayer {
  // Propriétés liées au formulaire
  name: string = '';
  position: number = 1;

  constructor(private playerService: PlayerService) {}

  onSubmit() {
    if (this.name.trim()) {
      // On génère un ID simple avec le timestamp pour le test
      const newId = Date.now();
      
      // On appelle la méthode du service que tu as codée !
      this.playerService.addPlayer(newId, this.name, this.position);
      
      // Reset du formulaire
      this.name = '';
      this.position++; // On incrémente la position pour le suivant, par confort
    }
  }
}
