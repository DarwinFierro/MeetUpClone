import { Component, inject, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './register-modal.component.html',
})
export class RegisterModalComponent {
  visible = model<boolean>(false);
  switchToLogin = output<void>();

  private auth = inject(AuthService);

  name     = '';
  email    = '';
  password = '';

  onRegister(): void {
    if (this.name && this.email && this.password) {
      this.auth.register(this.name, this.email, this.password);
      this.visible.set(false);
      this.resetForm();
    }
  }

  onSwitchToLogin(): void {
    this.visible.set(false);
    this.switchToLogin.emit();
  }

  private resetForm(): void {
    this.name     = '';
    this.email    = '';
    this.password = '';
  }
}
