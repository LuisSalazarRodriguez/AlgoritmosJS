let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombres = ['sebastian', 'jose', 'luis', 'pedro'];
let sabores = ['uva', 'melon', 'sandia'];
let prueba = [['zero', 1, 2, 3], 0, [0, 1, 2, 3], [0, 1, 2, 3]];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);

console.log('prueba', prueba[0][0]);
console.log('prueba', prueba[1]);
console.log('prueba', prueba[2][3]);

/* LENGTH */
console.log('length:',numbers.length); //longitud del array
/*PUSH */
numbers.push(11); //agregar numero al final del array
console.log('push:',numbers);
/*unshift */
numbers.unshift(11); //agregar numero al inicio del array
console.log('unshift:',numbers);
/*pop */
numbers.pop(); //eliminar el ultimo elemento de un array
console.log('pop:',numbers);
/*shift */
numbers.shift(); //elimina el primer elemento de un array
console.log('shift:',numbers);
/*splice */
numbers.splice(2, 2);
console.log('splice:',numbers);

let alumno = {
  nombre: 'sebastian',
  lastname: 'yabiku',
  age: 35,
  grade: 5,
  sex: 'm',
  getName: function () {
    return this.nombre;
  },
  getFullName: function () {
    return `${this.nombre} ${this.lastname}`;
  },
};

console.log('alumno.nombre', alumno.nombre);
console.log('alumno.nombre', alumno.lastname);
console.log('alumno.nombre', alumno.getName());

let profesor = {
  nombre: 'sebastian',
  lastname: 'yabiku',
  age: 35,
  grade: 5,
  sex: 'm',
  experience: [
    {
      college: 'santisima trinidad',
      age: 2022,
    },
    {
      college: 'recoleta',
      age: 2000,
    },
  ],
};

const alumnos = [
  {
    nombre: 'sebastian',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'jose',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'pedro',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'hector',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
];

console.log('alumnos', alumnos);

for (let index = 0; index < alumnos.length; index++) {
  console.log(alumnos[index]);
}
