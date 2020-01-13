import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'https://testwallet.angelium.net/api/exchange/trades/';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const params = {
      pair: 'anx/btc',
      timestamp: '1573212003579'
    };
    return this.http.post<any>(apiUrl, params)
      .pipe(
        tap(_ => this.log('fetched home data')),
        catchError(this.handleError('getData', []))
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
