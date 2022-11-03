// type AddFn = (a:number, b: number) => number;

interface AddFn {
    (a:number, b: number): number;
}

let sum : AddFn;

sum = (a:number, b: number) =>{
    return a + b;
}

console.log(sum(90, 190));


interface Greatable extends Named{
    greeting(phase: string): void;
}

interface Named {
    readonly name?: string;
    outputedName?: string;
}

class Person implements Greatable {
    static age = 30;
    name?: string;
    constructor(public n?: string){
        if(n){
            this.name = n;
        }
    }

    greeting(phase: string): void {
        if (this.name){
            console.log(`${phase} ${this.name}`);
        }else{
            console.log(phase)
        }
        
    }
}

let user1: Person;
// user1 = {
//     name: 'Iliana', 
//     greeting(phase: string) {
//         console.log(`${phase} ${this.name}`);
//     } 
// }

// user1.greeting('i am');

user1 = new Person('John');
user1.greeting('hey who are you');
console.log(user1);

let user2 = new Person('Iliana');
user2.greeting('Hi my name is')

let user3 = new Person();
user3.greeting('Hiii');