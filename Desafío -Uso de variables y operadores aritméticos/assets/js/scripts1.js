/* Operaciones con dos números */

    /* Solicitar datos a través de prompt para generar las variables num1 y num2*/
    var num1 = prompt("Ingrese el primer número"); /* Solicitar valor variable num 1 y num 2 */
    var num2 = prompt("Ingrese el segundo número");



    document.write("La suma es: "); /* Mensaje de suma */
    document.write(parseInt(num1)+parseInt(num2)); /* Transformación de caracter a número entero y realización de suma */
    document.write(" | "); 
    document.write("La resta es: "); /* Mensaje de resta */
    document.write(parseInt(num1)-parseInt(num2));
    document.write(" | ");
    document.write("La división es: "); /* Mensaje de division */
    document.write(parseInt(num1)/parseInt(num2));
    document.write(" | ");
    document.write("La multiplicación es: "); /* Mensaje de multiplicacion */
    document.write(parseInt(num1)*parseInt(num2));
    document.write(" | "); 
    document.write("El módulo es: "); /* Mensaje de modulo */
    document.write(parseInt(num1)%parseInt(num2));
