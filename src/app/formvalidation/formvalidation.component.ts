import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,Validators} from '@angular/forms'
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  reagisterForm:FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.reagisterForm=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      middlename:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      gender:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required],
      tnc:['',Validators.required]
      

    });
  }
  get f()
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
