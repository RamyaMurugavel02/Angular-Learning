import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   login:any;
  constructor() { }
   ngOnInit(): void {

    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onclick()
  {
    console.log(this.login.value);
  }

}
