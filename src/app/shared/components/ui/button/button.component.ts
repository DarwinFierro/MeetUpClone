import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'danger' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'full';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  variant   = input<ButtonVariant>('primary');
  size      = input<ButtonSize>('md');
  type      = input<'button' | 'submit' | 'reset'>('button');
  disabled  = input(false);
  loading   = input(false);
  fullWidth = input(false);
  clicked   = output<MouseEvent>();

  handleClick(e: MouseEvent) {
    if (!this.disabled() && !this.loading()) this.clicked.emit(e);
  }

  buttonClasses = computed(() => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-gray-900 text-white hover:bg-black rounded-full',
      danger:  'bg-[#e3082c] text-white hover:bg-[#c30726] rounded-full',
      outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50 rounded-full bg-white',
      ghost:   'text-[#e3082c] hover:text-[#c30726] bg-transparent',
    };

    const sizes: Record<ButtonSize, string> = {
      sm:   'px-4 py-1.5 text-xs',
      md:   'px-6 py-2.5 text-sm',
      lg:   'px-8 py-3 text-sm',
      full: 'w-full px-6 py-3 text-sm',
    };

    const w = this.fullWidth() ? 'w-full' : '';
    return [base, variants[this.variant()], sizes[this.size()], w].filter(Boolean).join(' ');
  });
}
