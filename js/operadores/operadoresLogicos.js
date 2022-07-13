let a = 5;
let valMin = 0, valMax = 10;

//operador and (&&)
if (a >= valMin && a <= valMax) {
    console.log("Dentro del rango");
}
else{
    console.log("Fuera del rango");
}

//operador or (||)
let vacaciones = true, diaDescanso = false
if (vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego de su hijo");
} 
else{
    console.log("El padre esta ocupado");
}