//Tipo de dato String
var nombre = "Juanes";
console.log("variable nombre " + nombre);
console.log(typeof nombre);

//las variables son dinamicas y pueden cambiar a medida que pasa el programa
nombre = 10;
console.log("variable nombre cambiada " + nombre);
console.log(typeof nombre);

//Tipo de dato Numerico
var numero = 1000;
console.log(numero);
console.log(typeof numero);

//Tipo de dato object
var objeto = {
  nombre: "Juan",
  apellido: "Lopez",
  telefono: "12483412",
};
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean
var verdadero = true;
var falso = false;
console.log(verdadero);
console.log(falso);

//Tipo de dato function
function calcularEdad() {
  var edad = prompt("Cual es tu edad?");
  if (edad >= 18){
    alert("Eres mayor de edad");
  }else{
    alert("Eres menor de edad");
  }
}
//calcularEdad();

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);

//Tipo de dato undifined
var x;
console.log(x);

//Tipo de dato Null
// null = ausencia de valor
var y = null;
console.log(y);

//Tipo de Dato Array es un object
var autos = ["BMW", "Mercedes", "Reanult"];
console.log(autos);
console.log(autos[0]);
console.log(typeof autos);


