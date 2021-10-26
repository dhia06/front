import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subDays } from 'date-fns';
import { LoginService } from 'src/app/Authentification/logginpro/login.service';
//import { SignupClientService } from 'src/app/Authentification/SignupClient/SignupClient.service';
import { CalenderService } from 'src/app/calendrx/calender.service';

import { Disponibilite } from 'src/app/Models/Disponibilite';
import { Rdv } from 'src/app/Models/Rdv';
import { User } from 'src/app/Models/user';
import Swal from 'sweetalert2';
import { RdvService } from './rdv.service';

@Component({
  selector: 'app-priserdv',
  templateUrl: './priserdv.component.html',
  styleUrls: ['./priserdv.component.scss']
})
export class PriserdvComponent implements OnInit {

  @Input() Disponibilite;

  isLinear = false;
  @Input() debut:Date;
  firstFormGroup: FormGroup;
  date1 = new FormControl(new Date())
  secondFormGroup: FormGroup;
  public email: string;
  public cl_id:number;
  public number: number;
  public nom:string;
  public tel:number;
  public date:Date;
public titre :string;
 formulaire: any;
  form: FormGroup;
  all:Disponibilite[];
 data:Rdv;
 identityFormGroup: FormGroup;
 addressFormGroup: FormGroup;
 thirdFormGroup: FormGroup;
  orderForm: FormGroup;

  constructor( private dispoiserv:CalenderService, private service :RdvService,
     private formBuilder: FormBuilder,private router: Router,public userService: LoginService) {
      this.currentUser = this.userService.currentUserValue;
  }


  ngOnInit() {
    this.orderForm = this.formBuilder.group({
 
      debut: [],
    });
    this.loading = true;
this.retrieveDispo();
  this.addressFormGroup = this.formBuilder.group({
      titre: ['',{
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
   }],
    
    email: ['', Validators.required],
      
      nomcl: ['',{
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
   }],

      tel: ['', Validators.required]
    }
    , { updateOn: "blur" });

    this.thirdFormGroup = this.formBuilder.group({
      email: ['', Validators.required,Validators.email,],
    }
    , { updateOn: "blur" });
   
  }

  loading = false;
  currentUser: User;
  userFromApi: User;
  
  
  
  OnLogout(){
    this.userService.logout();}
  
    




 //Get la liste des Dispo
 retrieveDispo(): void {
  this.dispoiserv.readServices().subscribe(
    (data: any) => {
         this.all = data;
         console.log(data);
        });
  }
  
  
  
  add() {

    const RDVInfo = new Rdv();
    // let u: subDays(new Date(e.debut),0) 
    RDVInfo.titre = this.titre;
    RDVInfo.date = this.orderForm.value.debut;
    RDVInfo.tel = this.tel;
    RDVInfo.nomcl = this.nom;
    RDVInfo.email = this.email;
    RDVInfo.cl_id = 2;
console.log("hhh",this.titre);

     console.log('date',RDVInfo.date);
     console.log('debut',this.debut);
     console.log('hh',RDVInfo);
     

     

    this.service.createServices(RDVInfo).subscribe(
   
     
      (success) =>{
        console.log('hihi',success)
        Swal.fire({
          title: 'Félicitations!',
          text: 'Un mail de confirmation vous a été envoyé afin de planifier un meeting via google meet!',
          imageUrl: 'https://cdn.prdaily.com/wp-content/uploads/2020/04/comms-champion-COVID-19-crisis.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',


        })
        this.router.navigate(['/']);
        console.log(success)},
      (erreur) => {
      
        Swal.fire({
          icon: 'error',
          title: 'Échec d enregistrement!',
          text: ' Une erreur s est produite! Veuillez vérifier attentivement vos champs afin de pouvoir vous inscrire en tant que professionnel.',
          footer: '<a href>Pourquoi ai-je ce problème?</a>'
        })

      
      console.log(erreur)}
    );

  
 
}
 
}