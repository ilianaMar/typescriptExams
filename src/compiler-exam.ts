const button = document.querySelector('button')!;

function clickHandler(msg: string){
    console.log('Clicked !' + msg);
}

if (button){
    button.addEventListener('click', clickHandler.bind(null, 'ehooo'));
}


