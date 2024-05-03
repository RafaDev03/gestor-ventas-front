import { CanActivateFn, Router } from '@angular/router';
import { ɵɵdirectiveInject as directiveInject } from '@angular/core';
import { AuthService } from '~/auth/auth.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = directiveInject(AuthService);
  const isLoggedIn = authService.isLoggedIn;

  if (isLoggedIn) {
    return isLoggedIn;
  } else {
    const router = directiveInject(Router);
    return router.createUrlTree(['/login']);
  }
};
