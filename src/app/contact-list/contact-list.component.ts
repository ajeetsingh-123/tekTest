import { Component, OnInit } from '@angular/core';
import { HomeServiceService} from '../home-service.service';
import { IContact} from '../home/home';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
   contact: any;
   _searchTerm: any;
  cnts: IContact[] = [];
  searchedCnt: IContact[]=[];
  cnt :any;
  constructor(public homeService:HomeServiceService) { }

  ngOnInit(): void {
     this.contact=this.homeService.getContact();
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

  deleteMovie(name:string) {

    const index = this.contact.findIndex(
         this.contact.name === name
    )

    if (index >= 0) {
        this.contact.splice(index, 1);
    }

}


        updateCnt(name:string,cnInfo:IContact ) {
          const cnt = this.getCnt(name);
          if (cnt) {
             cnt.mob =cnInfo.mob ;
          }
        }

}
