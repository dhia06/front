import { Component, OnInit } from '@angular/core';
import { Servicemodel } from '../../Models/Servicemodel';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-servicetmetiers',
  templateUrl: './servicetmetiers.component.html',
  styleUrls: ['./servicetmetiers.component.scss']
})
export class ServicetmetiersComponent implements OnInit {
  hidden = false
  displayedColumns  :  string[] = ['id', 'nameservice', 'categorie', 'actions'];
  dataSource  = [];
  startIndex=1
  endIndex=1000
  services :Servicemodel=new Servicemodel();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readServices().subscribe((result)=>{   
      this.dataSource  =  result;
     });
     
     }
     getArraylenght(length){
      return new Array (length/20)
     }
     getIndex(pageIndex ){
       this.startIndex = pageIndex*5;
       this.endIndex=this.startIndex +5;

     }

     selectService(services){
      this.hidden=true;
      this.services = services;
    }
    //cette fonction permet d'ajouter'un service
    createServices(f){
      this.apiService.createServices(f.value).subscribe((result)=>{
        console.log(result);
      });
      
    }
  //cette fonction permet de supprimer un service
    deleteService(id){
      this.apiService.deleteService(id).subscribe((result)=>{
        console.log(result);
        this.ngOnInit()
      });
    }
    //cette fonction permet de modifier un service
    updateService(f){
      f.value.id = this.services['id'];
      this.apiService.updateService(f.value).subscribe((result)=>{
        console.log(result);
      });
    }


  }

