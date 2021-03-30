import { Component, OnInit } from '@angular/core';
import { HomeServiceService} from '../home-service.service';
import { User} from './contact';
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
    this.contact=this.homeService.getContact();
  }

  onSubmit(): void {

    //console.log(this.contact);
    //console.log(this.ContactForm.value);
    this.homeService.addContact(this.ContactForm.value);
    this.route.navigate(['/contact-list']);


  }
  
}
