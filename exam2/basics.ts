function add(num1: number, num2: number,showResult: boolean, printText: string){
    console.log(`Num1 is ${typeof num1} and Num2 is ${typeof num2}`);
    const res = num1 + num2;
    if (showResult){
        console.log(`${printText} ${res}`);
    }else{
        return res;
    }
    
}

let number1 = 4;
const number2 = 4.3;
const printResult = true;
const text = 'This is final result'
add(number1, number2, printResult, text);

