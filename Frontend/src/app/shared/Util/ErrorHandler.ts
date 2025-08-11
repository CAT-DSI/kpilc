import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorAlerter implements ErrorHandler {
constructor(private _snackBar: MatSnackBar){

}
  handleError(error) {
    this._snackBar.open(error.message, '', { duration: 6000, panelClass: ['alert-red'] });
  }
}