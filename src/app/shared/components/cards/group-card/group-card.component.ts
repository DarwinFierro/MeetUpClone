import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GroupPreview } from '../../../../core/models';

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './group-card.component.html',
})
export class GroupCardComponent {
  group  = input.required<GroupPreview>();
  joined = input(false);
  joinClick = output<string>();

  onJoin(e: MouseEvent) {
    e.preventDefault();
    this.joinClick.emit(this.group().id);
  }

  coverGradient = computed(() => {
    const gradients: Record<string, string> = {
      'Tecnología': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Negocios':   'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Fotografía':  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'Deportes':   'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    };
    return gradients[this.group().category] ?? 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
  });

  formatMembers(count: number): string {
    return count >= 1000 ? (count / 1000).toFixed(1).replace('.0', '') + 'K' : count.toString();
  }
}
