import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Puedes reemplazar estos valores por los valores del formulario
    const email = 'test@example.com';
    const password = 'password';

    // Llama al método login del servicio
    if (this.authService.login(email, password)) {
      this.router.navigate(['/']);  // Redirige a la página de inicio después del login
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
