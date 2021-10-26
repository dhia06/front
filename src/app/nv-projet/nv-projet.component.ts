import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';



import { LoginService } from '../Authentification/logginpro/login.service';

import { Projet } from '../Models/Projet';
import { ProjetService } from './projet.service';

@Component({
  selector: 'app-nv-projet',
  templateUrl: './nv-projet.component.html',
  styleUrls: ['./nv-projet.component.scss']
})
export class NvProjetComponent implements OnInit {
  public titre: string;
  @Input() typebien: string;
  public gamme: string;
  public extension: string;
  public delai: string;


  
  loading = false;
  // currentUser: User;

  projet =new Projet();
  firstgrp: FormGroup;
  secondgrp: FormGroup;
  thirdgrp: FormGroup;
  fourthgrp: FormGroup;
  fifthgrp: FormGroup;
  sixthgrp: FormGroup;
  quest1 =true;
  quest2=false;
  quest3=false;
  quest4=false;
  quest5=false;
  quest6=false;
  constructor(private service: ProjetService, private formBuilder: FormBuilder, public userService: LoginService,
     private router: Router, private route: ActivatedRoute) {
      // this.currentUser = this.userService.currentUserValue;
  }
  OnLogout(){
    this.userService.logout();
  }
    

  ngOnInit(): void {
    this.loading = true;
    this.firstgrp = this.formBuilder.group({
      titre: [],
    });

    this.secondgrp = this.formBuilder.group({
      typebien: [],

    });
    this.thirdgrp = this.formBuilder.group({
      gamme: [],

    });

    this.fourthgrp = this.formBuilder.group({
      surface: [],

    });
    this.fifthgrp = this.formBuilder.group({
      extension: [],

    });
    this.sixthgrp = this.formBuilder.group({
    delai: [],

    });
this.submit();
    console.log("mes infos :", this.projet);




  }

  prj = new Projet();
  info = new Projet();



  add1() {
    this.info.titre = this.firstgrp.get("titre").value;
    // this.router.navigate(['/type-bien', { info: this.info }]);

    this.quest1=false;
    this.quest2=true;
    // this.router.navigate(['/type-bien'],{ queryParams: { info: this.info } });
    console.log('titre: ',this.info)

  }


  add2() {

    this.info.typebien = this.secondgrp.get("typebien").value;
    // this.info.typebien = this.secondgrp.value.typebien;
    console.log('type-bien: ', this.info);
    this.quest1=false;
    this.quest2=false;
    this.quest3=true;
  }



  add3() {
    this.info.gamme = this.thirdgrp.get("gamme").value;
    console.log('gamme: ', this.info);
    this.quest1=false;
    this.quest2=false;
    this.quest3=false;
    this.quest4=true;
  
  }

  add4() {
    this.info.surface = this.fourthgrp.get("surface").value;
    console.log('surface: ', this.info);
    this.quest1=false;
    this.quest2=false;
    this.quest3=false;
    this.quest4=false;
    this.quest5=true;
  
  }

  add5() {
    this.info.extension = this.fifthgrp.get("extension").value;
    console.log('extension: ', this.info);
    this.quest1=false;
    this.quest2=false;
    this.quest3=false;
    this.quest4=false;
    this.quest5=false;
    this.quest6=true;

  
  }

  // var rolii = localStorage.getItem('role');
  // var decoded = jwt_decode(rolii); 
 token = localStorage.getItem('token');
 
 submit() { 
   
    this.info.delai = this.sixthgrp.get("delai").value;
    console.log('delai: ', this.info);
     var to =localStorage.getItem("accessToken")
     console.log("toooo",to)
     if (this.token){
       console.log("hhhhhhhhhhhhhhhh",this.token)
    this.service.addProjet(this.info).subscribe(
      (success) =>{
        Swal.fire(
          'Parfait!',
          'Vous avez juste crée un projet!',
          'success'
        )
    
        console.log(success)
       },
      (erreur) => {
        // Swal.fire("Oops...", "Une erreur s'est produite,Veuillez verifier vos coordonnées!", "error");
        console.log(erreur)

      }
    
    );
     }

  }

  
  }



