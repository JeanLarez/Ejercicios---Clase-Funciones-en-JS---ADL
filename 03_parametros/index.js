// ===============================
// Ejemplo 1: Cambiar el color de fondo del body
// ===============================

// let body = document.body; // Obtenemos el elemento <body> del documento HTML

// let pintarBody = function(color) { // Definimos una función que recibe un color como parámetro
//     body.style.backgroundColor = color; // Cambiamos el color de fondo del body usando el parámetro recibido
// }       

// pintarBody('red'); // Llamamos a la función y le pasamos el color 'red' (rojo)


// ===============================
// Ejemplo 2: Función con múltiples parámetros
// ===============================

// function multiplesParametros(par1, par2, par3) { // Definimos una función con tres parámetros
//     console.log(par2); // Mostramos en consola el valor del segundo parámetro
// }

// multiplesParametros(3, 2, 1); // Llamamos la función pasando tres argumentos: 3, 2 y 1
// // En este caso, la consola mostrará: 2


// ===============================
// Ejemplo 3: Parámetros por defecto
// ===============================

// function pintarBody(color = 'black') { // El parámetro 'color' tiene un valor por defecto: 'black'
//     document.body.style.backgroundColor = color; // Cambiamos el color de fondo del body
// }

// pintarBody(); // Llamamos la función sin argumentos, así que el color será 'black'
// pintarBody('red'); // Llamamos la función con 'red', así que el color será rojo
// pintarBody('yellow'); // Llamamos la función con 'yellow', así que el color será amarillo


// ===============================
// Ejemplo 4: ¿Qué muestra la consola?
// ===============================

function multiplesParametros(par1, par2 = 2, par3 = 2) { // par2 y par3 tienen valores por defecto
    console.log(par2 + par3); // Mostramos la suma de par2 y par3
}

multiplesParametros(3); // Llamamos la función solo con el primer argumento
// Como no pasamos valores para par2 y par3, se usan los valores por defecto (2 y 2)
// La consola mostrará: 4


//Notas ===============================

// Los parámetros por defecto permiten que una función tenga valores si no se pasan argumentos.
// Puedes definir funciones con uno o varios parámetros.
// Al llamar una función, los argumentos se asignan en orden a los parámetros.
// Si no pasas un argumento y el parámetro tiene un valor por defecto, se usará ese valor.






