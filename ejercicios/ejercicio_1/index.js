// Seleccionamos el elemento <body> del documento HTML y lo guardamos en la variable 'body'
let body = document.querySelector('body');

// Definimos una función llamada 'pintarRojo' que no recibe parámetros
function pintarRojo() {
    // Cambiamos el color de fondo del body a rojo
    body.style.backgroundColor = 'red';
}

// Definimos una función llamada 'pintarAmarillo' que tampoco recibe parámetros
function pintarAmarillo() {
    // Cambiamos el color de fondo del body a amarillo
    body.style.backgroundColor = 'yellow';
}

// Notas

// Usamos document.querySelector('body') para seleccionar el elemento <body> del DOM.

//Las funciones pintarRojo y pintarAmarillo permiten cambiar el color de fondo del body cuando se llaman.

//Así, podemos reutilizar estas funciones en botones o eventos para manipular el aspecto de la página de forma sencilla.