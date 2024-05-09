//Ejercicio 7

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Ingrese una cadena: ' , (cadena)=>{
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`Cadena Invertida ${cadenaInvertida}` )
})