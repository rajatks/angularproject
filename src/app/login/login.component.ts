import { Component, OnInit } from '@angular/core';
import { Register } from '../register/register';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  disp1:boolean=true;
  disp2:boolean=false;
  errorMsg:string="";
 us:string="admin";
 ps:string="admin";
  register:Register={"id":1,"name":"", "age":1,"dob":"","pass":"","cpass":"","email":""};
  registers:Register[]=[];
  selectedOption:string="";
 
  constructor(private route:Router,private restservice:RestService,private lc:LogincheckService) { }
  
  selectChangeHandler(event:any){
    this.selectedOption=event.target.value;
     
  }



  ngOnInit() {
    this.form=new FormGroup(
      {
        userid:new FormControl("",Validators.required),
        pass1:new FormControl("",Validators.required)
      }
    )
  }
     
  onSubmit(myform){

    
    this.restservice.getUser(myform.userid)
    .subscribe(
      (response)=>{
        this.register=response.json()
        if(myform.userid==this.register.id && myform.pass1==this.register.pass && this.selectedOption==="users"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully');
            this.lc.setlogin(true);
          this.route.navigate(['service'])

        }
        if(myform.userid==this.us && myform.pass1==this.ps && this.selectedOption=="admin"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully');
            this.lc.setlogin(true);
          this.route.navigate(['employee'])
        }
        if(myform.userid==this.register.id && myform.pass1==this.register.pass && this.selectedOption=="manager"){
          this.disp1=!this.disp1;
          this.disp2=!this.disp2;
          console.log('successfully');
            this.lc.setlogin(true);
          this.route.navigate(['employee'])
        }
      }
    )
  }
}
