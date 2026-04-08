import { Component, inject, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

function fullNameValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').trim();
  return value.includes(' ') ? null : { fullName: true };
}

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './register-modal.component.html',
})
export class RegisterModalComponent {
  visible       = model<boolean>(false);
  switchToLogin = output<void>();

  private auth   = inject(AuthService);
  private router = inject(Router);
  private fb     = inject(FormBuilder);

  form = this.fb.group({
    name:     ['', [Validators.required, Validators.minLength(3), fullNameValidator]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]],
  });

  get name()     { return this.form.get('name')!; }
  get email()    { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  onRegister(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.auth.register(this.name.value!, this.email.value!, this.password.value!);
    this.visible.set(false);
    this.form.reset();
    this.router.navigate(['/profile']);
  }

  onSwitchToLogin(): void {
    this.visible.set(false);
    this.switchToLogin.emit();
  }
}
