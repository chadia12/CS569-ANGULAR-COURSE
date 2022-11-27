class User{
    constructor(name){
        this.name = name;
    }log(){
        console.log(`User: ${this.name}`);
    }
}

class DecoratedUser {
    constructor(user, street, city){
        this.user = user;
        this.name = user.name;
        this.street = street;
        this.city = city;
    }
    log(){
        console.log(`Decorated User: ${this.name},  ${this.street},  ${this.city}`);

    };
}

const user = new User('Chadia');
user.log();

const decorated = new DecoratedUser(user, "colony", 'charlotte');
decorated.log();