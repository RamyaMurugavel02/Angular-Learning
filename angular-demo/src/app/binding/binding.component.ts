import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    public office = "TVM Info Tech";
    isshow=false;
    value=true;
    event="";
    twoway = " ";
  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.event = "Event Binding";
  }

}
