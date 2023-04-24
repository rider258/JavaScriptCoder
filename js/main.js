
// Obtener referencia al botón con descuento
const descuento = document.getElementById("descuento");

// Agregar evento de clic al botón sin descuento
descuento.addEventListener("click", calcularPrecio);

//crear la función que almacena el nombre y el codigo de descuento 
function calcularPrecio() {
    const nombre = prompt("Como te llamas?");
    const carrera = prompt("Ingresa la modalidad que quieres cotizar, Ingenieria, Liceciatura o Postgrado");
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
