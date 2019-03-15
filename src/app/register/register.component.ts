import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RestService } from '../rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'


import { Router } from '@angular/router';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  register:Register={"id":1,"name":"", "age":1,"dob":"","pass":"","cpass":"","email":""};
  registers:Register[]=[];
  errorMsg:string="";
  form;
  constructor(private restservice:RestService) { }
  
  ngOnInit() {
  
    this.form=new FormGroup(
      {
        id : new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(1)
        ])),
        name: new FormControl("",Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(5),
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        age: new FormControl("",this.textvalitator),
        dob :new FormControl("",),
        pass:new FormControl("",),
        cpass :new FormControl("",),
        email:new FormControl("",)
      }
    );
  }
  onSubmit(myform)
  {
    console.log('hello');
    let register1=new Register(myform.id,myform.name,myform.age,myform.dob,myform.pass,myform.cpass,myform.email)
    this.restservice.postuser(register1)
    .subscribe(
      (response:any)=>console.log('put susscessful'),
    )
  }
  
  
  textvalitator(control)
  {
    if(control.value.length>2)
    {
      return {'lastname':false}
    }
  }
}
