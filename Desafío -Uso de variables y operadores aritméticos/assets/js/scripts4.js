/* Suma y promedio*/

/* Definir variables */
var num1 = prompt("Ingrese el primer número: ");
var num2 = prompt("Ingrese el segundo número: ");
var num3 = prompt("Ingrese el tercer número: ");
var num4 = prompt("Ingrese el cuarto número: ");
var num5 = prompt("Ingrese el quinto número: ");

var sumatoria = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);
var promedio = Math.floor(sumatoria/5);

document.write("La sumatoria de todos los números es: " + sumatoria + " y el promedio es: " + promedio + "." );