
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


let numero = 0;

var sumar = () => {
    if (numero == 10) {
    } else {
        numero++;
        contador.innerHTML = numero;
    }
}

var restar = () => {
    if (numero == 0) {
    } else {
        numero--;
        contador.innerHTML = numero;
    }
}



// Funcionalidad index.html
console.log('Categorias', categorias);

var indiceCategoria = null;
var indiceEmpresa = null;

function mostrarCategorias() {

    document.getElementById('categorias').innerHTML = '';

    categorias.forEach((categoria, i) => {

        document.getElementById('categorias').innerHTML +=
            ` <div onclick="mostrarEmpresas(${i});" class="tarjeta">
                    <div>
                        <img src="${categoria.imagen}" alt="">
                        <h5>${categoria.nombreCategoria}</h5>
                    </div>
                </div>`;

    });
}

mostrarCategorias();

function mostrarEmpresas(indice) {
    console.log('Se mostrara las empresas de la categoria', indice);
    document.getElementById('pag-categorias').style.display = "none";
    document.getElementById('pag-empresas').style.display = "block";

    let cat = categorias[indice];
    indiceCategoria = indice;

    document.getElementById('empresas').innerHTML += '';

    cat.empresas.forEach((empresa, i) => {

        document.getElementById('empresas').innerHTML +=
            `<div onclick="mostrarProductos(${i})" class="tarjeta">
                <div>
                    <img src="${empresa.imagen}" alt="">
                    <h5>${empresa.nombreEmpresa}</h5>
                </div>
            </div>`;
    });
}


function mostrarProductos(indice) {
    console.log('Se mostrara los productos de la empresa', indice);
    document.getElementById('pag-empresas').style.display = "none";
    document.getElementById('pag-productos').style.display = "block";

    let emp = categorias[indiceCategoria].empresas[indice];
    indiceEmpresa = indice;

    document.getElementById('productos').innerHTML += '';

    emp.productos.forEach((producto, i) => {

        document.getElementById('productos').innerHTML +=
            `<div class="tarjeta tarjeta-producto">
                <div>
                    <img src="${producto.imagen}" alt="">
                    <h5>${producto.nombreProducto}</h5>
                    <div class="info-producto">
                        <p>L ${producto.precio}</p>
                        <i onclick="mostrarDetalleProducto(${i})" class="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            </div>`;

    });

}

function mostrarDetalleProducto(indice) {
    console.log('Se mostrara el detalle del producto', indice);
    document.getElementById('pag-productos').style.display = "none";
    document.getElementById('pag-detalle-producto').style.display = "block";

    let det = categorias[indiceCategoria].empresas[indiceEmpresa].productos[indice];

    console.log('Detalle del producto: ', JSON.stringify(det));

    document.getElementById('detalle-producto').innerHTML =
        ` <div class="portada">
        <img src="${det.imagen}" alt="">
    </div>
    <div class="contenido-producto">
        <div>
            <h1>${det.nombreProducto}</h1>
        </div>
        <div class="info-producto-2">
            <p>L ${det.precio}</p>
            <div class="contador">
            <button onclick="restar()" class="btn-contador"><i class="fa-solid fa-circle-minus"></i></button>
            <p id="contar">0</p>
            <button onclick="sumar()" class="btn-contador"><i class="fa-solid fa-circle-plus"></i></button>
            </div>
        </div>
        <div class="descripcion">
            <h1>Descripcion</h1>
            <p>${det.descripcion}</p>
        </div>
        <div class="btn-orden">
            <button>Agregar Orden</button>
        </div>`;
}

