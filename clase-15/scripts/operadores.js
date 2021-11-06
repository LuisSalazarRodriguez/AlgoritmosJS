//OPERADORES ARITMETICOS
let a = 10;
let b = 3;
let nombre = 'Luis';
let edad = 30;

console.log('OPERADORES ARITMETICOS');
console.log(a + b); // 5
console.log(a - b); // -1
console.log(a * b); // 6
console.log(a / b); // 0.66666666666666
console.log(a % b); // 2
console.log(a ** b); // 8

//COMPARACION
console.log('COMPARACION');
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //compara valor
console.log(a === b); //compara valor como tipo
console.log(a != b);
console.log(a !== b);

//COMPARADORES LOGICOS
console.log('COMPARADORES LOGICOS');
console.log(a > b && nombre == 'Luis' && edad >= 30); // true
console.log(a > b || (nombre == 'Jose' && edad >= 30)); // true

console.log(!(a > b && edad > 30)); //true
console.log(!false);
console.log(!true);
