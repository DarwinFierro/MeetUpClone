import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

interface AttendedEvent {
  category: string;
  date: string;
  title: string;
  location: string;
}

interface UserGroup {
  name: string;
  members: string;
  color: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  auth = inject(AuthService);

  activeTab: 'events' | 'groups' | 'saved' | 'about' = 'events';

  events: AttendedEvent[] = [
    { category: 'Tecnología', date: 'MIÉ, 12 MAR · 19:00', title: 'Meetup de Desarrolladores Angular & React', location: 'Centro de Innovación' },
    { category: 'Diseño',     date: 'VIE, 28 FEB · 09:00', title: 'Workshop de UX/UI Design con Figma',        location: 'Online' },
    { category: 'Negocios',   date: 'SÁB, 22 FEB · 10:00', title: 'Networking Emprendedores — Desayuno mensual', location: 'Selina Centro' },
  ];

  groups: UserGroup[] = [
    { name: 'Bogotá Dev Community', members: '2.4K miembros', color: 'bg-red-500' },
    { name: 'Designers Latam',      members: '1.8K miembros', color: 'bg-purple-500' },
    { name: 'UX Bogotá',            members: '920 miembros',  color: 'bg-green-500' },
  ];

  groupInitial(name: string) { return name[0].toUpperCase(); }
}
