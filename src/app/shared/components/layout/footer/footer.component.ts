import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink { label: string; path: string; }
interface FooterSection { title: string; links: FooterLink[]; }

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();

  sections: FooterSection[] = [
    {
      title: 'Tu cuenta',
      links: [
        { label: 'Iniciar sesión',  path: '/login' },
        { label: 'Registrarse',     path: '/register' },
        { label: 'Configuración',   path: '/settings' },
        { label: 'Privacidad',      path: '/privacy' },
      ],
    },
    {
      title: 'Descubrir',
      links: [
        { label: 'Eventos cercanos',   path: '/events' },
        { label: 'Grupos de interés',  path: '/groups' },
        { label: 'Meetups en línea',   path: '/online' },
        { label: 'Categorías',         path: '/categories' },
      ],
    },
    {
      title: 'Meetup',
      links: [
        { label: 'Acerca de nosotros', path: '/about' },
        { label: 'Blog',               path: '/blog' },
        { label: 'Prensa',             path: '/press' },
        { label: 'Hablar con nosotros', path: '/contact' },
      ],
    },
    {
      title: 'Síguenos',
      links: [
        { label: 'Twitter / X',  path: '/external' },
        { label: 'Instagram',    path: '/external' },
        { label: 'Facebook',     path: '/external' },
        { label: 'YouTube',      path: '/external' },
      ],
    },
  ];
}
