import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';





export const authGuard: CanActivateChildFn = (childRoute, state) => {

 /*const authService = new AuthService();
  const router = new Router();


  if (authService.isAuthenticated()) {
    router.navigate(['']);
    return false;
  }*/
  return true;
}
