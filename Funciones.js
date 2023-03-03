/* Que son las funciones: Son Bloqus de codigo que solucionan unproblema especififco para ser reutilizados, existen dos tipo de funciones declarativas y expresivas
Funciones Declarativas: Se declaran con la palabra reservaa function
como se declara una funcion declarativa: esta constituido por los siguientes elementyos:
1. Palabra reservada function
2. nombre de la funcion el cual sera guardado en memoria como refeerencia
3. Parametros estan envueltos en () son variables propias de una funcion  y deberan utilizarse en el contenido hacen referencia a los argumentos de la invocacion
4. contenido: esta envuelto por llaves {} contendra las lineas de codigo correspondientes a la logica del problema
5. valor retornado es un unico valor qaue devuelve la funcion cuando es llamada se lo especifica con la palabra reseervada return si no existe la funcion devolvera un valor undefined por defecto.
*/
// EJEMPLO:

// Declaracion
function suma (a,b){
    return a + b;
}
/*
function nombre (parametros){
    contenido
    return vallor
} 
*/

// de esta manera definimos la logfica de l funcion pero no la estamos utilizandpgenerar valores es necesario invocarla en el codigo segun sea necesario

// Para declarar una funcion declarativa se realiza de la siguiente manera:

//invocacion
console.log(suma(2,3));
//nombre(argumentos)
// la invocacion sirve para emplear una funcion con diferentes argumentos y guardarlos en una vaaiablle
//EJEMPLO

var resultado_1 = suma(5,5);
var resultado_2 = suma(10,15);
var resultlado_3 = suma(25,85);

console.log(resultado_1);
console.log(resultado_2);
console.log(resultlado_3);

// pueden existir funciones que simplemente se invocan, pero debes tener en cuenta que retornan por defecto undefined
// Ejemplo:
//declaracion
function saludar (nombre){
    console.log("Hola" + nombre)
}
console.log(saludar("JavaScript"));
console.log(saludar("Carlos"));

// Plantillas literales tambien se pueden utilizar platillas literales una nueva caracteristica del lenguaaje para utilizar variables dentro de ${variable} entre tildes invertidaas
//Ejemplo:

console.log(`Hola ${"juan"}`);

/* QUE SON LAS FUNCIONES EXPRESIVAS O ANONIMAS
Consiste en guardar la funcion en una variable, tienen laa misma declaracion e invocacion que las funciones declarativas la diferencia consiste en no especificar un nombre en laa funcionque que utiliza el nombre de la variable EJEMPLO:

// declaracion
*/

var operacion = function(a,b){
    return a + b
}

// invocacion

var resultado = operacion (10,45);
console.log(resultado);

