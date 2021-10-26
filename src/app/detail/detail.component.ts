import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list/liste.service';

import { Projet } from '../Models/Projet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 @Input() projet: Projet;
  constructor(
  
    private router: Router,
    private Service: ListService
  ) { }

  ngOnInit() {
    this.Service.selectItemSubject.subscribe(
      (projet) => this.projet = projet
    );
  }
  @Output() sendproject = new EventEmitter();

  details(prj: Projet) {
    this.sendproject.emit(prj)
      this.router.navigate(['/stepper/', prj.id]);
     
    }
  goToDetail() {
    this.router.navigate(['cv', this.projet.id]);
  }
}
