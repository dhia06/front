import { Component, OnInit } from '@angular/core';
import { Travailmodel } from '../../Models/Travailmodel';
import { ApitaskService } from '../services/apitask.service';

@Component({
  selector: 'app-taskmetiers',
  templateUrl: './taskmetiers.component.html',
  styleUrls: ['./taskmetiers.component.scss']
})
export class TaskmetiersComponent implements OnInit {

  hidden = false
  categorie: any
  displayedColumns: any[] = ['id', 'travailname', 'nameservice', 'categorie', 'actions'];
  dataSource: any = [];
  travaux: Travailmodel = new Travailmodel();


  constructor(private apiTravaux: ApitaskService) { }

  ngOnInit(): void {
    this.apiTravaux.readTravaux().subscribe((result) => {

      this.dataSource = result;
      console.log(JSON.stringify(this.dataSource))

    });

  }

  //cette fonction permet de selectionner le service
  selectService(travaux) {
    this.hidden = true;
    console.log(this.hidden)
    this.travaux = travaux;
    console.log(JSON.stringify(this.dataSource))
  }

  //cette fonction permet d'ajouter un travail
  createTravaux(f) {
    this.apiTravaux.createTravaux(f.value).subscribe((result) => {
      console.log(result);
    });

  }
  //cette fonction permet de supprimer un travail
  deletetask(id) {
    this.apiTravaux.deletetask(id).subscribe((result) => {
      console.log(result);
      this.ngOnInit()
    });
  }
  //cette fonction permet de modifier un travail
  updatetask(f) {
    f.value.id = this.travaux['id'];
    this.apiTravaux.updatetask(f.value).subscribe((result) => {
      console.log(result);
    });
  }

}
