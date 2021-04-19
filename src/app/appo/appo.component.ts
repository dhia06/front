// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { SignupService } from './signup.service';
// import { User } from './user';
// import { ToastService } from 'ng-uikit-pro-standard';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// @Component({
//   selector: 'app-appo',
//   templateUrl: './appo.component.html',
//   styleUrls: ['./appo.component.scss']
// })
// export class AppoComponent implements OnInit {
  
//   public listusers: any;
//   message = '';
//   title = 'datatables';
//   dtOptions: DataTables.Settings = {};
//   posts: any;

//   constructor(private http: HttpClient, private signup: SignupService/*,private toastrService: ToastService*/) { }

//   ngOnInit(): void {
//     this.retrieveUsers();
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 3,
//       processing: true
//     };

//     this.http.get('http://localhost:3000/get')
//       .subscribe(posts => {
//         this.posts = posts;
//       });

//   }
//   retrieveUsers(): void {
//     this.signup.allpro().subscribe(
//       (data: any) => {
//         this.listusers = data;
//         console.log(data);
//       });
//   }
//   public user: User;

//   selecteduser: User


//   updateC(us: any): void {

//     this.signup.update(us).subscribe((SUCCESS) => {

//       console.log("La Liste des pro:" + JSON.stringify(us));
//       console.log(SUCCESS)
//     },
//       (erreur) => console.log(erreur),
//       Swal.fire('Great', 'You have just added a new member to your professional list !', 'success')
//     );
//     //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(user));
//   }





// }

