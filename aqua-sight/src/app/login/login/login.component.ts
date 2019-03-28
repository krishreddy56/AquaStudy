import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// tslint:disable-next-line: no-inferrable-types
  loading: boolean = false;
  loginFrm = new FormGroup({
    'username' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required])
  });

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  onLoginSubmit() {
    const self = this;
    if (this.loginFrm.valid) {
      this.loading = true;
      // this.router.navigate(['details']);
    setTimeout(() => {
      self.router.navigate(['details']);
    }, 1500);
  }
}
}
