import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowserver=false;
serverCreationStatus="no status created";
servername="testserver";
serverCreated=false;
servers = ['servername1'];
  constructor() {
    setTimeout(() => {
      this.allowserver=true;
    },3000);
   }

  ngOnInit() {
  }
onCreaterServer()
{
  this.serverCreated=true;
  this.servers.push(this.servername);
  this.serverCreationStatus="server status is created" + this.servername;
}
onupdateservername(event:Event){
  this.servername=(<HTMLInputElement>event.target).value;
}
}
