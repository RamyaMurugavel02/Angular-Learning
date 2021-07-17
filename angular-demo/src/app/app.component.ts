import { Component, ViewChild } from '@angular/core';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  public data="TVM";
  message="";

  @ViewChild (ViewComponent) child:any;
  onsubmit(data:any)
  {
    console.log(data);
  }
    viewchild()
    {
      this.child.visible=!this.child.visible;
    }
 
}
