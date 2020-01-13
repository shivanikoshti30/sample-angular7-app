import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  public APIBaseURL: any;
  public hostName: any;
  constructor() {
    this.hostName = window.location.hostname;

    console.log("hostname", this.hostName);
  }
}
