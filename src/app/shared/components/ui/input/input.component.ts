import { Component, input, output, computed, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
})
export class InputComponent implements ControlValueAccessor {
  // ----- inputs -----
  label        = input<string>('');
  placeholder  = input<string>('');
  type         = input<InputType>('text');
  size         = input<InputSize>('md');
  disabled     = input<boolean>(false);
  readonly     = input<boolean>(false);
  required     = input<boolean>(false);
  hint         = input<string>('');
  errorMessage = input<string>('');
  iconLeft     = input<string>('');
  iconRight    = input<string>('');
  autocomplete = input<string>('off');
  maxlength    = input<number | null>(null);
  min          = input<number | null>(null);
  max          = input<number | null>(null);
  inputId      = input<string>(`input-${Math.random().toString(36).slice(2, 7)}`);

  // ----- outputs -----
  valueChange = output<string>();

  // ----- internal state -----
  value       = signal<string>('');
  focused     = signal<boolean>(false);
  showPassword = signal<boolean>(false);

  // ----- CVA -----
  private onChange  = (_: string) => {};
  onTouched = () => {};

  writeValue(v: string)            { this.value.set(v ?? ''); }
  registerOnChange(fn: (_: string) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void)         { this.onTouched = fn; }
  setDisabledState()                        { /* handled via input() */ }

  onInput(event: Event) {
    const v = (event.target as HTMLInputElement).value;
    this.value.set(v);
    this.onChange(v);
    this.valueChange.emit(v);
  }

  togglePassword() { this.showPassword.update(v => !v); }

  // ----- styles -----
  private sizeMap: Record<InputSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  labelClasses = computed(() =>
    'text-sm font-medium text-gray-700'
  );

  inputClasses = computed(() => {
    const base =
      'w-full rounded-lg border bg-white text-gray-900 placeholder-gray-400 ' +
      'transition-all duration-200 outline-none ' +
      'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed ' +
      'read-only:bg-gray-50';

    const hasError = !!this.errorMessage();
    const borderColor = hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'border-gray-300 focus:border-[#e3082c] focus:ring-2 focus:ring-[#e3082c]/20';

    const pl = this.iconLeft()  ? 'pl-10' : '';
    const pr = this.iconRight() || this.type() === 'password' ? 'pr-10' : '';

    return [base, borderColor, this.sizeMap[this.size()], pl, pr]
      .filter(Boolean)
      .join(' ');
  });

  hintClasses = computed(() => 'text-xs text-gray-500');
}
