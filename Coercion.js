/* La Coercion  consiste en transformar de un tipo de dato a otr de una variable existen dos tipo de coercion implicita y explicita

COERCION IMPLICITA: la coercion implicita consiste en la transformacion de tipos mediante la ayuda de JS, esto ocurre en operaciones de diferentes tipos, ya qaue es un lenguaje debil y dinamicamente tipado

al momento de complicar el codigo el motor de JAVASCRIPT si encuentra alguna incoherencia (Una suma de un numero con un string )el motor lo interpreta a su manera y arroja un valor que puee ser erroneo algunos ejemplos de coercion implicita son los siguientes:

*/
 4 + "7";
 4 * "7";
 2 + "true";
 false - 3;
 !3
/* Para evitar esto realiza la coercion explicita para manejar tipos de datos iguales antes de realizar cualquier operacion */


/* COERCION EXPLICITA:

La coercion explicita es la transformacion de tipos de datos que contgrolamos el resuldo para realizar estas transformaciones utrilizas las funciones Number(), String(), y boolean(), para convrtir a tipo numero string y logico respectivamente*/

Number("47");
String(51);
Boolean(1)

// se puede utilizar la palabra reservada typeof para comprobar el tipo de dato transformado+

typeof Number('47');
console.log(typeof Number('47'));

