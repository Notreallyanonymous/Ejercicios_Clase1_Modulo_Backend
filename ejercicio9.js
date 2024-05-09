//Ejercicio 9

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Ingrese una palabra: ' , (palabra)=>{
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales? vocales.length:0;
    console.log(`Numero de vocales ${numeroVocales}`)
})