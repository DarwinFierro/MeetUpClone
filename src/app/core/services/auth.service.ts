import { Injectable, signal, computed } from '@angular/core';

export interface StoredUser {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'meetup_token';
  private readonly USER_KEY  = 'meetup_user';

  isAuthenticated = signal<boolean>(this.hasToken());
  currentUser     = signal<StoredUser | null>(this.loadUser());

  userInitials = computed(() => {
    const u = this.currentUser();
    if (!u) return '';
    return u.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  });

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  private loadUser(): StoredUser | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  login(email: string, password: string): void {
    const fakeToken = btoa(`${email}:${Date.now()}`);
    const user: StoredUser = { name: email.split('@')[0], email };
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.isAuthenticated.set(true);
    this.currentUser.set(user);
  }

  register(name: string, email: string, password: string): void {
    const fakeToken = btoa(`${email}:${Date.now()}`);
    const user: StoredUser = { name, email };
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.isAuthenticated.set(true);
    this.currentUser.set(user);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }
}
