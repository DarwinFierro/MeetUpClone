import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { BadgeComponent } from '../../shared/components/ui/badge/badge.component';
import { InputComponent } from '../../shared/components/ui/input/input.component';
import { AvatarComponent } from '../../shared/components/ui/avatar/avatar.component';
import { SpinnerComponent } from '../../shared/components/ui/spinner/spinner.component';
import { SectionHeaderComponent } from '../../shared/components/layout/section-header/section-header.component';
import { EventCardComponent } from '../../shared/components/cards/event-card/event-card.component';
import { GroupCardComponent } from '../../shared/components/cards/group-card/group-card.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    BadgeComponent,
    InputComponent,
    AvatarComponent,
    SpinnerComponent,
    SectionHeaderComponent,
    EventCardComponent,
    GroupCardComponent,
  ],
  templateUrl: './showcase.component.html',
})
export class ShowcaseComponent {
  mockEvents = [
    {
      id: 'e1',
      title: 'Meetup de Diseño UX/UI — Edición Primavera',
      date: new Date('2026-04-15T19:00:00'),
      category: 'Diseño',
      groupName: 'UX Madrid',
      coverImageUrl: '',
      mode: 'in-person' as const,
      location: { address: 'WeWork Castellana', city: 'Madrid', country: 'España' },
      attendeeCount: 45,
      isFree: true,
    },
    {
      id: 'e2',
      title: 'Workshop de React + TypeScript Avanzado',
      date: new Date('2026-04-18T18:30:00'),
      category: 'Tecnología',
      groupName: 'JavaScript Barcelona',
      coverImageUrl: '',
      mode: 'online' as const,
      location: { address: '', city: 'Online', country: '' },
      attendeeCount: 120,
      isFree: false,
      price: 15,
    },
    {
      id: 'e3',
      title: 'Club de Running Parque del Retiro',
      date: new Date('2026-04-20T08:00:00'),
      category: 'Deportes',
      groupName: 'Madrid Runners',
      coverImageUrl: '',
      mode: 'in-person' as const,
      location: { address: 'Parque del Retiro', city: 'Madrid', country: 'España' },
      attendeeCount: 30,
      isFree: true,
    },
    {
      id: 'e4',
      title: 'Taller de Fotografía Urbana',
      date: new Date('2026-04-22T17:00:00'),
      category: 'Fotografía',
      groupName: 'Foto Explorers',
      coverImageUrl: '',
      mode: 'in-person' as const,
      location: { address: 'El Born', city: 'Barcelona', country: 'España' },
      attendeeCount: 18,
      isFree: true,
    },
  ];

  mockGroups = [
    {
      id: 'g1',
      name: 'Angular Dev Community',
      category: 'Tecnología',
      memberCount: 3420,
      coverImageUrl: '',
      avatarUrl: '',
      location: 'Madrid, España',
    },
    {
      id: 'g2',
      name: 'Designers & Coders',
      category: 'Negocios',
      memberCount: 1890,
      coverImageUrl: '',
      avatarUrl: '',
      location: 'Barcelona, España',
    },
    {
      id: 'g3',
      name: 'Madrid Runners Club',
      category: 'Deportes',
      memberCount: 5100,
      coverImageUrl: '',
      avatarUrl: '',
      location: 'Madrid, España',
    },
    {
      id: 'g4',
      name: 'Fotografía Creativa',
      category: 'Fotografía',
      memberCount: 920,
      coverImageUrl: '',
      avatarUrl: '',
      location: 'Valencia, España',
    },
  ];
}
