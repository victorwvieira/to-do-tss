import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getToken() {
    const url = `${this.baseURL}/login`;
    //TODO save loginData in other place
    const loginData = { login: 'letscode', senha: 'lets@123' };
    return this.http
      .post<string>(url, loginData)
      .pipe(catchError(this.handleError));
  }

  getCards() {
    const url = `${this.baseURL}/cards`;
    return this.http.get<Card[]>(url).pipe(catchError(this.handleError));
  }

  postCard() {
    const url = `${this.baseURL}/cards`;
    return this.http
      .post<Card>(url, {
        titulo: 'string',
        conteudo: 'string',
        lista: 'To do',
      })
      .pipe(catchError(this.handleError));
  }
}
