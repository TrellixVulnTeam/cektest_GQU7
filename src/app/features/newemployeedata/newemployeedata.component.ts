import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import {LoginData} from "../../core/interfaces/login-data.interface";

@Component({
  selector: 'app-newemployeedata',
  templateUrl: './newemployeedata.component.html',
  styleUrls: ['./newemployeedata.component.css']
})
export class NewemployeedataComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }



}
