import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'red' | 'white' | 'gray' | 'blue';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  size    = input<SpinnerSize>('md');
  variant = input<SpinnerVariant>('red');
  label   = input<string>('Cargando…');

  private sizeMap: Record<SpinnerSize, string> = {
    xs: 'w-3 h-3 border-[1.5px]',
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-[3px]',
    xl: 'w-12 h-12 border-4',
  };

  private variantMap: Record<SpinnerVariant, string> = {
    red:   'border-[#e3082c] border-t-transparent',
    white: 'border-white border-t-transparent',
    gray:  'border-gray-400 border-t-transparent',
    blue:  'border-[#476eff] border-t-transparent',
  };

  spinnerClasses = computed(() => {
    const s = this.sizeMap[this.size()];
    const v = this.variantMap[this.variant()];
    return `inline-block rounded-full animate-spin shrink-0 ${s} ${v}`;
  });
}
