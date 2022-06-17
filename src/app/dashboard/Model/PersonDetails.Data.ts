import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class PersonDetailsService {
  

  constructor(private http:HttpClient) { }

  insertAddressBook(person:any){
    return this.http.post("http://localhost:8080/addressbook/add",person);
  }
  getAddress(){
    return this.http.get("http://localhost:8080/addressbook/get-all");
  }
  getAddressBookById(Id:number){
    return this.http.get("http://localhost:8080/addressbook/get/"+Id);
  }
  updateAddressBookById(Id:number,person : any){
    return this.http.put("http://localhost:8080/addressbook/edit/"+Id,person);
  }
  deleteAddressBookById(Id:number){
    return this.http.delete("http://localhost:8080/addressbook/delete/"+Id);
  }
}