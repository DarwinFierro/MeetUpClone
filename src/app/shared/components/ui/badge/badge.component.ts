import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'red' | 'blue' | 'green' | 'pink' | 'purple';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  variant = input<BadgeVariant>('default');
  size    = input<BadgeSize>('sm');

  private variantMap: Record<BadgeVariant, string> = {
    default: 'border-gray-300 text-gray-700 bg-white',
    red:     'border-[#e3082c]/30 text-[#e3082c] bg-[#fff1f3]',
    blue:    'border-blue-300 text-blue-600 bg-blue-50',
    green:   'border-green-300 text-green-700 bg-green-50',
    pink:    'border-pink-300 text-pink-600 bg-pink-50',
    purple:  'border-purple-300 text-purple-600 bg-purple-50',
  };

  private sizeMap: Record<BadgeSize, string> = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  badgeClasses = computed(() => {
    const base = 'inline-flex items-center font-medium rounded-full border whitespace-nowrap';
    return [base, this.variantMap[this.variant()], this.sizeMap[this.size()]].join(' ');
  });
}
