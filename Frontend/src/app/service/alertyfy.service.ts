import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';
@Injectable({
  providedIn: 'root',
})
export class AlertyfyService {
  constructor() {}
  success(message: string) {
    alertyfy.sucess(message);
  }
  warning(message: string) {
    alertyfy.warning(message);
  }
  error(message: string) {
    alertyfy.error(message);
  }
}
