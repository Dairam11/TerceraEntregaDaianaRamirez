const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContent = document.getElementById("modalContent");

const servicios = [
    {
        id: 1,
        nombre: "Semipermanente",
        precio: 3000,
    },
    {
        id: 2,
        nombre: "Capping gel",
        precio: 4000,
    },
    {
        id: 3,
        nombre: "Esculpidas",
        precio: 5000,
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

servicios.forEach((serv) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <h3>${serv.nombre}</h3>
        <p class="valor">$ ${serv.precio} </p>
    `;

    shopContent.append(content);

    let reservar = document.createElement("button")
    reservar.innerText = "Reservar";
    reservar.className = "reserva"

    content.append(reservar);

    reservar.addEventListener("click", () => {
        carrito.push({
            id: serv.id,
            nombre: serv.nombre,
            precio: serv.precio,
        });

        console.log(carrito);
        saveLocal();
    })
});

const mostrarCarrito = () => {
    modalContent.innerHTML = "";
    modalContent.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `
    <h1 class ="modalHeadertitle"> Carrito.</h1>
    `;

    modalContent.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener("click", () => {
        modalContent.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((serv) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carritoContent";
        carritoContent.innerHTML = `
        <h3>${serv.nombre}</h3>
        <p> $ ${serv.precio}</p>
    `;

        modalContent.append(carritoContent);

        let eliminar =document.createElement("span");
        eliminar.innerText = "✖️";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarServicio);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalPagar = document.createElement("div");
    totalPagar.className = "totalContent";
    totalPagar.innerHTML = `Total a pagar: $  ${total}`;
    modalContent.append(totalPagar);
};

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarServicio = () => {
    const foundID = carrito.find((element) => element.id);

    carrito =carrito.filter((carritoID) => {
        return carritoID !== foundID;
    });

    saveLocal();
    mostrarCarrito();
};

const saveLocal=() =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));