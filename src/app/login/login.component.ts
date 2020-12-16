import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private ofAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login() {
    this.ofAuth
      .signInWithEmailAndPassword(
        this.formLogin.value.email,
        this.formLogin.value.password
      )
      .then((user) => {
        console.log(user);
      });
  }
}
