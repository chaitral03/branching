import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
mytest()
{
  var a:string="Hello";
  for(var i=0;i<a.length;i++)
  {
    alert(a[i]);
  }
}
mytest2()
{
  

  var item:any=["Apple","mango"];
  for(var i=0;i<item.length;i++)
  {
    alert(item[i]);
  }
}
}//class end
