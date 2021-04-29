import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { ManageproService } from './Managepro.service';
import { User } from './user';

@Component({
  selector: 'app-liste-pro',
  templateUrl: './liste-pro.component.html',
  styleUrls: ['./liste-pro.component.scss']
})
export class ListeProComponent implements OnInit {

  public listusers: any;
  message = '';
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
  constructor(private http: HttpClient, private service: ManageproService) { }

  ngOnInit(): void {
    this.retrieveUsers();
    this.data$ =  this.http.get('https://jsonplaceholder.typicode.com/posts')
    this.dtOptions = {
    processing: true
     };


  }

  getArrayLenght(length){
    return new Array(length/20)
  }
  getIndex(pageIndex){
    this.startIndex = pageIndex * 5;
   this.endIndex = this.startIndex + 5;
   console.log(this.startIndex);
  }
  prevIndex(length){
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex){
    this.endIndex++
    console.log(this.endIndex)
  }

//cette fonction nous permet d'exploiter le service (allpro())qfin d'obtenir la liste des pro
  retrieveUsers(): void {
    this.service.allpro().subscribe(
      (data: any) => {
        this.listusers = data;
        console.log(data);
      });
  }
  public user: User;

  selecteduser: User

//cette fonction nous permet de modifier le statut du professionnel (en attente-->approuvé) et de lui envoyer un mail de confirmation 
//de son enregistrement dans notre site
  updateC(us: any): void {
    this.service.update(us).subscribe((SUCCESS) => {
      console.log("La Liste des pro:" + JSON.stringify(us));
      console.log(SUCCESS)
    },
      (erreur) => console.log(erreur),
   
    );
    this.ngOnInit();
    Swal.fire('Great', 'You have just added a new member to your professional list !', 'success')
  }





}


