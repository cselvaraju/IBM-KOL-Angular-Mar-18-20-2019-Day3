import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorlistService {

  listOfActors: Actor[];

  constructor() {
    this.listOfActors = [
      {name: 'Amitabh Bachhan', rating: 9.5},
      {name: 'Kamal Hasan', rating: 6.6},
      {name: 'Alia Bhat', rating: 2.0},
      {name: 'Deepika Padukone', rating: 7.8},
      {name: 'Rajnikant', rating: 9.0}
    ];
  }

  getActorList() {
    return this.listOfActors;
  }

  addActor(actor: Actor) {
    this.listOfActors.push(actor);
  }

  deleteActor(index: number) {
    this.listOfActors.splice(index, 1);
  }

  updateActor(index: number, newActor: Actor) {
    this.listOfActors.splice(index, 1, newActor);
  }
}
