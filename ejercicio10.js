//Ejercicio 10

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Ingrese una frase: ' , (frase)=>{
    const palabras = frase.split(' ')
    const fraseCapatalizadas = palabras.map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ')
    console.log(`Frase capatalizada: ${fraseCapatalizadas}`)
})