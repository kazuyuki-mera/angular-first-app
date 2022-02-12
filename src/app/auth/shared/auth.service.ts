import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

class DecodeToken {
  userId: string = '';
  userName: string = '';
  exp: number = 0;
}
@Injectable()
export class AuthService {
  private decodedToken;
  constructor(private http: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('app-meta')) || new DecodeToken();
  }

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userData).pipe(
      map((token: string) => {
        this.decodedToken = jwt.decodeToken(token);
        localStorage.setItem('app-auth', token);
        localStorage.setItem('app-meta', JSON.stringify(this.decodedToken));
      })
    );
  }
}
