/*
CREAR 5 FUNCIONES QUE RETORNEN LA SUMA DE 2 VALORES CON LOS SIGUIENTES OPERADORES ARITMETICOS
funcion suma, resta, multiplicacion, division, potencia
*/

/*
Crear un PROCEDIMIENTO donde se pidan 2 valores y estos se les pase a cada una de las funciones,
tambien imprimir el resultado de las funciones
- para obtener estos datos de a y b utilizar prompt
*/
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function potencia(base) {
  return base * base;
}

console.log('suma a + b = ', suma(10, 15));
console.log('resta a - b = ', resta(20, 5));
console.log('multiplicacion a * b = ', multiplicacion(2, 8));
console.log('Base potencia 2 = ', potencia(10));

function procedimiento() {
  let valor1 = parseFloat(prompt('Ingrese el primer valor'));
  let valor2 = parseFloat(prompt('Ingrese el segundo valor'));

  console.log('sumar a + b = ', suma(valor1, valor2));
  console.log('restar a - b = ', resta(valor1, valor2));
}

procedimiento();
