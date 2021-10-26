import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from '../list/liste.service';

import { Projet } from '../Models/Projet';
import { ProjetService } from '../nv-projet/projet.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() projet: Projet;
  constructor(private service:ListService) {
 
   }

  ngOnInit(): void {
    console.log("prj "+JSON.stringify(this.projet.path))
  }
  @Output() selectPersonne = new EventEmitter();

 
  // sendSelectedPersonne() {
  //   this.selectPersonne.emit(this.personne);
  // }

  selectProjet() {
   this.selectPersonne.emit(this.projet);
    this.service.selectItem(this.projet);
  }
  
}

