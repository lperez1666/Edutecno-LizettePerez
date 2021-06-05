/* Temperatura de grados Celsius  a grados Kelvin y Fahrenheit.*/

    /* Definir variables */
    var celsius = parseInt(prompt("Ingresa temperatura en °C: ")); /* Solicitar valor variable celsius */
    var kelven = celsius + 273.15;
    var fahrenheit = (celsius  * 9/5) + 32;


    document.write( celsius+"°C equivale a: "); /* Inicio mensaje, celsius ingresados */
    document.write(kelven + "°K (grados Kelvin) y "); /* Resultado de variable Kelven */
    document.write(fahrenheit + "°F (grados Fahrenheit)"); /* Resultado de variable Fahrenheit */






    