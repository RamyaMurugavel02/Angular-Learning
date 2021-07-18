import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
   login:any;
  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

  }
   onclick()
   {
     console.log(this.login.value);
   }

   
}
