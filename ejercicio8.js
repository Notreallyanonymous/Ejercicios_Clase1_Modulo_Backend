//Ejercicio 8

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Ingrese una palabra: ' , (palabra)=>{
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabraInvertida === palabra){
        console.log("Es un palindromo");
    }
    else{
        console.log("No es un palindromo");
    }
})