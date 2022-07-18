let edad = prompt("Tu edad por favor");
let cedula = 1;
let noCedula = 0;
let verificacion = prompt(
  "Escribe 1 si tienes cedula o escribe 0 si no tienes"
);

if (edad >= 18) {
  if (verificacion == cedula) {
    console.log("Puedes votar");
  } else if (verificacion == noCedula) {
    console.log("No puedes votar lo siento");
  }
} else {
  console.log("Lo sentimos no puedes votar");
}
