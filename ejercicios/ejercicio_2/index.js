// Seleccionamos el elemento <body> del documento HTML y lo guardamos en la variable 'body'
let body = document.querySelector("body");

// Definimos una función llamada 'pintarColor' que recibe un parámetro 'color'
function pintarColor(color) {
  // Cambiamos el color de fondo del body usando el parámetro recibido
  elemento.style.backgroundColor = color;
}

// Llamamos a la función 'pintarColor' con diferentes colores
pintarColor("black");  // El fondo será negro
pintarColor("red");    // El fondo será rojo
pintarColor("yellow"); // El fondo será amarillo


// Notas

// Es importante que el nombre de la función que llamas coincida con el que definiste (pintarColor en este caso).

//Cada llamada a la función cambia el color de fondo del body.