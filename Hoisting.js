/* Hoisting: Es un termino para describir que las declaraciones de vareiables yfunciones son desplazadas a la parte superior de scope mas cercano, scope global o de funcion esto sucede solamente con las declaraciones y no con las asignaciones:

el codigo permannece igual solo es una terpretacion del motor de javascript  en el caso de las variables solamente sucede cuando son declaradas con var

HOISTING EN VARIABLES DECLARADAS CON VAR:

Mira el siguiente codigo cual cree que sea el resultado*/

console.log(nombre);
var nombre = "carlos"; // no se puede invocar algo que no se ha declarado

/* lo que JS esta haciendo es: */

//Hoisting: Declara y asigna undefined
var nombre = undefined;
console.log(nombre);
nombre = "Andres";

/* HOISTING EN FUNCIONES: */

console.log(saludar());

function saludar(){
    return 'Hola!!!';
}

/* la respuesta es Hola porque al invocar una funcn que no esta declarada JS la eleva y por eso podemo invocar una funcion antes de declararla, pero lo que realmente sucede es que JS guarda la funcion en memoria en la fase de creaciode un constexto de ejecucion no signa undefined como las variables

BUENAS PRACTICAS: el tema de hoisting solo sucede con las declaracion de variables y cunciones por lo que se ** recominda declarar las varibles y las funciones lo mas arriba posible del codigo ** para evitar errores

tambien el tema de hoisting ya esta solucionado con las nuevas forma de declarar variables con let y const



*/