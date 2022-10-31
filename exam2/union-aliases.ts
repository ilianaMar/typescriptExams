type Combinebal = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';

function combine(input1: Combinebal, input2: Combinebal, resultConversion: ConversionDescriptor){
    let res ;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        res = input1 + input2
    } else {
        res = input1.toString() + input2.toString()
    }

    if (resultConversion === 'as-number'){
        return +res;
    }else {
        return res.toString();
    }
}

const combineAges = combine(20, 156, 'as-number');
console.log(combineAges)

const combineStrAges = combine('20', '156', 'as-number');
console.log(combineStrAges)

const combineNames = combine('ili', 'ana', 'as-text');
console.log(combineNames)