import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HelperService } from '../shared/services/helper.service';

const apiUrl = 'https://testwallet.angelium.net/api/jwt/api-token-auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  loggedInStatus = false;
  redirectUrl: string;

  constructor(private http: HttpClient, private helperService: HelperService) {
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(apiUrl, data)
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(true);
          this.loggedInStatus = true;
        }),
        catchError(
          this.handleError('login', []))
      );
  }


  logout(): Observable<any> {
    return this.http.post<any>(apiUrl + 'logout', {})
      .pipe(
        tap(_ => {
          this.isLoggedIn.emit(false);
          this.loggedInStatus = false;
        }),
        catchError(this.handleError('logout', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
