import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.css']
})
export class MymodalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*myuser:any[]=[
    {"name":"user 1","photo":"2.jpg"},
    {"name":"user 2","photo":"3.jpg"},
    {"name":"user 3","photo":"2.jpg"},
    {"name":"user 4","photo":"3.jpg"},
    {"name":"user 5","photo":"2.jpg"},
    {"name":"user 6","photo":"3.jpg"}

  ];
  userphoto:string;
  showdata(index)
  {
     alert(index);
      this.userphoto="<img src='../assets/"+this.myuser[index].photo+" 'class='image-responsive'>";
  }
  myimage:any[]=[];
/*showmodal()
{
  this.myimage=["2.jpg","3.jpg","2.jpg","3.jpg","2.jpg","3.jpg"];
}*/
}
