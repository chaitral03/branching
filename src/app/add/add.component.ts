import { Component, OnInit } from '@angular/core';
import { markParentViewsForCheck } from '@angular/core/src/view/util';
import { getRenderedText } from '@angular/core/src/render3';
import { generate } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor() { }
   first:any;
   second:number;
   c:number;
   d:number;
   e:number;
   f:any;
   
  ngOnInit() {
  }

  getColor()
  {
    return 'pink';
}
add()
{

  this.c= this.first + this.second;
  return this.c;
}
sub()
{
  this.d=this.first - this.second;
  return this.d;
}
multi()
{
  this.e=this.first * this.second;
  return this.e;
}

}