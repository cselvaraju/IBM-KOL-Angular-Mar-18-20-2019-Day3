import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';

import { ActorlistService } from '../../services/actorlist.service';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  listFlag: boolean;
  btnText: string;
  message: string;
  newName: string;
  newRating: number;
  selectedIndex: number;
  tempActor: Actor;
  tempActorList: Actor[];

  constructor(private actorListService: ActorlistService) { }

  ngOnInit() {
    this.actorList = this.actorListService.getActorList();
    this.listFlag = true;
    this.btnText = 'Hide List';
    this.message = '';
    this.newName = '';
    this.newRating = null;
    this.selectedIndex = -1;
    this.tempActor = null;
    this.tempActorList = this.actorList.slice();
  }

  btnClicked(event) {
    alert('OUCH! That Hurt!!\nPlease be gentle....');
    console.log(event);
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = this.listFlag ? 'Hide List' : 'Show List';
  }

  deleteActor(index) {
    // this.actorList.splice(index, 1);
    this.actorListService.deleteActor(index);
  }

  addActor() {
    // this.actorList.push({
    //   name: this.newName,
    //   rating: this.newRating
    // });

    this.actorListService.addActor({
      name: this.newName,
      rating: this.newRating
    });
    this.newName = '';
    this.newRating = null;
  }

  editActor(index) {
    this.selectedIndex = index;

    // Don't do this
    // SHALLOW COPY!!
    // this.tempActor = this.actorList[index];

    // DEEP COPY

    // Approach - 1 (not recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   rating: this.actorList[index].rating
    // };

    // Approach - 2 (Recommended)
    this.tempActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index) {
    this.selectedIndex = -1;
  }

  cancelEdit(index) {
    // this.actorList[index] = this.tempActor;
    this.actorListService.updateActor(index, this.tempActor);
    this.selectedIndex = -1;
  }

  handleKey(event, index) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  resetList() {
    this.actorList = this.tempActorList.slice();
  }

  sortList(property, direction) {
    this.actorList.sort(
      (obj1, obj2) => {
        if (property === 'name') {
          if (direction === 'ascending') {
            if (obj1[property] < obj2[property]) { return -1; }
            if (obj1[property] > obj2[property]) { return 1; }
            return 0;
          } else {
            if (obj1[property] < obj2[property]) { return 1; }
            if (obj1[property] > obj2[property]) { return -1; }
            return 0;
          }
        }
        if (property === 'rating') {
          if (direction === 'ascending') {
            return obj1[property] - obj2[property];
          } else {
            return obj2[property] - obj1[property];
          }
        }
      }
    );
  }
}
