//Definimos nuestras variables
var name=prompt("Ingresa tu nombre: ", "Lizette");
var apellido = prompt("Ingresa un apellido: ", "Pérez");
var carrera = prompt("Ingresa nombre de carrera: ", "Desarrollo Web");


/* Ramo 1 */
var ramo1 = prompt("Ingresa ramo: ", "HTML");  
var ramo1nota1 = prompt("Ingresa Nota 1", "4");
var ramo1nota2 = prompt("Ingresa Nota 2", "5");
var ramo1nota3 = prompt("Ingresa Nota 3", "4");

ramo1nota1 = parseInt(ramo1nota1);
ramo1nota2 = parseInt(ramo1nota2);
ramo1nota3 = parseInt(ramo1nota3);

var Promedio1 = (ramo1nota1 + ramo1nota2 + ramo1nota3)/3;
var decimal1 = Promedio1.toFixed(2);

/* Ramo 2 */
var ramo2 = prompt("Ingresa ramo: ", "CSS");  
var ramo2nota1 = prompt("Ingresa Nota 1", "3");
var ramo2nota2 = prompt("Ingresa Nota 2", "4");
var ramo2nota3 = prompt("Ingresa Nota 3", "5");

ramo2nota1 = parseInt(ramo2nota1);
ramo2nota2 = parseInt(ramo2nota2);
ramo2nota3 = parseInt(ramo2nota3);

var Promedio2 = (ramo2nota1 + ramo2nota2 + ramo2nota3)/3;
var decimal2 = Promedio2.toFixed(2);

/* Ramo 3 */
var ramo3 = prompt("Ingresa ramo: ", "JavaScript");  
var ramo3nota1 = prompt("Ingresa Nota 1", "2");
var ramo3nota2 = prompt("Ingresa Nota 2", "6");

ramo3nota1 = parseInt(ramo3nota1);
ramo3nota2 = parseInt(ramo3nota2);


var notamin = (4*3)-ramo3nota1-ramo3nota2;
var decimal3 = notamin.toFixed(2);


//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");
document.write("<h2>Nombre: </h2>",  "<h3> "+name+" "+apellido+"</h3>");
document.write("<h2>Curso: </h2>", "<h3> "+carrera+"</h3>");

//Aquí creamos nuestra tabla con bootstrap
document.write("<table class='table'>");
document.write("<caption>");
document.write("<h3>Para aprobar el ramo "+ramo3+" con nota 4.00, necesitas obtener un "+decimal3+" en la nota 3</h3>");
document.write("</caption>");

//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");

//Con tr definimos las columnas de la tabla
document.write("<tr>");


//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'>"+ramo1+"</th>");
document.write("<td>"+ramo1nota1+"</td>");
document.write("<td>"+ramo1nota2+"</td>");
document.write("<td>"+ramo1nota3+"</td>");
document.write("<td>"+decimal1+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<td scope='row'>"+ramo2+"</th>");
document.write("<td>"+ramo2nota1+"</td>");
document.write("<td>"+ramo2nota2+"</td>");
document.write("<td>"+ramo2nota3+"</td>");
document.write("<td>"+decimal2+"</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<td scope='row'>"+ramo3+"</th>");
document.write("<td>"+ramo3nota1+"</td>");
document.write("<td>"+ramo3nota2+"</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("<tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
//Aquí cerramos nuestra tabla

document.write("</div>");
//Aquí cerramos nuestro div contenedor
