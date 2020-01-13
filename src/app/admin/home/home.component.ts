import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trades: any[] = [];
  isLoadingResults = true;

  constructor(private homeService: HomeService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.homeService.getData()
      .subscribe((res: any) => {
        if (res.status === true) {
          this.trades = res.data.trades;
        }
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  logout() {
    this.authService.logout()
      .subscribe((res: any) => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
  }
}


