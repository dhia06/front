import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../Models/Projet';
import { ListService } from './liste.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projet: Projet[];
  @Output() sendproject = new EventEmitter();
  @Output() forwardSelectedPersonne = new EventEmitter();
sendEvent(){
  this.sendproject.emit(this.projet)
}
  
  // @Output() itemSelectPersonne = new EventEmitter();
  constructor(
    private Service: ListService, private router: Router
  ) { }
  date = new Date();


  forwardPersonne(personne: Projet) {
    this.forwardSelectedPersonne.emit(personne);
  }



  details(prj: Projet) {
    this.sendproject.emit(prj)
      this.router.navigate(['/stepper/', prj.id]);
     
    }
    






  ngOnInit() {
    this.Service.getProjet().subscribe(
      (projet) => {
        this.projet = projet;
      },
      (erreur) => {
        // this.prj = this.Service.getFakePersonnes();
        alert(`Problème de connexions les donnèes sont fictives :(`);
      }
    );
  }


}
