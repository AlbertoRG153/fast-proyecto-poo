
// Links

var irInicio = () => {
    location.href = ("index.html");
}

var irHistorial = () => {
    location.href = ("historial.html");
}

var irCarrito = () => {
    location.href = ("carrito.html");
}

var irUsuario = () => {
    location.href = ("perfil.html");
}

// Funcionalidad del carrito.html

const OPCION_RECIBO = 1;
const OPCION_PEDIDO = 2;

function seleccionarOpcionCarrito(opcion) {
    switch (opcion) {
        case OPCION_RECIBO:
            document.getElementById('pag-pedidos').style.display = "none";
            document.getElementById('pag-recibo').style.display = "block";
            break;

        case OPCION_PEDIDO:
            document.getElementById('pag-pedidos').style.display = "block";
            document.getElementById('pag-recibo').style.display = "none";
            break;

        default:
            break;
    }

}

// Funcionalidad de historial

const OPCION_RECIBO_HISTORIAL = 1;
const OPCION_HISTORIAL = 2;


function seleccionarOpcionHistorial(opcion) {
    switch (opcion) {
        case OPCION_RECIBO_HISTORIAL:
            document.getElementById('pag-historial').style.display = "none";
            document.getElementById('pag-recibo').style.display = "block";
            break;

        case OPCION_HISTORIAL:
            document.getElementById('pag-historial').style.display = "block";
            document.getElementById('pag-recibo').style.display = "none";
            break;

        default:
            break;
    }
}


// Funcionalidad de contador 
const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");

let numero = 0;

sumar.addEventListener("click", () => {
    if (numero == 10) {
    } else {
        numero++;
        contador.innerHTML = numero;
    }

});

restar.addEventListener("click", () => {
    if (numero == 0) {
    } else {
        numero--;
        contador.innerHTML = numero;
    }
});