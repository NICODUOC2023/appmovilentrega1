import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface NavigationState {
  username?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as NavigationState;
    if (state && state.username) {
      this.username = state.username;
    }
  }
}
