// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var nuevoArray =[];   //Para actualizar el nuevo dato +1 creamos una nueva variable
for (var i = 0; i < array.length; i++){
  
  nuevoArray[i] = array[i] + 1;
}
return nuevoArray;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras.join(' '); // Agrega entre medio de cada elemento el espacio o lo que quieras poner
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
  
    if(elemento === array[i]){
    return true;
    }  
  }

  return false; // Tiene que salir del ciclo para que los que no compara lleve a false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma = 0; //Recorda que variable contador siempre comienza con 0
  for(var i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // promedio se suma todos los numeros y se divide por la cantidad que ha sido sumado
  // Tu código:
  var suma = 0;
  var promedio;
  for (var i = 0; i < resultadosTest.length; i++){
    
    suma = suma + resultadosTest[i];
    
  }
  promedio = suma / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var maximo = numeros [0]; // Colocar la variable como valor el primer elemento de la matriz numeros.
  for(var i = 0; i < numeros.length; i++){
   if(numeros [i] > maximo){    // Acá compara si numeros [i(segun el dato correspondiente)] es mayor que
                                // el primer elemento, entonces maximo cambia al valor de numeros [i] que 
                                // compare en if. Así hasta que encuentre quien no sea mayor. 
     maximo = numeros [i];
   }
  }
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1){ // si no hay argumentos es 0. 
                            // .length es impoetante ya que compara cuantos elementos hay, si no hay pone 0
    return 0;
  }
  var resultado = 1; //Es 1 porque al multiplicar por 0 devolveria siempre 0
  for(var i = 0; i<arguments.length; i++){
    resultado = resultado * arguments[i];
  } 
  return resultado;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Cuantos de esos elementos de la matriz son mayores a 18
  //Escribe tu código aquí
  var sumaElementos=0;
for(var i = 0; i < arreglo.length; i++){
  if (arreglo [i] > 18){ //Compara con el valor del elemento de la matriz con el 18
    sumaElementos++;
  }
}
return sumaElementos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){ //Tambien se puede hacer con if (numeroDeDia === 1 || ...===7){}
    case 1:
      return 'Es fin de semana';
      break;
    case 7:
      return 'Es fin de semana';
      break;
    default:
      return 'Es dia Laboral';
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let num = n.toString() //Lo vuelve una cadena de texto UTF-8 a todos los elementos de la matriz
  if(num.charAt(0) === "9"){ //.charAt(0) el 0 corresponde al primer caracter que figura en la cadena convertida 
                              //anteriormente. Entonces compara eso con el === '9' que esta escrito en texto
    return true
  }
  return false

  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for(var i = 0; i < arreglo.length; i++){

    if(arreglo[i] === arreglo[i+1]){
      return true;
    }else{
      return false;
    }
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  nuevoArray=[]; //Debe tener los [] para que se sepa que es un array y luego agregar los meses
  
  for (var i = 0; i < array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      nuevoArray.push(array [i]); //Push para agregar la nueva data 
    }
  }

  if(nuevoArray.length < 3){ //Recorda poner el .length para que compare la cantidad total de los datos
    return 'No se encontraron los meses pedidos';
  } else {
    return nuevoArray;
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  nuevoArray=[];

    for(var i = 0; i < array.length; i++){
      if(array[i] > 100){
        nuevoArray.push(array[i]);
      }
    }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  nuevoArray=[]; //Solo para agregar nueva data en nueva variable
  suma=numero; //Para ir sumando +2 solo al numero hay que poner una var contador y ponerle el dato de var numero. 
  for(var i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i){
      break;  //Para absolutamente todo (puede quedar poe ejemplo en i = 5 y no sigue)
    } else{
    nuevoArray.push(suma);
    }
  }
  if(i<10){ //Compara si el bucle termina antes que las 10 veces que dije, pone el mensaje:
    return 'Se interrumpió la ejecución';
  }else{
    return nuevoArray;
  }

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var suma=numero; 
  var array = [];
  for(var i = 0; i < 10; i++){

    if(i === 5){ //Entra directo al if
      
      continue;
    } else{
      suma= suma+2; // Hay que indicarle que si no es = a 5 que siga sumando
      array.push(suma);
    }
    
    
  }
  
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
