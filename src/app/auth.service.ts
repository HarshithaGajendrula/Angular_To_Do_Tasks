import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsername = 'user';
  private validPassword = 'password';

  login(username: string, password: string): boolean {
    return username === this.validUsername && password === this.validPassword;
  }
}
