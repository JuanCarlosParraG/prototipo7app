import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// social register
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  name: string;
  password: string;
  redesS: boolean;
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private route: Router,
    private authService: AuthService,
    
    
  ) { 
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
     
      console.log(this.user);
    });
  }

  ngOnInit() {
   
  }

  login(){

  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("soy google");
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log("soy facebook");
  } 
 
  signOut(): void {
    this.authService.signOut();
  }

  info(){
    
    console.log("prueba")
  }


}
