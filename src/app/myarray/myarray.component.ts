import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myarray',
  templateUrl: './myarray.component.html',
  styleUrls: ['./myarray.component.css']
})
export class MyarrayComponent implements OnInit {

  constructor() { }
total1:number;
total2:number;
  ngOnInit() {
        this.findtotal();
  }
  findtotal()
  {
    this.total1=this.myitem.length;
    this.total2=this.allitem.length;

  }
  msg:string="";

  myitem:any[]=["Apple","mango"];
  saveitem(name:string)
  {
    
    this.myitem.push(name);
    this.msg="item added successfully";
    this.findtotal();

  }
 delitem(index:number)
 {
   var de:boolean;
   de=confirm("Are u sure ?");
   if(de==true)
   {
     this.myitem.splice(index,1);
     this.msg="item removed successfully";
   }
   this.findtotal();

 }
 //multidimensional array
 allitem:any[]=[];
 newitem:any="";
 msg2:string="";
 saveanyitem(name:string, price:number)
 {
   this.newitem={"itemname":name, "itemprice":price};
   this.allitem=this.allitem.concat(this.newitem);
        this.msg2="item added successfully";
        this.findtotal();
}
     removeitem(index:number)
 {
   var de:boolean;
   de=confirm("Are u sure ?");
   if(de==true)
   {
     this.allitem.splice(index,1);
     this.msg2="item removed successfully";
   
   this.findtotal();
   }
   
 }
}//class end write before this

