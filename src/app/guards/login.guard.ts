import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') == 'true'){
    return true
  }else{
    return false;
  }

};


export const rol2Guard: CanActivateFn = (route, state) => {

  if(localStorage.getItem('rol2') == 'admin'){
    return true
  }else{
    return false;
  }

};
