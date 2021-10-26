import { Component, OnInit } from '@angular/core';

import { User } from './user';
import Swal from 'sweetalert2';
import { RegisterService } from './register.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private registerService: RegisterService,private router: Router){ }
number:number;
  ngOnInit(): void {

  }


  submit(user: User) {
    console.log("OLAA");
    this.registerService.register(user).subscribe(data => {

      Swal.fire({
        animation: false,
        title: 'SVP, Copier le Code Recu sur Telephone ICI!',
        imageUrl: './../../../assets/images/verification.gif',
       // imageAlt: 'original',
        
       
      
        customClass: {
          popup: 'animated tada',
          validationMessage: 'my-validation-message'
        },

        imageHeight:250,
        padding: '3em',
        // background: '#fff url(./assets/images/client/blanc.jpg)',
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Valider!',
        backdrop: `
              rgba(0,0,123,0.4)
              url("./../../../assets/images/client/verification.gif")
              left top
              no-repeat
               
              
                <!-- Include the Material Ui theme --> `,
        html: `
                <form>
                <label for='phonenumber'>Entrer Votre code SVP!</label>
               
                <input required placeholder="CODE"  id="code" class="swal2-input">
                </form>
                `,
        focusConfirm: false,
        preConfirm: () => {
          this.user.code = (<HTMLInputElement>document.getElementById('code')).value;
          this.registerService.singUpverif(this.user).subscribe(data => {
            Swal.fire({
              customClass: { popup: 'animated tada' },
              animation: false,

              icon: 'success',
              title: 'Gongratulations!Your Registration has been saved',
              showConfirmButton: false,
            
            })
          })
          this.router.navigate(['/']);
        }
  








      })

    
    



    });
  }
}