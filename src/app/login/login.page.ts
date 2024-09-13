import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {  username: string = '';

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/inicio'], { state: { username: this.username } });
  }
  goToReset() {
    this.router.navigate(['/resetear']);
  }

}
