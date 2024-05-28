import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  // getItem(): any {
  //   const data = localStorage.getItem('users');
  //   if(data) {
  //     return JSON.parse(data);
  //   } else {
  //     return null;
  //   }
  // }
}
