//Ejercicio 4

const readline = require('readline');
const { CLIENT_RENEG_WINDOW } = require('tls');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Ingrese un frase: " , (frase) =>{
    rl.question("Ingrese la palabra que desea reamplazar: " , (palabraCambiar)=>{
     rl.question("Ingrese la nueva palabra: " , (nuevaPalabra)=>{
        const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
        console.log('frase modificada: ' , fraseModificada)
     })
    })
})