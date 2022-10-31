let userInput: unknown;
let userName: string;

userInput = 'Max';
userInput = 5;

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(name: string, code: number): never {
    throw {message: name, errorCode: code};
}

generateError('this is error', 500);
