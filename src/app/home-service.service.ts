import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IContact } from './home/home';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {      
public contacts: IContact[]=[
   {name:"Ajeet", address: "ajeet details", mob: 1234567, email:"ajeet@xyz.com" },
   {name:"rohit", address: "rohit details", mob:1234567, email:"rohit@xyz.com" },
   {name:"rahul", address: "rahul details", mob:1234567,email:"rahul@xyz.com" },
   {name:"krishna", address: "krish details",mob:234567, email:"krish@xyz.com" },
   {name:"abc", address: "abc details",mob:1234567, email:"abc@xyz.com" }
 ]
 
  
  constructor() { }
  
  public getContact() :Array<{name:string, address:string, mob:number,email:string}>
  {
    return this.contacts;
  }

  public addContact(contacts:any) 
  {
    this.contacts.push(contacts);
  }

  public deleteContact(contacts:any) 
  {
    this.contacts.pop();
  }


  // public getCnt(searchText:any){
  //   const cnt = this.getContact().find(cnt => cnt.name=== searchText );
  //       return cnt;
  //   }


}
