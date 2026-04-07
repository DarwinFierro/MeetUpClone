import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = signal(false);
  navLinks = [
    { label: 'Explorar', path: '/explore', exact: false },
    { label: 'Grupos',   path: '/groups',  exact: false },
    { label: 'Eventos',  path: '/events',  exact: false },
  ];
  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
  @HostListener('document:keydown.escape') onEscape() { this.closeMenu(); }
}
