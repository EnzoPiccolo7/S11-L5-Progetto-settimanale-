import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myname = 'Epicode 18+'

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(val => {
      if(val !== null) {
        this.myname = `Ciao ${val?.user.firstname} , benvenuto su ${this.myname}` ;
      } else {
        this.myname = 'Epicode 18+';
      }
    })
  }

}
