import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {

  constructor(private httpObj:HttpClient) { }
 myuser:any[];
  ngOnInit() {
    //autoload (it will execute on page load)
    this.httpObj.get('http://cybotrix.com/webservice/getuser.php').subscribe(
      data=>{
        this.myuser = data as string[];
    
  }
    );
}
  alljsonuser:any[];
getjsondata()
{
  this.httpObj.get('../assets/user.json').subscribe(
     data=>{
       this.alljsonuser = data as string[];
      // alert(this.alljsonuser.length);

          }
  );
}

cardata:any[];
getexternaljson()
{
  this.httpObj.get("http://cybotrix.com/ios/car.json").subscribe(
    data=>{
      this.cardata = data as string[];
      
    }
  );
}
}
