/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(perro= "no hay mensaje") {
   // Debe retornar un string.
   // Tu código:
   let bienvenido="te damos la bienvenida";

   console.log  (bienvenido +" "+ perro  );

}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   let z = x+y;
   return(z) ;
   // Tu código:
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
  return  x-y;

}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x/y
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.

   // Tu código:
   return x*y;

}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

let resultado ;

resultado = suma( 8, 9);
console.log(resultado);

let resultado2= "";
devolverString ( "celular");
 let resultado3 ;
 resultado3 = resta (8,2);
 console.log (resultado3);

 let resultado4 ;
 resultado4 = multiplica (8,5);
 console.log (resultado4);

let resultado5 ;
resultado5 = divide (144/2,8);
console.log (resultado5)
