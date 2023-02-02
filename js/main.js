// Proposición de ejercicio: Genera un programa que te pida 10 nombres y 
// los guarde en un array, finalmente muestra los 10 nombres por consola.


// let nombres = [];
// let nombre;

// for (i = 0; i < 10; i++){

//     nombre = prompt("Introduce un nombre para el Array");
//     nombres.push(nombre);

// }

// console.log(nombres)

// Vamos a crear una función que valide que un
// número de DNI y una letra son compatibles para
// ello, necesitamos el siguiente algoritmo.
// 1. Realizar el módulo del número del DNI
// entre 23.
// 2. El resultado de ese módulo es la posición
// del siguiente array.
// TRWAGMYFPDXBNJZSQVHLCKET

// let dni = prompt("Introduce el número de tu DNI");
// let letra = prompt("Introduce la letra de tu DNI").toUpperCase();
// let modulo = (dni % 23);

// let arrayDni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J",
// "Z","S","Q","V","H","L","C","K","E","T"];

// let resultado = (letra == arrayDni[modulo]) ? "El DNI es correcto" : "El DNI es incorrecto"

// console.log(resultado)


// Proposicion de Ejercicio: Genera una aplicación que te pida la edad y 
// el pais donde vives, en base a eso te responderá si es legal por tu 
// parte adquirir cerveza, además también te dirá si eres o no mayor de edad. 
// Toma como referencias Estados Unidos (21) y Europa (18)

// let edad = parseInt(prompt("Introduce tu edad"));
// let pais = prompt("Introduce el país donde vives")

// if (edad > 21) {
//     console.log('Puedes beber cerveza');
// } else if ((edad < 18) && (pais === "Europa")) {
//     console.log ("No puedes beber cerveza")
// } else if ((edad < 21) && (pais === "Estados Unidos")){
//  console.log("No puedes beber cerveza")
// }

// if ((edad >= 18) && ((pais === "Europa") || (pais === "Indianapolis"))) {
//     console.log ("Si puedes beber cerveza")
// } else if (edad >= 21) {
//     console.log("Si puedes beber cerveza")
// } else {
//     console.log("No puedes beber cerveza")
// }