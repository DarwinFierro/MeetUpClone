import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  src    = input<string>('');
  name   = input<string>('');
  size   = input<AvatarSize>('md');
  online = input<boolean | undefined>(undefined);

  imgError = false;

  onImgError() { this.imgError = true; }

  initials = computed(() => {
    const n = this.name().trim();
    if (!n) return '?';
    const parts = n.split(' ').filter(Boolean);
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : n.slice(0, 2).toUpperCase();
  });

  private sizeMap: Record<AvatarSize, string> = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  wrapperClasses = computed(() => {
    const s = this.sizeMap[this.size()];
    return `relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden ${s}`;
  });

  imgClasses = computed(() => 'w-full h-full object-cover rounded-full');

  initialsClasses = computed(() =>
    'w-full h-full flex items-center justify-center font-semibold rounded-full bg-[#e3082c] text-white select-none'
  );

  statusDotClasses = computed(() => {
    const color = this.online() ? 'bg-green-500' : 'bg-gray-400';
    const dotSizes: Record<AvatarSize, string> = {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5',
    };
    return `absolute bottom-0 right-0 ${dotSizes[this.size()]} ${color} rounded-full ring-2 ring-white`;
  });
}
