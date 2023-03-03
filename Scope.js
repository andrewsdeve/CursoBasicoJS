/* SCOPE: Es uno de los entornos donde llas variables tienen alcance dentro del codigo de JS, en otras palabras deterrmina qwue vallor tendra la variable dependiendo donde se encuentre, si hace referencia a una variable el motor de javascript buscara s decracion en el entorno mas cercano yh seguria buscando en el entorno mas lejanos hasta llegar a la linea de codigo que la variable este declarada pero no en viceversa a este proceso se llama CADENA DE SCOPE

tipos de escope: existen dos tipos de scope  GLOBAL Y LOCAL el scope local puede ser de funcion o de bloque, un bloque es toda la porcion de codigo que esta encerrada entre llaves {} estos pueden ser los bloques: funcion if, else, while y for
1. SCOPE GLOBAL: las variables globales son aquellasque se encuentras declaradas fuera de los bloques de codigo o funciones, el scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa

mire el siguiente ejemplo 


*/

var nombre = "JavaScript";
function saludar (){
    console.log("hola" + nombre);
}
saludar()

/* En el anterior ejemplo podemos ver que la variable nombre esta fuera de la funcion y tiene un scope global tene en cueta que JS busca de un scope cercano a uno legano , pero no viceversa, entonces una variable global puede ser accedida en cualquier parte porque el scope es global es el ultimo entorno donde javascript busca una variable  */


/* SCOPE LOCAL: las variables de scope local son aquellas que se encuentran  dentro del bloque de codigo o funciones el scope local, es el entorno donde las viariables locales solo se puede acceder desde una funcion o bloque de programa, observa el siguente codigo y piensa cual sera el resultado*/

function saludo(){
    var nombres = "Santy Martinez";
    console.log(nombres);
}
saludo();
//console.log(nombres); aqui gera un error dereferencia nombres is not defined

/* esto sucede porque la variable nombres tiene un scope local, por lo que sollo se pede acceder dentro de la misma, por eso el alcance de una funcion local es el lugar donde la funcion fue decalrada */

// Proximos pasaos el tema de scope es amplio  y solo se abarcara un poco sin tener en cuenta su comportamiento con las nuevas declaraciones de variables let y const 
// recomienda el curso de Closures y Scope en JavaScript 
