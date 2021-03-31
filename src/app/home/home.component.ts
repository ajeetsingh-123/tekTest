import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

import { IContact} from './home';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
        name:string="";
        address:string="";
        email:string="" ;
        mob:number=0;
        details:any=[];
   
  constructor(private homeService:HomeServiceService) { }

  ngOnInit(): void {
  //   this.details=this.homeService.getContact();
  //  console.log(this.details)
  }
  
}
