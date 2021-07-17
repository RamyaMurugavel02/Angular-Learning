import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public value: string | any;
  @Output() childevent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  outputevent()
  {
    this.childevent.emit("I am from Output Decorator");
  }

}
