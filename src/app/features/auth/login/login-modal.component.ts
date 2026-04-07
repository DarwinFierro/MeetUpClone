import { Component, inject, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  visible = model<boolean>(false);
  switchToRegister = output<void>();

  private auth = inject(AuthService);

  email    = '';
  password = '';

  onLogin(): void {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password);
      this.visible.set(false);
      this.resetForm();
    }
  }

  onSwitchToRegister(): void {
    this.visible.set(false);
    this.switchToRegister.emit();
  }

  private resetForm(): void {
    this.email    = '';
    this.password = '';
  }
}
