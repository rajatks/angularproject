import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private route:Router,private restservice:RestService,private lc:LogincheckService) { }

  ngOnInit() {
  }
  disp1:boolean=true;
  disp2:boolean=false;
 toggle()
 {
  this.lc.setlogin(false);
  this.route.navigate([''])
 }
}
