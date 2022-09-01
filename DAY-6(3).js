class person{
    constructor(Name,Age,Gender,Qualification,Area){
        this.Name=Name;
        this.Age=Age;
        this.Gender=Gender;
        this.Qualification=Qualification;
        this.Area=Area;
    }
getdetails() {
    return `Name: ${this.Name},
    Age: ${this.Age},
    Gender: ${this.Gender},
    Qualification: ${this.Qualification},
    Address: ${this.Area}`;
    }
}

var Person1Detail= new person("Dhanush","21","Male","BE","chennai");
var Person2Detail= new person("Gokul","22","Male","BE","Virudhunagar");
console.log(Person1Detail.getdetails());
console.log(Person2Detail.getdetails());