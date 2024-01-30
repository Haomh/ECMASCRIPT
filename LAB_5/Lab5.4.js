var person = {
    firstName : "Hao",
    lastName: "Mai",
    set lastName(lastName) {
        this._lastName = lastName;
    },
    set firstName(firstName) {
        this._firstName = firstName;
    },
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
   

    }
    person.lastName ="Bin"
    person.firstName="Sin"
    console.log(` Tên đầy đủ là: `,person.fullName);
