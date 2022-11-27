class Person{
    constructor(fname, lname){
        if(!Person.instance){
            this.fname = fname;
            this.lname = lname;
            Person.instance = this
        }
        return Person.instance;
    }
}

let p1 = new Person('Bella', 'Chado');
let p2 = new Person('Keza', 'Talitha');
console.log(p1 === p2);