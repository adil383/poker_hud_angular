import { Injectable, signal, computed } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // private players: Player[] = []; est un tableau non-signalé
  // 1. On utilise un Signal pour stocker le tableau
  private playersSignal = signal<Player[]>([]);
    
  constructor() {}

  // Méthode pour récupérer tous les joueurs
  // getPlayers(): Player[] {
  //   return this.players;
  // }
  // 2. On expose le signal en lecture seule pour les composants
  public readonly players = this.playersSignal.asReadonly();
  // Plus besoin de getPlayers(), les composants appelleront playerService.players()

  

  // Méthode pour créer un joueur
  addPlayer(id: number, name: string, position: number): void {
    const newPlayer: Player = {
      id,
      name,
      position,
      initialChips: 20000,
      isActive: true,
      stats: {
        handsPlayed: 0,
        callPreflop: 0,
        raisePreflop: 0,
        foldPreflop: 0,
        callPostflop: 0,
        raisePostflop: 0,
        foldPostflop: 0,
        vpip: 0,
        pfr: 0,
        aggressionFactor: 0,
      },
    };
    // this.players.push(newPlayer); là aussi on va utiliser la mise à jour immuable du signal
    // 3. Mise à jour immuable (Immutable) pour déclencher la réactivité
    this.playersSignal.update(currentPlayers => [...currentPlayers, newPlayer]);
  }

  togglePresence(id: number): void {
    this.playersSignal.update(allPlayers => 
      allPlayers.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p)
    );
  }

  

}


       // Valeur par défaut pour les jetons initiaux
    
