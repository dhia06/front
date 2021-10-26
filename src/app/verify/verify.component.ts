import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../Authentification/logginpro/login.service';
import { ManageproService } from '../Dashboard-Admin/services/Managepro.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  orderForm: FormGroup;
  formBuilder: any;
  email:any;
  id:any;

  constructor(
    private http: HttpClient, private service: ManageproService,
   private router:Router
  ) { }
  
  ngOnInit(): void {
    
  }
  get formData() { 
console.log("hoooooooow",this.orderForm.get('email'));
return this.orderForm.get('email'); }
  submitForm(us: any): void{
    this.service.findByEmail(this.email).subscribe((user) => {
      console.log(user)
      this.service.updateverify(user).subscribe((SUCCESS) => {
        console.log(SUCCESS)
      },
        (erreur) => console.log(erreur), 
      );

    },  (erreur) => console.log(erreur), 
    );
    Swal.fire('Great', 'You will be answered in the briefest delay !', 'success')
  }

//   getpardetails(id:number): void{
//   this.service.findById(id).subscribe(
//     (user) => {
//     console.log(user)
    

//   },  (erreur) => {
//   console.log(erreur) 
  
// }
//   );}
}