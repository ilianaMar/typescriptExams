type Admin = {
    names: string[];
    previligies: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
    name: 'Iliana',
    startDate: new Date(),
    previligies: ['Creator'], 
    names: ['name1']
};

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function calculate(a: number, b: number):number;
function calculate(a: string, b: string):string;
function calculate(a: number, b: string):string;
function calculate(a: string, b: number):string;
function calculate(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string'){
         return  a.toString() +  b.toString();
    }
    return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee){
  if ('previligies' in emp){
    console.log(emp.previligies);
  }
  if('startDate' in emp){
    console.log(emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
    drive(){
        console.log('Driving ...');
    }
}

class Truck{
    drive(){
        console.log('Driving truck...');
    }

    loadCargo(amount: number){
        console.log('Load amount ...' + amount);
    }
}

type Vihicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function userVehicle(vehicle: Vihicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000);
    // }

    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

userVehicle(v1);
userVehicle(v2);

interface Bird {
    type: 'bird';
    flySpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed ;
    switch(animal.type){
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`The speed is ${speed}`);
}

moveAnimal({type: 'bird', flySpeed: 1000});
moveAnimal({type: 'horse', runningSpeed: 3000});

const paragraph = document.getElementById('message-output');
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
// const userInput = document.getElementById('user-input')! as HTMLInputElement;
// userInput.value= 'Hi';

const userInput = document.getElementById('user-input');
if(userInput){
    (userInput as HTMLInputElement).value= 'Hi there ';
}

interface ErrorContainer{
    [prop: string | number]: string;
}

const errorBag: ErrorContainer = {
    email: 'Invalid Email',
    username: 'Invalid username', 
    1: '1 is not allowed'
};

console.log(errorBag);

const fetchedUserData = {
    name: 'iliana',
    age: 38,
    job: {title: 'QA', description: 'automation engineer'}
};

console.log(fetchedUserData?.job?.description);
const input = '';
const input1 = input ?? 'default';
console.log(input1);