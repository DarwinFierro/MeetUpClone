import { Component, input, output, computed } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventPreview, EventMode } from '../../../../core/models';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  event = input.required<EventPreview>();
  saved = input(false);
  saveToggle = output<string>();

  onSaveToggle(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.saveToggle.emit(this.event().id);
  }

  categoryColor = computed(() => {
    const colors: Record<string, string> = {
      'Tecnología':    'bg-gray-900',
      'Diseño':        'bg-blue-600',
      'Arte y Diseño': 'bg-blue-600',
      'Deportes':      'bg-gray-800',
      'Bienestar':     'bg-emerald-600',
      'Negocios':      'bg-amber-600',
      'Música':        'bg-purple-600',
      'Fotografía':    'bg-pink-600',
    };
    return colors[this.event().category] ?? 'bg-gray-800';
  });
}
