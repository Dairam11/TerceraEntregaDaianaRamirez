const servicios = [
    { nombre: "1 - Semipermanente", precio: 3000 },
    { nombre: "2 - Capping gel", precio: 4000 },
    { nombre: "3 - Esculpidas", precio: 5000 },
];

let carrito = []
const IVA = 0.21;
const cargo1 = 0.05;
const cargo2 = 0.07;
const cargo3 = 0.10;
let precio = 0

let eleccion = prompt("¡¡Hola bienvenida/o a by Nail!! ¿Deseas agendar un turno? Para agendar un turno es necesario abonarlo previamente");

while (eleccion != "si" && eleccion != "no") {
    alert("Por favor ingrese si o no");
    eleccion = prompt("¿Deseas agendar un turno? Por favor respondé si o no");
}

if (eleccion == "si") {
    alert("Te dejamos nuestra lista de servicios");
    let todosLosServicios = servicios.map(
        (servicios) => servicios.nombre + " " + servicios.precio + "$"
    );
    alert(todosLosServicios.join(" - "));
} else if (eleccion == "no") {
    alert("Gracias por visitar nuestra web");
}

while (eleccion != "no" && eleccion != 0) {
    let servicios = prompt("Agrega tu servicio al carrito");
    if (servicios == 1 || servicios == 2 || servicios == 3) {
        switch (servicios) {
            case 1:
                precio += 3000;
                break;

            case 2:
                precio += 4000;
                break;

            case 3:
                precio += 5000;
                break;

            default:
                break;
        }

        let cantidad = parseInt(prompt("¿Cuantos turnos querés solicitar?"));

        carrito.push({ servicios, cantidad, precio });
        console.log(carrito)

    } else {
        alert("no tenemos ese servicio");
    }

    precio = parseInt(prompt
        ("0 - Salir o continuar al pago")
    );

    break;
}

if (precio != 0) {
    let extras = parseInt(prompt('El valor del servicio no incluye decoraciónes, ni IVA, elegí tu extra para ver el total a pagar. \n 1- Extra decoración con brillos \n 2- Extra decoración a mano alzada \n 3- Extra decoración con piedras \n 4- Sin extras'));

    if (extras == 1) {
        alert('Total a pagar $ ' + aplicarImpuestosyCargos(IVA, cargo1));
    }
    else if (extras == 2) {
        alert('Total a pagar $ ' + aplicarImpuestosyCargos(IVA, cargo2));
    }
    else if (extras == 3) {
        alert('Total a pagar $ ' + aplicarImpuestosyCargos(IVA, cargo3));
    }
    else if (extras == 4) {
        alert('Total a pagar $ ' + aplicarImpuestosyCargos(IVA, 0));
    }
    else {
        alert('Opcion incorrecta');
    }
}

function aplicarImpuestosyCargos(impuestos, cargos) {
    let precioConImpuestos = precio * (1 + impuestos);
    let precioConImpuestosyCargos;
    if (cargos != 0) {
        precioConImpuestosyCargos = precioConImpuestos * (1 + cargos);
    } else {
        precioConImpuestosyCargos = precioConImpuestos;
    }
    return precioConImpuestosyCargos;
}