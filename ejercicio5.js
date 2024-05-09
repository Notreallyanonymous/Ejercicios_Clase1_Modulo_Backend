//Ejercicio 5

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Ingrese un cadena: " , (cadena) =>{
    const inicio = 2
    const longitud = 5
    const subcadena = cadena.substring(inicio, inicio+longitud);
    console.log(`subcadena es ${subcadena}`)
})