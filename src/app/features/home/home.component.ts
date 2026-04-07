import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/layout/section-header/section-header.component';
import { EventCardComponent } from '../../shared/components/cards/event-card/event-card.component';
import { GroupCardComponent } from '../../shared/components/cards/group-card/group-card.component';
import { EventPreview, GroupPreview } from '../../core/models';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionHeaderComponent,
    EventCardComponent,
    GroupCardComponent,
    ButtonModule,
    InputTextModule,
    ChipModule,
    CarouselModule,
    SkeletonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  savedEvents  = signal<Set<string>>(new Set());
  joinedGroups = signal<Set<string>>(new Set());

  toggleSave(id: string) {
    this.savedEvents.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  toggleJoin(id: string) {
    this.joinedGroups.update(s => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  categories = [
    { label: 'Tecnología', value: 'tech',   emoji: '🖥️' },
    { label: 'Diseño',     value: 'design', emoji: '🎨' },
    { label: 'Deportes',   value: 'sports', emoji: '⚽' },
    { label: 'Idiomas',    value: 'lang',   emoji: '💬' },
    { label: 'Música',     value: 'music',  emoji: '🎵' },
    { label: 'Negocios',   value: 'biz',    emoji: '💼' },
  ];

  howSteps = [
    {
      number: 1,
      emoji: '🔍',
      title: 'Descubre tu comunidad',
      description: 'Explora grupos y eventos cerca de ti filtrando por tus intereses, ciudad o categoría favorita.',
    },
    {
      number: 2,
      emoji: '🤝',
      title: 'Únete a un grupo',
      description: 'Regístrate gratis y únete a los grupos que más te inspiren. Sin compromisos.',
    },
    {
      number: 3,
      emoji: '🎉',
      title: 'Conéctate en persona',
      description: 'Asiste a eventos, conoce gente nueva y crea conexiones reales que duran.',
    },
  ];

  upcomingEvents: EventPreview[] = [
    {
      id: 'e1',
      title: 'Meetup de Desarrolladores Angular & React',
      coverImageUrl: '',
      date: new Date('2026-03-12T19:00:00'),
      mode: 'in-person',
      location: { address: 'Centro de Innovación', city: 'Bogotá', country: 'CO' },
      groupName: 'Bogotá Dev Community',
      attendeeCount: 32,
      category: 'Tecnología',
      isFree: true,
    },
    {
      id: 'e2',
      title: 'Workshop de UX/UI Design con Figma',
      coverImageUrl: '',
      date: new Date('2026-03-14T09:00:00'),
      mode: 'in-person',
      location: { address: 'Online', city: 'Online', country: 'CO' },
      groupName: 'Designers Latam',
      attendeeCount: 87,
      category: 'Diseño',
      isFree: false,
      price: 50000,
    },
    {
      id: 'e3',
      title: 'Club de Running y Bienestar Urbano',
      coverImageUrl: '',
      date: new Date('2026-03-15T17:00:00'),
      mode: 'in-person',
      location: { address: 'Parque El Virrey', city: 'Bogotá', country: 'CO' },
      groupName: 'Runners Bogotá',
      attendeeCount: 124,
      category: 'Deportes',
      isFree: true,
    },
    {
      id: 'e4',
      title: 'Intercambio de Idiomas Café + Conversación',
      coverImageUrl: '',
      date: new Date('2026-03-16T11:00:00'),
      mode: 'in-person',
      location: { address: 'Café Pergamino', city: 'Medellín', country: 'CO' },
      groupName: 'Language Exchange CO',
      attendeeCount: 45,
      category: 'Social',
      isFree: true,
    },
  ];

  popularGroups: GroupPreview[] = [
    {
      id: 'g1',
      name: 'Bogotá Dev Community',
      coverImageUrl: '',
      avatarUrl: '',
      category: 'Tecnología',
      location: 'Bogotá',
      memberCount: 7400,
    },
    {
      id: 'g2',
      name: 'Designers Latam',
      coverImageUrl: '',
      avatarUrl: '',
      category: 'Diseño',
      location: 'Latinoamérica',
      memberCount: 1800,
    },
    {
      id: 'g3',
      name: 'Runners Bogotá',
      coverImageUrl: '',
      avatarUrl: '',
      category: 'Deportes',
      location: 'Bogotá',
      memberCount: 1600,
    },
    {
      id: 'g4',
      name: 'Language Exchange CO',
      coverImageUrl: '',
      avatarUrl: '',
      category: 'Idiomas',
      location: 'Colombia',
      memberCount: 11000,
    },
  ];

  onlineEvents: EventPreview[] = [
    {
      id: 'oe1',
      title: 'Workshop de React Avanzado',
      coverImageUrl: '',
      date: new Date('2026-03-17T19:00:00'),
      mode: 'online',
      location: { address: '', city: 'Online', country: 'CO', virtualLink: 'https://meet.example.com' },
      groupName: 'Frontend Masters',
      attendeeCount: 243,
      category: 'Tecnología',
      isFree: true,
    },
    {
      id: 'oe2',
      title: 'Meditación Mindfulness Online',
      coverImageUrl: '',
      date: new Date('2026-03-18T20:00:00'),
      mode: 'online',
      location: { address: '', city: 'Online', country: 'CO', virtualLink: 'https://meet.example.com' },
      groupName: 'Mindful Living',
      attendeeCount: 89,
      category: 'Bienestar',
      isFree: true,
    },
    {
      id: 'oe3',
      title: 'Inglés Conversacional Nivel B2',
      coverImageUrl: '',
      date: new Date('2026-03-19T18:00:00'),
      mode: 'online',
      location: { address: '', city: 'Online', country: 'CO', virtualLink: 'https://meet.example.com' },
      groupName: 'Global Language Club',
      attendeeCount: 156,
      category: 'Idiomas',
      isFree: false,
      price: 30000,
    },
    {
      id: 'oe4',
      title: 'Startup Pitch Night Virtual',
      coverImageUrl: '',
      date: new Date('2026-03-20T21:00:00'),
      mode: 'online',
      location: { address: '', city: 'Online', country: 'CO', virtualLink: 'https://meet.example.com' },
      groupName: 'Emprendedores CO',
      attendeeCount: 312,
      category: 'Negocios',
      isFree: true,
    },
  ];
}
