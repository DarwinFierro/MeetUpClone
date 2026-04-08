import { Component, inject, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  visible          = model<boolean>(false);
  switchToRegister = output<void>();

  private auth   = inject(AuthService);
  private router = inject(Router);
  private fb     = inject(FormBuilder);

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email()    { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }

  onLogin(): void {
    if (this.form.invalid) return;
    this.auth.login(this.email.value!, this.password.value!);
    this.visible.set(false);
    this.form.reset();
    this.router.navigate(['/profile']);
  }

  onSwitchToRegister(): void {
    this.visible.set(false);
    this.switchToRegister.emit();
  }
}
