function algoritmo1(a, b) {
  return a + b;
}
console.log('algoritmo1 - SUMA:', algoritmo1(10, 15));

function algoritmo2(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}
console.log('algoritmo2 - NOTAS:', algoritmo2(15, 20, 05, 10));

function algoritmo3(base, altura) {
  return base * altura;
}
console.log('algoritmo3 - Area de un rectángulo:', algoritmo3(10, 2));

function algoritmo4(base, altura) {
  return (base * altura) / 2;
}
console.log('algoritmo4 - Area de un triángulo:', algoritmo4(25, 2));

function algoritmo5(radio) {
  let pip = 3.1415;
  return pip * (radio * 2);
}
console.log('algoritmo5 - área de una circunferencia', algoritmo5(20));

function algoritmo6(sueldo, horas) {
  let diasSemana = 7;
  let diasMes = 30;
  let horasTrabajadas = 8;
  return (sueldo / diasMes / horasTrabajadas) * horas * diasSemana;
}
console.log('algoritmo6 - Sueldo semanal', algoritmo6(1000, 8));

function algoritmo7(metros) {
  let pulgadas = 0.0254;
  return metros / pulgadas;
}
console.log('algoritmo7 - valor en metros', algoritmo7(10));

function algoritmo8(dolar) {
  let soles = 4.1;
  return dolar * soles;
}
console.log('algoritmo8 - Cantidad soles', algoritmo8(50));

function algoritmo9(añoNacimiento) {
  let añoActual = new Date().getFullYear();
  return añoActual - añoNacimiento;
}
console.log('algoritmo9 - Edad', algoritmo9(1986));

function algoritmo10(ingreseEdad) {
  let la_data = [
    { nombre: 'Luis', edad: 18 },
    { nombre: 'Jose', edad: 25 },
    { nombre: 'Maria', edad: 40 },
  ];
  let nombre;
  let edad;
  for (let index = 0; index < la_data.length; index++) {
    let item = la_data[index];
    if (item.edad < ingreseEdad) {
      nombre = item.nombre;
      edad = item.edad;
    }
  }
  if (nombre == undefined && edad == undefined)
    return 'No existe una persona de menor edad';
  else return nombre + ' es menor de edad, ya que tiene ' + edad;
}
console.log('algoritmo10 -', algoritmo10(41));

function algoritmo11(añoTrabajando) {
  let mensaje;
  switch (añoTrabajando) {
    case 0: {
      mensaje = 'Usted no tiene un bono';
      break;
    }
    case 1: {
      mensaje = 'Usted tiene un bono de $100';
      break;
    }
    case 2: {
      mensaje = 'Usted tiene un bono de $200';
      break;
    }
    case 3: {
      mensaje = 'Usted tiene un bono de $300';
      break;
    }
    case 4: {
      mensaje = 'Usted tiene un bono de $400';
      break;
    }
    case 5: {
      mensaje = 'Usted tiene un bono de $500';
      break;
    }
    default: {
      mensaje = 'Usted tiene un bono de $1000';
      break;
    }
  }
  return mensaje;
}
console.log('algoritmo11 -', algoritmo11(5));

function algoritmo12(salarioInicial) {
  let incremento = 10;
  let mensaje1, mensaje2;
  let calculo1, calculo2;
  calculo1 = (salarioInicial + salarioInicial * (incremento / 100)) * 6;
  calculo2 = salarioInicial + salarioInicial * (incremento / 100);
  mensaje1 = 'Su salario al cabo de 6 años es => ' + calculo1;
  mensaje2 = 'El salario recibido en cada uno de los 6 años es => ' + calculo2;
  return '\n' + mensaje1 + '\n' + mensaje2;
}
console.log('algoritmo12 -', algoritmo12(1500));

function algoritmo13() {
  let notaMinima = 11;
  let cantidadAprobados = 0,
    cantidadReprobados = 0;
  let la_alumno = [
    { nombre: 'Luis', nota: 9 },
    { nombre: 'Jose', nota: 13 },
    { nombre: 'Maria', nota: 6 },
    { nombre: 'Frank', nota: 17 },
    { nombre: 'Albert', nota: 12 },
  ];
  for (let index = 0; index < la_alumno.length; index++) {
    let item = la_alumno[index];
    if (item.nota >= notaMinima) {
      cantidadAprobados = cantidadAprobados + 1;
    } else if (item.nota < notaMinima) {
      cantidadReprobados = cantidadReprobados + 1;
    }
  }
  return (
    'TOTAL APROBADOS: ' +
    cantidadAprobados +
    ', TOTAL REPROBADO: ' +
    cantidadReprobados
  );
}
console.log('algoritmo13 -', algoritmo13());

function algoritmo14(cantidadFocos, arg_colorFocos) {
  let nverde = 0, nblanco = 0, nrojo = 0;
  if (cantidadFocos == (arg_colorFocos.length + 1)){
    return "Solo se permite " + cantidadFocos + " como argumento";
  }
  for (let index = 0; index < arg_colorFocos.length; index++) {
    const item = arg_colorFocos[index];
    switch (item.toLocaleLowerCase()) {
      case 'v': {
        nverde = nverde + 1;
        break;
      }
      case 'b': {
        nblanco = nblanco + 1;
        break;
      }
      case 'r': {
        nrojo = nrojo + 1;
        break;
      }
      default: {
        return 'Colo no identificado';
      }
    }
  }
  return (
    '\nUsted tiene ' +
    nverde +
    ' focos verdes \n' +
    'Usted tiene ' +
    nblanco +
    ' focos blancos \n' +
    'Usted tiene ' +
    nrojo +
    ' focos rojos'
  );
}
console.log('algoritmo14 - ', algoritmo14(4, ['V', 'B', 'B', 'R']));
