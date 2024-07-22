import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('token');
  if (localData != null) {
    return true;
  } else {
    router.navigateByUrl('');
    return false;
  }
};
