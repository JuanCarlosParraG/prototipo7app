import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


// social register
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  modal: boolean;
  spiner: boolean;

  redesS: boolean;
  user: SocialUser;
  loggedIn: boolean;

  url: string = "https://es.wordpress.com/";

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log(this.user);
    });
  }

  ngOnInit() {
    this.modal = false;
    this.spiner = false;
  }
  //redes sociales
  twitter() {
    console.log("soy twitter");
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
  info() {
    this.modal = true;

    //crea un relog para controlar la duracion del modal
    setTimeout(() => {
      this.modal = false;
    }, 1500);
  }
  validar(){
    let val = this.http.get(this.url);
    val.subscribe(data => {
      console.log(data)
    });
  }
}
