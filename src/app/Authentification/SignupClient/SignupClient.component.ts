
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../Models/user';
import { Guser } from 'src/app/Models/guser';
import { SignupClientService } from '../signuppro/SignupClient.service';


@Component({
  selector: 'app-SignupClient',
  templateUrl: './SignupClient.component.html',
  styleUrls: ['./SignupClient.component.scss']
})
export class SignupClientComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public email: string;
  public lastname : string;
  public firstname: string;
  public   number: number;

public datedenaissance: Date;
public address: string;
public registration: number;
public postal: number;
public company: string;
public bic: number;
public password: string;
public plainTextPassword:string;
public salt:string='1'

  formulaire: any;
  form: FormGroup;

 data:User;
 identityFormGroup: FormGroup;
 addressFormGroup: FormGroup;
 thirdFormGroup: FormGroup;

  constructor(  private signup : SignupClientService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {



    this.identityFormGroup = this.formBuilder.group({ 
        
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      datedenaissance: ['', Validators.required],
      password: ['', Validators.required],
      plainTextPassword: ['', Validators.required]
    });

    this.addressFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      registration: ['', Validators.required],
      postal: ['', Validators.required],
      company: ['', Validators.required],
      bic: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      plainTextPassword: ['', Validators.required]
    });
   
  }
  

  add() {
    const profesionalInfo = new User();
      profesionalInfo.lastname = this.lastname;
      profesionalInfo.firstname = this.firstname;
      profesionalInfo.number = this.number;
      profesionalInfo.datedenaissance = this.datedenaissance;
      profesionalInfo.address = this.address;
      profesionalInfo.registration = this.registration;
      profesionalInfo.postal = this.postal;
      profesionalInfo.company = this.company;
      profesionalInfo.bic=this.bic;
      profesionalInfo.email=this.email;
      profesionalInfo.password=this.password;
      profesionalInfo.plainTextPassword=this.plainTextPassword;
    //  profesionalInfo.salt=this.salt;
  
    this.signup.addPersonne(profesionalInfo).subscribe(
     
      (success) =>{
        console.log(success)},
      (erreur) => console.log(erreur)
    );


alert('"Veuillez vérifier votre boîte mail !! :-)\n\n' );

  }
  

 
}