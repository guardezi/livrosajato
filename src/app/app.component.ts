import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'livros-a-jato';
  isAuth;

  constructor(
    private angularAuth: AngularFireAuth,
    private router: Router,

  ) {
    angularAuth.authState.subscribe(state => {
      this.isAuth = state;
    });
  }

  async logout() {
    await this.angularAuth.auth.signOut();
    await this.router.navigate(['/auth/login']);
  }
}
