class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.`
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
let colorName: string = Color[2];


let notSure: any = 4;

// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

function warnUser(): void {
    console.log("This is my warning message");
}

warnUser()
let user = new Student(fullName, "M.", notSure);

document.body.textContent = greeter(user);