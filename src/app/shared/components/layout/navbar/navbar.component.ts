import { Component, signal, HostListener, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthModalsComponent } from '../../auth-modals/auth-modals.component';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AuthModalsComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @ViewChild(AuthModalsComponent) authModals!: AuthModalsComponent;
  auth = inject(AuthService);

  menuOpen = signal(false);
  navLinks = [
    { label: 'Explorar', path: '/explore', exact: false },
  ];

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }

  openLogin() {
    this.authModals.openLogin();
    this.closeMenu();
  }

  openRegister() {
    this.authModals.openRegister();
    this.closeMenu();
  }

  logout() {
    this.auth.logout();
    this.closeMenu();
  }

  @HostListener('document:keydown.escape') onEscape() { this.closeMenu(); }
}
