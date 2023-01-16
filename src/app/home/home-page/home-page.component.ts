import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  checkLoginStatus(): void {
    this.isLogged = this.loginService.isLogged();
}

}
