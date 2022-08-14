
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