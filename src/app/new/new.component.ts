import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  reagisterForm:FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder) { 
    this.reagisterForm=this.formbuilder.group({
      firstname:['',Validators.required]
    })
  }
  get h()
  {
    return this.reagisterForm.controls;
  }
  pageTest()
  {
    this.submitted = true;
    if(this.reagisterForm.invalid)
    {
      return true;
    }

}
}
