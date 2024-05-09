//Ejercicio 6

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Ingrese una frase: ' , (frase)=>{
    const palabras = frase.split(" ")
    console.log(`Numero de palabras: ${palabras.length}`)
})