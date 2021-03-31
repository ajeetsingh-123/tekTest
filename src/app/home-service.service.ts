import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IContact } from './home/home';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {      

  allUser: any;
 
  
  constructor(private _http :HttpClient) {
 
   }
   ngOnInit(){
    // this.allUser=this.getUser();
   }

  public getUser() 
  {
  return this._http.get("http://localhost:3000/details")
  }

  public createUser(user:any) 
  {
    return this._http.post("http://localhost:3000/details",user )
  }
  public updateUser()
  {

  }
  public deleteUser(uid:any) 
  {
    return this._http.delete("http://localhost:3000/details/" + uid.id)
  }

  public getLatestUser(){
    this.getUser().subscribe((response)=>{
      this.allUser=response
      //console.log(this.allUser[0])
       return this.allUser
    })
  }
}