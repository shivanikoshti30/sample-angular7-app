import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastrService: ToastrService) { }

  public notifySuccess(msg: string = null) {

    if (msg) {
      this.toastrService.success(msg);
    } else {
      console.log('empty error message');
    }

  }


  public notifyError(msg: string = null) {
    if (msg) {
      this.toastrService.error(msg);
    } else {
      console.log('empty error message');
    }

  }
}
