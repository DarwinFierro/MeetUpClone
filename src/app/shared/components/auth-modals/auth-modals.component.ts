import { Component } from '@angular/core';
import { LoginModalComponent } from '../../../features/auth/login/login-modal.component';
import { RegisterModalComponent } from '../../../features/auth/register/register-modal.component';

@Component({
  selector: 'app-auth-modals',
  standalone: true,
  imports: [LoginModalComponent, RegisterModalComponent],
  templateUrl: './auth-modals.component.html',
})
export class AuthModalsComponent {
  showLogin    = false;
  showRegister = false;

  openLogin(): void {
    this.showLogin    = true;
    this.showRegister = false;
  }

  openRegister(): void {
    this.showRegister = true;
    this.showLogin    = false;
  }
}
