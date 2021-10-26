
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


//   constructor (private authService: AuthService,
//     private router : Router) {}
//     canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     if (this.authService.isAdmin())
//     this.router.navigate(['/surface']);
    
//     else
//     {
//     this.router.navigate(['/surface']);
//     return false;
//     }
   

// }




  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/connexion']);
      return false;
    }
     let currentUser= localStorage.getItem('user');
    if (this.authService.isAuthenticated()) {

      if (this.authService.isAdmin) //this.roles== undefiened
      { this.router.navigate(['/dashboard'])
           
       }
       if (this.authService.isUser) //this.roles== undefiened
       { this.router.navigate(['/Interfaceclient'])
            
            
        }
        return false;
    }
}




}

































// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';


// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private authenticationService: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const user = this.authenticationService.userValue;
//         if (user) {
//             // check if route is restricted by role
//             if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
//                 // role not authorised so redirect to home page
//                 this.router.navigate(['/']);
//                 return false;
//             }

//             // authorised so return true
//             return true;
//         }

//         // not logged in so redirect to login page with the return url
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//         return false;
//     }
//}

