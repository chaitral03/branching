import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor( private obj:HttpClient) { }

  ngOnInit() {
    this.userlist();
    
  }
  alluser:any[]=[];
  msg:string="please wait loading..."
userlist()
{
  var url="http://localhost:3000/details";
  this.obj.get(url).subscribe(
    
       data=>{
        this.alluser=data as string[];
        this.msg="data loaded successfully";

       }
    
  );
}
saveuser(name:string,mobile:number,email:string,city:string,message:string)
{
  this.msg="please wait sending...";
  var jsondata={"name":name,"mobile":mobile,"email":email,"city":city,"message":message};
  var url="https://my-json-server.typicode.com/typicode/demo/posts";
  this.obj.post(url,jsondata).subscribe(
    
       data=>{

        this.userlist();//to reload the list
        this.msg="data sent successfully...";

       }
    
  );
}
deluser(id:number)

{
  var sts = confirm("Are you sure?");
  if(sts==true)
  {
    this.msg="please wait processing....";
    var jsondata={"id":id};
    var url="http://localhost:3000/details"
    this.obj.delete(url,).subscribe(
      
         data=>{
          this.msg="data deleted successfully...";
  
          this.userlist();//to reload the list
  
         }
      
    ); 
  }
}
userdata:any;
viewdetails(i:number)
{
  //var name=this.alluser[i].name;
  //var mobile=this.alluser[i].mobile;
  this.userdata="";
this.userdata +="<p> user id:"+ this.alluser[i].id+"</p>" ; 
this.userdata +="<p> full name:"+this.alluser[i].name+"</p>" ; 
this.userdata +="<p> full name:"+this.alluser[i].mobile+"</p>" ; 
this.userdata +="<p> full name:"+this.alluser[i].email+"</p>" ; 
this.userdata +="<p> full name:"+this.alluser[i].message+"</p>" ;
}
namedata:string;
mobiledata:any;
emaildata:string;
citydata:string;
messagedata:string;
userid:number;
editdetails(i:number)
{
   this.namedata=this.alluser[i].name;
   console.log(this.namedata);
   this.mobiledata=this.alluser[i].mobile;
   this.emaildata=this.alluser[i].email;
   this.citydata=this.alluser[i].city;
   this.messagedata=this.alluser[i].message;
   this.userid=this.alluser[i].id;
}
  updateuser(name:any,mobile:any,email:any,city:any,message:any,id:any)
  {
    this.msg="please wait updating";
    var jsondata = {"name":name,"mobile":mobile,"email":email,"city":city,"message":message,"id":id}
    var url="../assets/user.json";
    this.obj.post(url,jsondata).subscribe(
  
         data=>{
          this.msg="data sent successfully...";
  
          this.userlist();//to reload the list
  
         }
      
    );
  }

}
