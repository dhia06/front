import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import Swal from 'sweetalert2';
import { ManageproService } from '../services/Managepro.service';



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
  constructor(private http: HttpClient, private service: ManageproService, private router: Router) { }

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

  // updateC(us: any): void {
  //   this.service.update(us).subscribe((SUCCESS) => {
  //     console.log("La Liste des pro:" + JSON.stringify(us));
  //     console.log(SUCCESS)
  //   },
  //     (erreur) => console.log(erreur),
   
  //   );
  //   this.ngOnInit();
  //   Swal.fire('Great', 'You have just added a new member to your professional list !', 'success')
  // }





  updateC(us: any): void {
    if(us.confirmed=="oui"){
    this.service.update(us).subscribe((SUCCESS) => {
      console.log("La Liste des pro:" + JSON.stringify(us));
      console.log(SUCCESS)
      Swal.fire('Parfait', 'Vous venez d ajouter un nouveau membre à votre liste des professionnels !', 'success')
this.ngOnInit();
    }
      
   
    );
  }
  
    if(us.confirmed=="non"){
      Swal.fire('Oops...', 'Le professionnel n a pas encore confirmé son email !!', 'error');
    } 
   
  }


id:any;
@Input() personne: User = null;


details(personne: User) {
if(personne.confirmed=="oui"){
  this.router.navigate(['/dashboard/details/', personne.id]);}
  else{
    Swal.fire('Oops...', 'Tu peux pas consulter les détails de ce professionnel, ce dernier n a pas encore confirmé son email !!!', 'error');
  }

}

// getpardetails(us:User){
//   this.service.findById(us.id).subscribe(
//     (us) => {
//     console.log(us)
    

//   },  (erreur) => {
//   console.log(erreur) 
  
// }
//   );}


}


