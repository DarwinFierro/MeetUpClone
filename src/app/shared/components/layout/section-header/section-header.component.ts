import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  title     = input.required<string>();
  subtitle  = input<string>('');
  eyebrow   = input<string>('');
  linkLabel = input<string>('');
  linkPath  = input<string>('');
}
