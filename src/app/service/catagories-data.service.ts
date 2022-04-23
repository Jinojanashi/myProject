import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatagoriesDataService {

  REST_API: string = 'https://api.publicapis.org/categories'

  constructor(private httpClient: HttpClient) { }
  //Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getData()
  {
    return this.httpClient.get(`${this.REST_API}`)
    .pipe(
      catchError(this.handleError)
    )
  }
}
