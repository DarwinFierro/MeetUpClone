import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'meetup_token';

  isAuthenticated = signal<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  login(email: string, password: string): void {
    const fakeToken = btoa(`${email}:${Date.now()}`);
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    this.isAuthenticated.set(true);
  }

  register(name: string, email: string, password: string): void {
    const fakeToken = btoa(`${email}:${Date.now()}`);
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    this.isAuthenticated.set(true);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticated.set(false);
  }
}
