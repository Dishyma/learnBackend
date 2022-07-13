let miNumero = "18";
//console.log(typeof miNumero);

let edad = Number(miNumero);
//console.log(typeof edad);
if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log("Muy joven para votar");
}

let resultado = edad >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado);

let numero = "2123142351";
console.log(typeof numero);
let edad1 = Number(numero)
let edad2 = numero;
console.log(typeof edad1);
console.log(edad1);
console.log(typeof edad2);

if (edad2 === edad1){
    console.log("son iguales");
}else{
    console.log("no son iguales");
}

if (edad2 == edad1) {
    console.log("son iguales");
}else{
    console.log("no son iguales");
}

