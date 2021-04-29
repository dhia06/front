import { Component, OnInit } from '@angular/core';
import { Travaildetailleemodel } from '../../Models/Travaildetailleemodel';
import { ApitaskdService } from '../services/apitaskd.service';

@Component({
  selector: 'app-taskdmetiers',
  templateUrl: './taskdmetiers.component.html',
  styleUrls: ['./taskdmetiers.component.scss']
})
export class TaskdmetiersComponent implements OnInit {
  hidden = false
  displayedColumns: string[] = ['id', 'dtname', 'description', 'task', 'Service', 'categorie', 'actions'];
  dataSource = [];
  travauxd: Travaildetailleemodel = new Travaildetailleemodel();

  constructor(private apiTaskd: ApitaskdService) { }

  ngOnInit(): void {
    console.log(this.dataSource)
    this.apiTaskd.readTravauxd().subscribe((result) => {
      this.dataSource = result;
    });
  }
  //cette fonction permet de selectionner un travail détaillé bien défini
  selectService(travauxd) {
    this.hidden = true;
    this.travauxd = travauxd;
  }
  //cette fonction permet d'ajouter un travail détaillé
  createTravauxd(f) {
    this.apiTaskd.createTravauxd(f.value).subscribe((result) => {
      console.log(result);
    });

  }
  //cette fonction permet de supprimer un travail détaillé
  deletetaskd(id) {
    this.apiTaskd.deletetaskd(id).subscribe((result) => {
      console.log(result);
    });
  }
  //cette fonction permet de modifier un travail détaillé 
  updatetaskd(f) {
    console.log('nom', f.value.nameservice)
    f.value.id = this.travauxd['id'];
    this.apiTaskd.updatetaskd(f.value).subscribe((result) => {
      console.log(result);
    });
  }




}
