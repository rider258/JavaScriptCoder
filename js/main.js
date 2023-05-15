



/* En esta entrega quise modificar el codigo ya entregado con el fin de poner en práctica la inclusion o el llamado de las funciones en un proceso unitario. se modifico el codigo original y se anexo el código para armar una base de datos que almacenára los nombres y datos personales de los estudiantes que quieran un descuento en la matrícula de la universidad. Se creo un array de los estudiantes y asi mismo se creo un constructor de objetos para llenar el arreglo */




// Obtener referencia al botón

const nuevoEstudiante = document.getElementById("estudiante");

// Agregar evento de clic al botón 
nuevoEstudiante.addEventListener("click", regEstudiante);

// Crear arreglo global de estudiantes
const estudiantes = [];

// Constructor del objeto Estudiante
class Estudiante {
  constructor(nombre, edad, email, telefono, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
    this.carrera = carrera;
  }
}
let nombre = ""// tuve que declarar esta variable como globlal para poder utilizarla en otra funcion.
// Función para registrar un estudiante y mostrar en alert
function regEstudiante() {
  nombre = prompt("Ingrese su Nombre");
  let edad = prompt("Ingrese su edad");
  let email = prompt("Ingrese su email");
  let telefono = prompt("Ingrese su telefono");
  let carrera = prompt("Ingrese la carrera a la que pertenece");

  let estudiante = new Estudiante(nombre, edad, email, telefono, carrera);
  

  // Guardar el nuevo estudiante en el arreglo de estudiantes
  estudiantes.push(estudiante);

  // ejecutar
  mostrarEstudiantes(); //se invoca la funcion que indexa la info en la base de datos.
  calcularPrecio(); //Se invoca la funcion del descuento.
}

// Función para mostrar los estudiantes en alert
function mostrarEstudiantes() {
  let mensaje = "Estudiantes registrados:\n\n"; //las n significan nueva linea
  estudiantes.forEach(function (estudiante) {
    mensaje += `Nombre: ${estudiante.nombre}\nEdad: ${estudiante.edad}\nEmail: ${estudiante.email}\nTeléfono: ${estudiante.telefono}\nCarrera: ${estudiante.carrera}\n`; // las n significan nueva linea
  });

  // Mostrar mensaje en alert
  alert(mensaje);
}



//crear la función que almacena el nombre y el codigo de descuento 
function calcularPrecio() {

    
    const carrera = prompt(`Hola ${nombre} Ingresa la modalidad que quieres cotizar:\n 
   1: Ingenieria\n
   2: Liceciatura\n
   3: Postgrado`);
   
    let precio = 0;
    let nuevoPrecio = 0;
    let codigoDcto
    const descuento15 = 0.15;
    const descuento20 = 0.2;
    const descuento30 = 0.3;
    const descuento40 = 0.4;

    switch (carrera.toLowerCase()) {
        case "ingenieria":
            precio = 5000;
            alert(`Seleccionaste la modalidad de ${carrera}`);
            codigoDcto = prompt(`${nombre} Introduce tu código de descuento`);

            if (codigoDcto === "coder") {
                nuevoPrecio = precio * (1 - descuento15);
                alert(`${nombre} Ingresaste coder, con este cupón un 15% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "pokemon") {
                nuevoPrecio = precio * (1 - descuento20);
                alert(`${nombre} Ingresaste pokemon, con este cupón un 20% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "javascript") {
                nuevoPrecio = precio * (1 - descuento30);
                alert(`${nombre} Ingresaste javascript, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "desarrollo") {
                nuevoPrecio = precio * (1 - descuento40);
                alert(`${nombre} Ingresaste desarrollo, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else {
                alert("Cupón no válido");
            }

            break;

        case "licenciatura":
            precio = 3000;
            alert(`Seleccionaste la modalidad de ${carrera}`);
            codigoDcto = prompt(`${nombre} Introduce tu código de descuento`);

            if (codigoDcto === "coder") {
                nuevoPrecio = precio * (1 - descuento15);
                alert(`${nombre} Ingresaste coder, con este cupón un 15% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "pokemon") {
                nuevoPrecio = precio * (1 - descuento20);
                alert(`${nombre} Ingresaste pokemon, con este cupón un 20% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "javascript") {
                nuevoPrecio = precio * (1 - descuento30);
                alert(`${nombre} Ingresaste javascript, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "desarrollo") {
                nuevoPrecio = precio * (1 - descuento40);
                alert(`${nombre} Ingresaste desarrollo, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else {
                alert("Cupón no válido");
            }
            break;

        case "postgrado":
            precio = 10000;
            alert(`Seleccionaste la modalidad de ${carrera}`);
            codigoDcto = prompt(`${nombre} Introduce tu código de descuento`);
            if (codigoDcto === "coder") {
                nuevoPrecio = precio * (1 - descuento15);
                alert(`${nombre} Ingresaste coder, con este cupón un 15% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "pokemon") {
                nuevoPrecio = precio * (1 - descuento20);
                alert(`${nombre} Ingresaste pokemon, con este cupón un 20% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "javascript") {
                nuevoPrecio = precio * (1 - descuento30);
                alert(`${nombre} Ingresaste javascript, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else if (codigoDcto === "desarrollo") {
                nuevoPrecio = precio * (1 - descuento40);
                alert(`${nombre} Ingresaste desarrollo, con este cupón un 30% de descuento, el valor a pagar es ${nuevoPrecio}`);
            } else {
                alert("Cupón no válido");
            }
            break;

        default:
            alert("Lo sentimos, esa modalidad no existe.");
            return;
    }
}

const buscarEstudiante = document.getElementById("buscar");

// Agregar evento de clic al botón 
buscarEstudiante.addEventListener("click", findStudent);

function findStudent(){
  const nombreBuscado = prompt("Ingrese el nombre del estudiante a buscar");

const estudiantesEncontrados = estudiantes.filter(estudiante => estudiante.nombre.toLowerCase() === nombreBuscado.toLowerCase());

if (estudiantesEncontrados.length > 0) {
  console.log("Estudiantes encontrados:");
  estudiantesEncontrados.forEach(estudiante => {
    alert(`Nombre: ${estudiante.nombre}\n
    Edad: ${estudiante.edad}
    Email: ${estudiante.email}
    Teléfono: ${estudiante.telefono}
    Carrera: ${estudiante.carrera}
    `);
    
  });
} else {
  alert("No se encontraron estudiantes con ese nombre.");
}

}











