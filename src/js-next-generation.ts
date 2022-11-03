// const add = (a: number, b: number) => { 
//     return a + b;
// }

// const add = (a: number, b: number = 4) => a + b;

// const printOutput: (a: number|string) => void = output => console.log(output);

// printOutput(add(3));

const submitButton = document.querySelector('button')!;
if(submitButton){
    submitButton.addEventListener('click', event =>console.log(event));
}

const arr1 = ['test', 'test1'];
const arr2 = ['test2'];

arr1.push(...arr2);
console.log(arr1);

const add = (...numbers: number[]) =>{
    return numbers.reduce((curRes, curValue) => {
        return curRes + curValue;
    }, 0)
}

console.log(add(8, 9,89, 0.7));
const [el1, el2, ...remainArr] = arr1;
console.log(el1, el2, remainArr);

const person = {
    firstName: 'iliana', 
    age: 38
}

const {firstName: userName, age} = person;
console.log(userName, age);
