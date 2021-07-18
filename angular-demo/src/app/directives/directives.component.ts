import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
    display = true;
    ishide = false;
    nation = "india";
    
    array = [
      {id: 1,name: "Ramya"},
      {id:2, name:"Keerthi"},
      {id:3, name:"Bhavani"},
      {id:4, name:"Poojitha"},
      {id:5, name:"dhana"}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
