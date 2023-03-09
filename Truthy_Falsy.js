/* Los valores Truthy falsy son valores verdaderos y falsos cuando se realiza una coercion de cualquier tipo a booleano, espectivamente esto es importante para manejar condicionales ya que una estructura condiocnal evalua si un valor es verdadero o falso en un contexto booleano

QUE SON LOS VALORES FALY:  un valor falsy es aque que es falso en un contexto booleano eston son 0. " " (String vacio ), false , NaN, Undefined o null
*/

// Coersion explicita
Boolean(0);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);
Boolean(false);

/* tambien puede realizar una coercion implicita con el operador d asinacion ( !), pero solo es para que la conococes no es recomendable */
/* QUE SON LOS VALORES TRUTHY:

Un valor truthy es aquel que es verdadero en un contexto booleano son todos los valores que no sean falsy que especifiquemosen la anterior accion
*/

//Coersion Explicita
Boolean(12);
Boolean("Hola");
Boolean(true);
Boolean(function hola(){});
Boolean({a:1, b:2});
/* cabe recalcar que en JS todo valor que no sea falsy es truthy incluyendo las estructguras vacias de array y objetos */;

