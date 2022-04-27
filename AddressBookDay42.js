class AddressBookDay42
{
    FirstName;
    LastName;
    Address;
    City;
    State;
    Zip;
    PhoneNumber;
    Email;

    constructor(...params)
    {
        this.FirstName=params[0];
        this.LastName=params[1];
        this.Address=params[2];
        this.City=params[3];
        this.State=params[4];
        this.Zip=params[5];
        this.PhoneNumber=params[6];
        this.Email=params[7];
    }
    get FirstName(){
        return this._FirstName;
    }
    set FirstName(FirstName){
        let FirstNameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(FirstNameRegex.test(FirstName))
        this._FirstName=FirstName;
        else throw 'Name is incorrect!';
    }
    get LastName(){
        return this._LastName;
    }
    set LastName(LastName){
        let LastNameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(LastNameRegex.test(LastName))
        this._LastName=LastName;
        else throw 'Name is incorrect!';
    }
    get Address(){
        return this._Address
    }
    set Address(Address){
        let AddressRegex=RegExp('^[A-Z a-z]{4,}$');
        if(AddressRegex.test(Address))
        this._Address=Address;
        else throw 'Address is incorrect!';
    }
    get City(){
        return this._City
    }
    set City(City)
    {
        let CityRegex=RegExp('^[A-Z a-z]{4,}$');
        if(CityRegex.test(City))
        this._City=City;
        else throw 'City is incorrect!';
    }
    get State(){
        return this._State
    }
    set State(State)
    {
        let StateRegex=RegExp('^[A-Z a-z]{4,}$');
        if(StateRegex.test(State))
        this._State=State;
        else throw 'State is incorrect!';
    }
}
    