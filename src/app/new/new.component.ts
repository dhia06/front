import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SignupClientService } from '../Authentification/signuppro/SignupClient.service';
import { Guser } from '../Models/guser';
import { User } from '../Models/user';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
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

//  data:User;
 identityFormGroup: FormGroup;
 addressFormGroup: FormGroup;
 thirdFormGroup: FormGroup;

  constructor(  private signup : SignupClientService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {



    this.identityFormGroup = this.formBuilder.group({   
      
      lastname: ['',{
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
   }],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required, Validators.required,
      Validators.pattern("^[0-9]*$")],
      datedenaissance: ['', Validators.required],
      password: ['', Validators.required],
      plainTextPassword: ['', Validators.required]
    }
    , { updateOn: "blur" });

    this.addressFormGroup = this.formBuilder.group({
      address: ['',{
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
   }],
    
      registration: ['', Validators.required],
      postal: ['', Validators.required],
      company: ['',{
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
   }],

      bic: ['', Validators.required]
    }
    , { updateOn: "blur" });

    this.thirdFormGroup = this.formBuilder.group({
      email: ['', Validators.required,Validators.email,],
      password: ['', Validators.required],
      plainTextPassword: ['', {validator: this.checkPasswords}]
    }
    , { updateOn: "blur" });
   
  }
  

  checkPasswords(group: FormGroup) {
		const password = <FormControl>group.get('password');
		const confirmPassword = <FormControl>group.get('plainTextPassword');

		return password.value === confirmPassword.value ? null : { 'mismatch': true };
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
        
        Swal.fire({
          title: 'Congrats, You Completed the First Step!',
          text: 'You can check your email to carry on your registration process as a professional.',
          imageUrl: 'https://cdn.prdaily.com/wp-content/uploads/2020/04/comms-champion-COVID-19-crisis.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })

        console.log(success)},
      (erreur) => {
      
        Swal.fire({
          icon: 'error',
          title: 'Registration failed!',
          text: ' An error has occurred! Please check carefully your fields so that you can register as a professional.',
          footer: '<a href>Why do I have this issue?</a>'
        })

      
      console.log(erreur)}
    );

  
 
}
}

