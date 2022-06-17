export class PersonDetails  {
    

    FirstName : String;
    LastName : String;
    City : String;
    State : String;
    Zip : number;
    Email : String;
    Phone : number;
    
    
    constructor(
        FirstName : String,
        LastName : String,
        City : String,
        State : String,
        Zip : number,
        Email : String,
        Phone : number,
    )
    {
        this.FirstName =FirstName ;
        this.LastName =LastName;
        this.City =City;
        this.State =State;
        this.Zip =Zip;
        this.Email =Email;
        this.Phone =Phone;

    }
    
}