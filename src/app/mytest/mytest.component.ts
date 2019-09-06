import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {
   serverId:number=10;
   serverstring:string='offline';
   getserverstatus()
   {
     return this.serverstring;
   }
   getColor()
   {
     return this.serverstring ='online' ? 'green' :'red';
   }
  constructor() {
    this.serverstring=Math.random() > 0.5 ? 'online' : 'offline' ;
   }

  ngOnInit() {
  }

}
