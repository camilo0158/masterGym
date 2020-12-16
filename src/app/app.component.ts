import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'masterGym';
  user: any;
  loading = true;

  constructor(public ofAuth: AngularFireAuth) {
    this.ofAuth.user.subscribe((user) => {
      this.loading = false;
      console.log(user);
      this.user = user;
    });
  }

  login() {
    this.ofAuth.signInWithEmailAndPassword(
      'camilo0158@hotmail.com',
      'camilo0158'
    );
  }
  logout() {
    this.ofAuth.signOut();
  }
}
