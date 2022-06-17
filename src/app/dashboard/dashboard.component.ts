import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PersonDetailsService } from './Model/PersonDetails.Data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private service: PersonDetailsService) { }

  person: any;

  ngOnInit(): void {
    this.service.getAddress().subscribe((data: any) => {
      console.log(data);
      this.person = data;
    });
    console.log(this.person)
  }
  
 
 onAddperson() {
    //it will navigate imperatively in your component classes
    this.router.navigate(["form"]);
  }
  deleteAddress(Id: number) {
  console.log(Id);
  this.service.deleteAddressBookById(Id).subscribe((data: any) => {
    this.ngOnInit();
     //when a user get deleted from databse it will print data deleted successfully in console
    console.log("Data Deleted Sucessfully") 
  this.router.navigate(["dashboard"]);
  });
}
editAddress(Id: number) {
this.router.navigate(["update", Id]);
}
}
