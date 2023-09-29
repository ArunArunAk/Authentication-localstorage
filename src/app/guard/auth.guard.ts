import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenservicesService } from '../services/authenservices.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenservicesService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.auth.isLoggedIn();
  }
}



// import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
  
//   return true;
// };

// export const authGuard implement CanActivate: any {

// canActivate:any(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean {
//   return true;
// }
// }