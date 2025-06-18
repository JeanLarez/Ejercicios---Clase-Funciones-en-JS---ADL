// Definimos una función llamada 'suma' que recibe dos parámetros: 'a' y 'b'
function suma(a, b){
    // La palabra clave 'return' indica el valor que la función va a devolver
    // En este caso, devuelve la suma de 'a' y 'b'
    return a + b;
}

// Podemos usar la función de diferentes maneras:

// Opción 1: Mostrar el resultado directamente en una alerta (ventana emergente)
// alert(suma(2, 3));

// Opción 2: Guardar el resultado de la función en una variable
let resultado = suma(2, 3); // La función suma(2, 3) devuelve 5, que se guarda en 'resultado'

// Opción 3: Mostrar el resultado en la consola
console.log(resultado); // Imprime 5 en la consola


//Notas 

// El return en una función permite devolver un valor al lugar donde se llamó la función.

// Ese valor puede ser usado directamente, guardado en una variable o mostrado en pantalla.

// Una función puede devolver cualquier tipo de dato: números, texto, objetos, etc.

// Si una función no tiene return, devuelve undefined por defecto.