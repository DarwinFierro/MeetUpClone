import { Component, signal, HostListener, ViewChild, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  @ViewChild('userMenuRef') userMenuRef!: ElementRef;

  auth         = inject(AuthService);
  router       = inject(Router);
  menuOpen     = signal(false);
  userMenuOpen = signal(false);

  navLinks = [
    { label: 'Explorar', path: '/explore', exact: false },
  ];

  toggleMenu()     { this.menuOpen.update(v => !v); }
  closeMenu()      { this.menuOpen.set(false); }
  toggleUserMenu() { this.userMenuOpen.update(v => !v); }
  closeUserMenu()  { this.userMenuOpen.set(false); }

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
    this.closeUserMenu();
    this.router.navigate(['/']);
  }

  @HostListener('document:keydown.escape') onEscape() {
    this.closeMenu();
    this.closeUserMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.userMenuRef && !this.userMenuRef.nativeElement.contains(event.target)) {
      this.closeUserMenu();
    }
  }
}
