import { Component, OnInit, ViewChild } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//import { ProjetService } from './projet.service';
import { MatSort } from '@angular/material/sort';
import { DataTablesModule } from 'angular-datatables';
import { Projet } from '../../Models/Projet';
import { ProjetService } from './projet-service';
import { LoginService } from 'src/app/Authentification/logginpro/login.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-projet-ma',
  templateUrl: './projet-ma.component.html',
  styleUrls: ['./projet-ma.component.scss']
})
export class ProjetMaComponent implements OnInit {


  loading = false;
  currentUser: User;
  userFromApi: User;



  OnLogout(){
    this.userService.logout();}
  
  





  search: string;
  hidden = false;
  public listprojects: any;
  message = '';
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  
  posts: any;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
   projets: Projet = new Projet();
  
   
    @ViewChild(MatSort) sort: MatSort;
  
  //  data$:Observable<any>;
  articleId:any

  categorie:any
 // displayedColumns  :  any[] = ['id', 'articlename' ,'Prix','unite','DetailedTask','Task','Service', 'actions'];
  dataSource  :any= [];
//   Article :Article=new Article();
Article:any;
    filteredPubWorkSpaces: any;
    pubWorkspaces: any;
    private prix: string;

  constructor(private http:HttpClient, private service:ProjetService,public userService: LoginService) {
    this.currentUser = this.userService.currentUserValue;
   }

  ngOnInit(): void {
    this.loading = true;
    this.service.readProjets().subscribe(
      (data: any) => {
        
        this.listprojects = data;
        console.log(data);
      
      });
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

readProjets(): void {
  this.service.readProjets().subscribe(
    (data: any) => {
      
      this.listprojects = data;
      console.log(data);
    
    });}
    selectProjet(projets) {
    this.hidden = true;
    console.log(this.hidden)
    this.projets = projets;
    console.log(JSON.stringify(this.dataSource))
  }
updateContact(us){
    us.value.id = this.projets['id'];
    this.service.updateProjet(us.value).subscribe((result)=>{
      console.log(result);
    });
 
}
    deleteProjet(id){
   
      this.service.deleteProjet(id).subscribe((result)=>{
        console.log(result);
        
        this.ngOnInit()
      });
    }
    updatetaskd(f) {
      console.log('nom', f.value.titre)
      f.value.id = this.projets['id'];
      this.service.updatetaskd(f.value).subscribe((result) => {
        console.log(result);
      });
    }

    // updateContact(id){
    
    //   this.service.update(id).subscribe((result)=>{
    //     console.log(result);
    //   });
    // }
  

  



  
}

