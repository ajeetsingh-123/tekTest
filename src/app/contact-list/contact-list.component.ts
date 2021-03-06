import { Component, OnInit } from '@angular/core';
import { HomeServiceService} from '../home-service.service';
import { IContact} from '../home/home';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
   contact:any
   arr:IContact[]=[];
   _searchTerm: any;
  cnts: IContact[] = [];
  searchedCnt: IContact[]=[];
  cnt :any;
  userObj={
    name:'',
    address:'',
    mobile:'',
    email:''

  }
  constructor(public homeService:HomeServiceService,private route: Router, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
   
      this.contact=this.homeService.getUser().subscribe((response)=>{
          this.contact=this.homeService.getUser().subscribe((response)=>{
            this.updateUsersList(response)
          })
      });
    
  }
  updateUsersList(response:Object){
         this.contact=response  
          this.arr=this.contact
          this.searchedCnt=this.contact;
  }
  get searchTerm(): string {
        return this._searchTerm;
    }

    set searchTerm(value: string) {
      this._searchTerm = value;
      this.searchedCnt = this.searchTerm ? this.searchCnt(this.searchTerm) : this.contact;
  }

  searchCnt(searchby: string): IContact[] {
    searchby = searchby.toLocaleLowerCase();
    return this.contact.filter((cnt: IContact) => cnt.name.toLocaleLowerCase().indexOf(searchby) !== -1);
  }

  getCnt(name:string): IContact {
  const cnt = this.contact.find(
       this.contact === name
  )
  return cnt;
}

  deleteUser(user:any){
    this.homeService.deleteUser(user).subscribe(()=>{
      this.homeService.getUser().subscribe((response)=>{
        this.updateUsersList(response);
      });
    })
  }
}
