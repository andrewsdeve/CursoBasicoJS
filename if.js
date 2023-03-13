if(false){
    console.log("Soy True");
}else{
    console.log("Soy False");
}

// USO DEL ELSE IF

let edad =20;
if(edad === 18){
    console.log("Pudes Votar")
}else if(edad >= 18){
    console.log("Puedes votar de nuevo")
}else{
    console.log('Eres menor de edad')
}


/* operador ternario */

let numero = 2;
let resultado1 = numero === 1 ? "Soy uno" : "No soy Uno";
console.log(resultado1)

// Hacer un juego de piedra papel o tijeras

let humano = "piedra";
let cpu = "papel";
let resultado;

function piedraPapel (arg1, arg2){
    if(humano === cpu){
        return resultado = 'Empate'
    }else if(humano == 'piedra' && cpu == 'papel' || humano == 'papel' && cpu == 'tijera' || humano == tijera && cpu == 'piedra'){
        return resultado = 'Gana CPU'
    }else if(humano == 'piedra' && cpu == 'tijera' || humano == 'papel' && cpu == 'piedra' || humano == 'tijera' && cpu == 'papel'){
        return resultado = 'Gana HUMANO'
    }else{
        return resultado = 'Ingrese valores correctos'
    }
}


console.log(piedraPapel('piedra','papel'));


