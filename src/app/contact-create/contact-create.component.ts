import { Component, OnInit } from '@angular/core';
import { HomeServiceService} from '../home-service.service';
import { User} from './contact';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule,FormControl,FormGroup, NgForm,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact:any=[];
  ContactForm=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    mob:new FormControl(''),
    email:new FormControl('')
  });
  constructor(public homeService:HomeServiceService,private route: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.addUser(this.ContactForm.value);
    this.route.navigate(['/contact-list'])
  }
 
  addUser(obj:any)
  {
    this.homeService.createUser(obj).subscribe((response)=>{
      console.log(this.homeService.getLatestUser());
    })
  }
}
