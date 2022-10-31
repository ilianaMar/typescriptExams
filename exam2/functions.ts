function add(n1: number, n2: number): number{
    return n1 +n2;
}

function printResult(num: number): void{
    console.log('Result is ' + num);
}

function addAndHandles(n1: number, n2: number, cb:(a: number) => void){
    const res = n1 + n2;
    cb(res)

}

printResult(add(4, 5))
let combineRes: (a: number, b: number) => number;
combineRes = add;
// combineRes = printResult;
// combineRes = 4;
console.log(combineRes(8, 8))
addAndHandles(2, 3 , (result) =>{
    console.log(result);
    return 'dada';
});