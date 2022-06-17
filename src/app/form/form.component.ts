import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonDetailsService } from '../dashboard/Model/PersonDetails.Data'; 
import { PersonDetails } from '../dashboard/Model/PersonDetails';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  person: PersonDetails = new PersonDetails("","","","",0,"",0);
  Id: any = this.route.snapshot.paramMap.get("Id")

  constructor(private router : Router ,private service: PersonDetailsService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }
  onDashboard() {
    this.router.navigate(["dashboard"]);
  }
  onAdd(){
    console.log(this.person);
    this.service.insertAddressBook(this.person).subscribe((data: any)=>
    {
      console.log("Data added successfully");
      this.router.navigate(["dashboard"]);
    });
    }
getAllDetails(){
  this.service.getAddress().subscribe((data: any) =>{
    console.log("Data retrieved successfully");
    this.person= data;
    this.router.navigate(["dashboard"]);
  });
}

onUpdate() {
  this.service.updateAddressBookById(this.Id,this.person).subscribe((data:any) => {
     console.log("Data Updated Sucessfully !");
  this.router.navigate(["dashboard"]);
});
}
}
