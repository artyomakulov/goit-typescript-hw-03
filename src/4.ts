class Key {
    private signature:number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature
    }
}

class Person {
    private key: Key;

    constructor(key:Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key : Key;
    tenants: Person[] = []

  

    comeIn(person:Person): void {
        if (this.door === true) {
            this.tenants.push(person)
        } else {
            return
        }

    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};