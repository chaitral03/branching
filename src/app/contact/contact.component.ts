import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';//for webservices(api) client server communication

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private aobj:HttpClient) { }

  ngOnInit() {
    this.userlist();
  }
  alluser:any[]=[];
userlist()
{
  var url="datalist.json";
  this.aobj.get(url).subscribe(
    
       data=>{
        this.alluser=data as string[];

       }
    
  );
}
  }



