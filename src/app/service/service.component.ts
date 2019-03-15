import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private lc:LogincheckService) { }

  ngOnInit() {
  }

}
