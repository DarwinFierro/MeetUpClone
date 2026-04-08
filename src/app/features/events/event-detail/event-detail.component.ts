import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Event } from '../../../core/models/event.model';
import { EventService } from '../../../core/services/event.service';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';
import { AvatarComponent } from '../../../shared/components/ui/avatar/avatar.component';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink, BadgeComponent, AvatarComponent],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent {
  private route        = inject(ActivatedRoute);
  private eventService = inject(EventService);

  event = signal<Event | undefined>(
    this.eventService.getById(this.route.snapshot.paramMap.get('id') ?? '')
  );

  isAttending  = signal(false);
  isSaved      = signal(false);

  attendancePercent = computed(() => {
    const e = this.event();
    if (!e || !e.maxAttendees) return 0;
    return Math.round((e.attendeeCount / e.maxAttendees) * 100);
  });

  visibleAttendees = computed(() => this.event()?.attendees.slice(0, 5) ?? []);
  extraAttendees   = computed(() => Math.max(0, (this.event()?.attendeeCount ?? 0) - 5));

  toggleAttend() { this.isAttending.update(v => !v); }
  toggleSave()   { this.isSaved.update(v => !v); }
}
