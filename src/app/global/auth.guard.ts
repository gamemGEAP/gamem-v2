import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const tokenExpirado = (token: any) => {
  const tokenDecode: any = jwtDecode(token);
  const dataAtual: Date = new Date();
  const dataExpiracao = new Date(tokenDecode.exp * 1000);

  if (dataAtual > dataExpiracao) {
    return true;
  }

  return false;
};

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  if (token) {
    if (tokenExpirado(token)) {
      localStorage.removeItem('token');
      router.navigate(['/login']);
    }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
