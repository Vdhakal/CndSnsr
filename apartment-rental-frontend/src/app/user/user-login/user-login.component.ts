import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @ViewChild('Form') signInForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onLoginSubmit() {
    const user = this.authService.authUser(this.signInForm.value);
    if(user){
      console.log('Login Successful');
    }else{
      console.log('Login not Successful');

    }
  }
}
