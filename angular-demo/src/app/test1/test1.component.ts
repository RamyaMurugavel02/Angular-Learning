import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
    userform : FormGroup;
    listdata:any;
  constructor(private fb:FormBuilder) {

    this.listdata=[];

    this.userform = this.fb.group({
      name:['', Validators.required],
      address:['', Validators.required],
      contactno:['', Validators.required],
      gender:['', Validators.required]
       }
    )
   }

  

  ngOnInit(): void {
  }

  addItem()
  {
    this.listdata.push(this.userform.value);
    this.userform.reset();
  }

  reset()
  {
    this.userform.reset();
  }

  removeItem(element:any){
    this.listdata.forEach((value: any,index: any)=> {
      if(value == element)
      this.listdata.splice(index,1);
    });
  }

}



