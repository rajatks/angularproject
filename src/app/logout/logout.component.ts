import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private lc:LogincheckService) { }

  ngOnInit() {
  }

  

}
