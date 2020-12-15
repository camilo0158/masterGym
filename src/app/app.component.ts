import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'masterGym';

constructor(public ofAuth: AngularFireAuth){

}

login() {
  this.ofAuth.signInWithEmailAndPassword('camilo0158@hotmail.com', 'camilo0158');
}
logout() {
  this.ofAuth.signOut();
}

}
