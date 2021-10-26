import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManageproService } from '../Dashboard-Admin/services/Managepro.service';

@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrls: ['./verifier.component.scss']
})
export class VerifierComponent implements OnInit {
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
  get formData() { return this.orderForm.get('email'); }

  submitForm(): void{
    this.service.findByEmail(this.email).subscribe((user) => {
      console.log(user)
      this.service.updateverify(user).subscribe((SUCCESS) => {
        console.log(SUCCESS)
      },
        (erreur) => console.log(erreur), 
      );

    },  (erreur) => console.log(erreur), 
    );
    Swal.fire('Parfait', 'Vous serez contacté dans les plus brefs délais!', 'success')
  }

}
