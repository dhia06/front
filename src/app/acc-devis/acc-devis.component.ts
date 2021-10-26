import { Component, Input, OnInit } from '@angular/core';

import { Projet } from '../Models/Projet';
import { User } from '../Models/user';
import { LoginService } from '../Authentification/logginpro/login.service';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list/liste.service';
@Component({
  selector: 'app-acc-devis',
  templateUrl: './acc-devis.component.html',
  styleUrls: ['./acc-devis.component.scss']
})
export class AccDevisComponent implements OnInit {
   selectedProjet: Projet;
   @Input() selectedPerson :any;
   all:Projet[];
   loading = false;
   currentUser: User;
   
   
nbItem = 0;
constructor(
  private Service: ListService,public userService: LoginService,private route: ActivatedRoute
) {
  this.currentUser = this.userService.currentUserValue;
 }




OnLogout(){
this.userService.logout();
}



id:string;
 
ngOnInit() {
//   this.id = this.route.snapshot.paramMap.get('id');
// console.log("amaaan",this.id)
  this.loading = true;
  this.Service.selectItemSubject.subscribe(
    (personne) => this.nbItem++
  );
   this.retrieveProject();
}

retrieveProject(): void {
  this.Service.getProjet().subscribe(
    (data: any) => {
         this.all = data;
         console.log(data);
        (erreur) => {
        console.log("I m wrong",erreur)}
          }  );
  }


  selectProjet(projet: Projet) {
  this.selectedProjet = projet;
    console.log("my project :"+projet);
   }

}
