import { Component, ElementRef, Input, OnInit, VERSION, ViewChild } from '@angular/core';
import { LoginService } from '../Authentification/logginpro/login.service';

import {jsPDF} from 'jspdf';
import  html2canvas  from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';

import { Projet } from '../Models/Projet';
import { param } from 'jquery';
import { ListService } from '../list/liste.service';

@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  
  styleUrls: ['./stepper-vertical.component.scss']
})
export class StepperVerticalComponent implements OnInit {
data : number ;
list =[];
list2 =[];
list3 =[];
list4 =[];
data2 : number ;
data3 : number ;
data4 : number ;
data5 : number ;
loading = false;
// currentUser: User;
  constructor( public userService: LoginService,private activatedRoute: ActivatedRoute,
     private router: Router, private service:ListService) {
    // this.currentUser = this.userService.currentUserValue;
   }
   
   projet: Projet;
  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
    this.service.findById(+params.id).subscribe(
   (projet) =>            
     (this.projet = projet),       
        (erreur) => this.router.navigate(['/'])
  
   );
   console.log("projetttttttttttttttttt",JSON.stringify(params))

  });
  }

  


OnLogout(){
  this.userService.logout();
}
  // @Input() total : number=0;

  // displayCounter() {
  //   console.log("Cout estimatifoooooo :",this.total);}

  try($event){
    this.projet = $event ;
    console.log("prrooojjjjjjjjj :",this.projet);
    console.log("ca marche",$event);
  }


  process($event){
    this.data = $event ;
    console.log("dataaaaaaaaaaaaaaaa :",this.data);
    console.log("ca marche",$event);
  }

  funct($event){
    this.list = $event ;
    console.log("list44444444444444444444 :",this.list);
    console.log("seee444444444444444444",$event);
  }


  funct2($event){
    this.list2 = $event ;
    console.log("list22 :",this.list2);
    console.log("seee22",$event);

  }
  funct3($event){
    this.list3 = $event ;
    console.log("list3333 :",this.list3);
    console.log("seee3333",$event);
  }

  funct4($event){
    this.list4 = $event ;
    console.log("list44444 :",this.list4);
    console.log("seee4444",$event);
  }


  process2($event){
    this.data2 = $event ;
    console.log("data :",this.data2);
    console.log("ca marche",$event);
  }

  process3($event){
    this.data3 = $event ;
    console.log("data :",this.data3);
    console.log("ca marche",$event);
  }

  process4($event){
    this.data4 = $event ;
    console.log("data :",this.data4);
    console.log("ca marche",$event);
  }

  process5($event){
    this.data5 = $event ;
    console.log("data :",this.data5);
    console.log("ca marche",$event);
  }
lista=[];


  @ViewChild('content', {static: false}) content: ElementRef;

  public downloadPDF() {

    var element =document.getElementById('table');
      html2canvas(element).then((canvas) => {
      console.log(canvas)
      var imgData =canvas.toDataURL('image/png')
      var doc = new jsPDF();
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData,0,0,208,imgHeight)
   
      doc.save('first.pdf');
    })  }



  // test(){
  //   var c =this.categorie*this.superficie
  //   Swal.fire({
  //     html:''+this.superficie*this.categorie+'DT',
  //     icon: 'info',
  //     confirmButtonText:
  //     '<i class="fa fa-thumbs-up"></i> Great!',
  //   confirmButtonAriaLabel: 'Thumbs up, great!',
  //   cancelButtonText:
  //     '<i class="fa fa-thumbs-down"></i>',
  //   cancelButtonAriaLabel: 'Thumbs down',
  //     title: 'your estimated quote is: ',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     },
  //     preConfirm: () => {
  //       return this.categorie*this.superficie
  //     }

     


  //   })
  //   console.log(this.superficie*this.categorie)
  //   //return this.categorie*this.superficie
  // }
}
